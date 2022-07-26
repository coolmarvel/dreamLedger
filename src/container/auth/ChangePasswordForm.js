import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {changeField, findPwd, initializeForm, updatePassword} from '../../modules/auth';
import { withRouter } from 'react-router-dom';

import ChangePasswordAuthForm from "../../component/auth/ChangePasswordAuthForm";
import DialogMsgBox from "../../component/common/DialogMsgBox";


const ChangePasswordForm = ({ history }) => {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { userId,form, changeError, returnValue} = useSelector(({ auth }) => ({
    userId:auth.userId,
    form: auth.changePassword,
    changeError: auth.changePassword.error,
    returnValue:auth.changePassword.returnValue,
  }));
  // 인풋 변경 이벤트 핸들러
  const onChange = e => {

      // const regex1 = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,16}$/;
       const regex1 = /^[a-zA-z]*[0-9]*[$!@$#]*$/;
      const { value, name } = e.target;
      if (!regex1.test(value)) {
          return;
      }
      if (value.includes('\\')) {
          return;
      }
      if (value.length>16) {
          return;
      }

      dispatch(
      changeField({
        form: 'changePassword',
        key: name,
        value,
      }),
    );
  };

  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { curPassword, newPassword,newPassword1 } = form;
    // 하나라도 비어있다면
    if (userId === null || userId ==='') {
      setError('로그인을  먼저 해주세요.');
      return;
    }
  if ([userId,curPassword, newPassword,newPassword1 ].includes('')) {
      setError('빈 칸을 모두 입력하세요.');
      return;
  }

      if(newPassword !== newPassword1){
          setError('비밀번호를 동일하게 입력해주세요..');
          return;
      }

    setError(null);
    dispatch(
        changeField({
          form: 'changePassword',
          key: 'returnValue',
          value:null
        }));
    dispatch(
        changeField({
          form: 'changePassword',
          key: 'error',
          value:null
        }));


    dispatch(
        updatePassword(
            {
                userId:userId,
                curPassword:curPassword,
                newPassword:newPassword,
            }
        )
    );
  };

  // 컴포넌트가 처음 렌더링 될 때 form 을 초기화함
  useEffect(() => {
    dispatch(initializeForm('changePassword'));
  }, [dispatch]);

  // 회원가입 성공 / 실패 처리
  useEffect(() => {
    if (changeError) {
      // 기타 이유
      setError('비밀번호를 제대로 입력해주세요. ');
      return;
    }

      if (returnValue) {
          console.log('비밀번호 변경 성공');
          console.log(returnValue);
          history.push('/');
      }

  }, [changeError, returnValue, dispatch]);


  const onCancel = () => {
      history.push('/');
  }
    // const onCloseDialog = ()=>{
    //
    // }

    // if(returnValue){
    //     return (
    //         <div>
    //             <DialogMsgBox msgTitle={'비밀번호 변경을 완료하였습니다.'} msgContents={''}  onClose = {onCloseDialog} open={true}> </DialogMsgBox>
    //
    //         </div>
    //
    //     );
    // }
    // else {
        return (
            <div>
                <ChangePasswordAuthForm
                    type="changePassword"
                    form={form}
                    onChange={onChange}
                    onSubmit={onSubmit}
                    onCancel={onCancel}
                    error={error}
                />

            </div>
        );
    // }



};

export default withRouter(ChangePasswordForm);
