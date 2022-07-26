import React, {Component, useEffect, useState} from 'react';
import {
    FormControl,
    InputBase,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
    withStyles
} from "@material-ui/core";
import {useSelector} from "react-redux";
import getUUID from "../../lib/api/commonlib";
import client from "../../lib/api/client";

const useStyles =  (props) => makeStyles({
    formControl: {
        minWidth: 120,
        // height: 48,
        // padding: '30px',
        // margin : '10px',
    },
    selectEmpty: {
        minWidth : 120,
    },
    root: props.root
})

const  PsychometryField = (props) => {


    const classes = useStyles(props);
    const { refresh, editing,onChangeImgFile} = props;
    const { m_psychometryFiles} = useSelector(({ auth}) => ({
        m_psychometryFiles:auth.psychometryFiles
    }));

    const fileInput = React.useRef(null);

    const [file,setFile] =  useState(null);


    const handleChange = e => {


        if(file.id !== undefined){
            onChangeImgFile(file.id,file.key,1,undefined,e.target.files[0]);
        }
        else {
            let fileObj = new Object();
            fileObj.key = getUUID();
            setFile(fileObj);
            onChangeImgFile(fileObj.id,fileObj.key,1,undefined,e.target.files[0]);
        }


    };
    useEffect(
        ()=>{
            setFile(new Object());
            m_psychometryFiles.forEach((file) => {
                setFile(file)
            });
        },[m_psychometryFiles]);

    useEffect( () =>{
        if(editing && refresh){
            fileInput.current.value='';
        }
    },[refresh]);

    var downloadUrl = '#';
    if(file === null){
        setFile(new Object());
        m_psychometryFiles.forEach((file) => {
           // if (file.id === info.fileId) {
                setFile(file)
           // }
        });
    }
    else if(file.id !== undefined ){
        downloadUrl = client.defaults.baseURL +'/v1/files/down/'+ file.id;
    }




    if (editing) { // 수정모드
            return (
                <div className="edit-cont-wrap">
                    <div className="edit-cont no-close">
                        <a href="https://www.work.go.kr/consltJobCarpa/jobPsyExamNew/jobPsyExamYouthList.do"
                           className="arr-link" target="_blank" title="새 창 열림">워크넷 청소년 심리검사 바로가기</a>
                        <p className="edit-cont-desc02">결과파일을 첨부 할 수 있습니다.</p>
                        <input
                            type="file"
                            ref={fileInput}
                            onChange={handleChange}
                            className="edit-file01"

                        />
                        {file !== null && file.id !== undefined && <p className="edit-cont-desc01"><a href={downloadUrl} className="info-file">{file.name}</a></p>}
                    </div>
                </div>

            );
        }
    else {
        return(
            <div>
                <div className="info-cont-wrap">
                    <div className="info-cont">
                        <div className="info-cont-inner01">
                            {file !== null && file.id !== undefined && <a href={downloadUrl} className="info-file">{file.name}</a>}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default  PsychometryField;
