import client from './client';
import axios from "axios";




// 로그인
export const login = async ({ userId, password }) => {
    return await client.post('/v1/common/login', {
            id: userId,
            password: password,
        }
    );

}

export const save = async ({ formData }) => {

      let sToken = localStorage.getItem("Authorization");
      return await client.post('/v1/member/fields/cud',formData,{
            "Content-type": "multipart/form-data",
            "Authorization": sToken
          }

      );
    // axios({
    //     method: "post",
    //     url: 'http://localhost:8090/v1/member/fields/cud',
    //     data: formData,
    //     headers: { "Content-Type": "multipart/form-data" }
    // });
}
 //   client.get('/v1/member/'+userId);
// 회원가입
export const register = async ({ userName, userId, password, emailId,emailDomain,validPeriod}) => {
    return await client.post('/v1/member', {
            name: userName,
            id: userId,
            password: password,
            email: emailId + '@' + emailDomain,
            expirationDate: validPeriod
        }
    );
};
// 로그아웃
export const logout = async ({ userId, password }) =>
    await client.get('/v1/member/'+userId);
    // client.post('/v1/member/'+userId);

export const retireMember = async ({ userId, state }) => {
    let sToken = localStorage.getItem("Authorization");
    return await client.put('/v1/member', { id:userId, state:state },{"Authorization": sToken});
}


export const existMember = async ({ userId, password }) =>{
    let sToken = localStorage.getItem("Authorization");
    return   await client.get('/v1/member/exists?id='+userId+'&password='+password,{"Authorization": sToken});
}




export const updatePassword = async ({ userId, curPassword ,newPassword}) =>{
    let sToken = localStorage.getItem("Authorization");
    return await client.put('/v1/member/password', { id:userId, password:curPassword ,newPassword:newPassword,confirmPassword:newPassword},{"Authorization": sToken});
}




export const updateUser = async ({userName,userId, emailId,emailDomain,validPeriod}) =>{
    let sToken = localStorage.getItem("Authorization");
    return await client.put('/v1/member', {
            name: userName,
            id: userId,
            email: emailId + '@' + emailDomain,
            expirationDate: validPeriod
        }
        ,{"Authorization": sToken}
    );
}




export const findPassword =  async ({ userId, userName,email}) =>{
    let sToken = localStorage.getItem("Authorization");
    return await client.post('/v1/member/password',{ id:userId, name:userName,email:email},{"Authorization": sToken});
}


export const findId = async ({ userName,email}) => {
    let sToken = localStorage.getItem("Authorization");
    return await client.get('/v1/member?name='+userName+'&email='+email,{"Authorization": sToken});
}



export const search = async ({userId}) => {
    // return await client.get('/v1/member/'+userId);
    let sToken = localStorage.getItem("Authorization");
    return await client.get('/v1/member/preview/'+userId,{"Authorization": sToken});
//
}

export const deleteMember = async ({ idList}) => {
    let sToken = localStorage.getItem("Authorization");

    return await client.put('/v1/member/all',idList,
        {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": sToken

            }
        }
        );
}
export const downloadFile = async ({fieldNames}) =>{
    let sToken = localStorage.getItem("Authorization");
    return await client.get('/v1/member/cvs?'+fieldNames,{"Authorization": sToken}
        // {
        //     headers: {
        //         'Content-Type': 'text/plain;charset=EUC-KR',
        //         'type': 'text/plain;charset=EUC-KR',
        //         'ResponseType': 'text/plain;charset=EUC-KR'
        //
        //     }
        // }

    );
}


export const searchMember = async ({   regDateStart, regDateEnd,birthdayStart,birthdayEnd,memberId,
                                     member_student_name,member_student_sex,edulevel_schoolName,edulevel_schoolType,page,psize}) => {
    let sToken = localStorage.getItem("Authorization");

    var sQuery = 'memberState=ACTIVE&';
    if(birthdayEnd !== undefined  && birthdayEnd.length >0){
        sQuery = sQuery + 'birthdayEnd='+birthdayEnd;

    }
    if(birthdayStart !== undefined && birthdayStart.length >0){
        sQuery = sQuery + '&birthdayStart='+birthdayStart ;

    }
    if(memberId !== undefined && memberId.length >0){
        sQuery = sQuery + '&member.id=' +memberId ;
    }
    if(member_student_sex !== undefined && member_student_sex.length >0){
        sQuery = sQuery + '&member.student.sex=' + member_student_sex ;


    }
    if(page !== undefined && page.length >0){
        sQuery = sQuery + '&page=' + page ;
    }
    if(psize !== undefined && psize.length >0){
        sQuery = sQuery + '&psize=' + psize ;
    }
    if(regDateEnd !== undefined && regDateEnd.length >0){
        sQuery = sQuery + '&regDateEnd=' + regDateEnd ;

    }
    if(regDateStart !== undefined && regDateStart.length >0){
        sQuery = sQuery + '&regDateStart=' +  regDateStart;

    }
    if(edulevel_schoolName !== undefined && edulevel_schoolName.length >0){
        sQuery = sQuery + '&schoolName=' + edulevel_schoolName ;

    }
    if(edulevel_schoolType !== undefined && edulevel_schoolType.length >0){
        sQuery = sQuery + '&schoolType=' + edulevel_schoolType ;

    }
    if(member_student_name !== undefined && member_student_name.length >0){
        sQuery = sQuery + '&name='+ member_student_name;
    }



    return await client.get('/v1/member/manage?'+sQuery,{"Authorization": sToken});

}




export let searchCode = async ({codeTypeName}) => {
    let sToken = localStorage.getItem("Authorization");
    return  await client.get('/v1/code?codeType.name='+codeTypeName,{"Authorization": sToken});
}


