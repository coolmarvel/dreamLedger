import React, {Component, useEffect, useState} from 'react';
import {
    makeStyles,
} from "@material-ui/core";
import {useSelector} from "react-redux";
import getUUID from "../../lib/api/commonlib";
import client from "../../lib/api/client";
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    input: {
        display: 'none',
    },
    formControl: {
        minWidth: 120,
        // height: 48,
        // padding: '30px',
        // margin : '10px',
    },
    selectEmpty: {
        minWidth : 120,
    },

}));
const  PortfolioFileField   = (props) => {

    const classes = useStyles(props);
    const { info,refresh,editing,onChangeImgFile,onRemove} = props;


    const fileInput = React.useRef(null);
    const onRemoveField=(e) =>{
        onRemove(info.key);
    }


    const [file,setFile] =  useState(info);

    const handleChange = e => {

        onChangeImgFile(file.id,file.key,info.seq,info.id,e.target.files[0]);

        // if(file.id !== undefined){
        //     onChangeImgFile(file.id,file.key,info.seq,info.fieldId,e.target.files[0]);
        // }
        // else {
        //     onChangeImgFile(file.id,file.key,info.seq,info.fieldId,e.target.files[0]);
        // }


    };


    useEffect( () =>{
        if(editing && refresh){
            fileInput.current.value='';
        }
    },[refresh]);

    var downloadUrl = '#';
    if(file === null){
        setFile(new Object());
    }
    else if(file.id !== undefined ){
        downloadUrl = client.defaults.baseURL +'/v1/files/down/'+ file.id;
    }



        if (editing) { // 수정모드
            return (
                <div className="edit-cont-idx-wrap" data-cont-idx="9">
                    <div className="edit-cont-wrap">
                        <div className="edit-cont">
                            <div className="pot-wrap">
                                <div className="pot-left">파일</div>
                                <div className="pot-right">
                                    <input type="file"  ref={fileInput} className="edit-file01" onChange={handleChange}/>
                                    {file !== null && file.id !== undefined && <p className="edit-cont-desc01"><a href={downloadUrl} className="info-file">{file.name}</a></p>}</div>

                            </div>
                            <button type="button" className="btn-cont-del" onClick={onRemoveField}> 입력 정보 삭제
                            </button>
                        </div>
                    </div>
                </div>

            );
        }
        else {
            return(
                <div>
                    <div className="info-cont-wrap">
                        <div className="info-cont">
                            <div className="info-cont-inner03">
                                <div className="cont-inner-left">파일</div>
                                <div className="cont-inner-right">
                                    {file !== null && file.id !== undefined && <a href={downloadUrl} className="info-file">{file.name}</a>}

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            );
        }


}

export default PortfolioFileField;
