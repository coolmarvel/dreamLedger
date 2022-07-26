import React, {Component, useEffect, useState} from 'react';
import {
    makeStyles,
    TextareaAutosize,
    TextField,
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
    photo: {
        height: '100%',
        width: 'auto',
        zIndex:-10

    }
}));
const  AwardField  = (props) => {

    const classes = useStyles(props);
    const { info,onUpdate, onRemove, editing,onChangeImgFile,onCheckDeleteFile} = props;
    const { m_awardsFiles} = useSelector(({ auth}) => ({
        m_awardsFiles:auth.awardsFiles
    }));



    const onUpdateField = (e) => {
        const regex1 = /^[0-9\b]{0,4}$/;
        const { name, value } = e.target;

        if(e.target.name ==='year' ){
            if (regex1.test(e.target.value)) {
                onUpdate(info.key,name,value);
            }
        }
        else {
            onUpdate(info.key,name,value);
        }
    }
    const onRemoveField=(e) =>{
        onRemove(info.key);
    }

    // const { returnValue }  = useSelector(({ auth}) => ({returnValue:auth.save.returnValue }));

    const [state,setState] = useState({fileName:'',pdfFile:null})
    const [file,setFile] =  useState(null);

    const handleChange = e => {
        setState({
            pdfFile: e.target.files[0],
        })

        if(file.id !== undefined){
            onChangeImgFile(file.id,file.key,info.seq,info.id,e.target.files[0]);
        }
        else {
            let fileObj = new Object();
            fileObj.key = getUUID();
            setFile(fileObj);
            onChangeImgFile(fileObj.id,fileObj.key,info.seq,info.id,e.target.files[0]);
        }


    };
    const onChangeCheck = e => {
        onCheckDeleteFile(file.id,file.key,e.target.checked );
    }
    useEffect(
        ()=>{
            m_awardsFiles.forEach((file) => {
                if (file.id === info.fileId) {
                    setFile(file)
                }
            });
        },[m_awardsFiles]);
    var downloadUrl = '#';
    if(file === null){
        setFile(new Object());
        m_awardsFiles.forEach((file) => {
            if (file.id === info.fileId) {
                setFile(file)
            }
        });
    }
    else if(file.id !== undefined ){
        downloadUrl = client.defaults.baseURL +'/v1/files/down/'+ file.id;
    }

        if (editing) { // 수정모드
            return (
                <div className="edit-cont-wrap">
                    <div className="edit-cont">

                        <form className={classes.root} noValidate autoComplete="off"  >

                            <TextField required name="name" label="Outlined"  variant="outlined" label={"수상명"} value={info.name} onChange={onUpdateField}/>
                            <TextField  name="institution" label="Outlined" variant="outlined" label={"수여기관"}    value={info.institution} onChange={onUpdateField}/>
                            <TextField required name="year" label="Outlined" variant="outlined" label={"수상년도(yyyy)"} value={info.year} onChange={onUpdateField}/>
                            <br />
                            <TextareaAutosize name="descp" aria-label="설명" label="Outlined" variant="outlined"placeholder="설명." style={{ width:"90%", margin:"10px"}} rowsMin={5}  value={info.descp} onChange={onUpdateField}/>
                            <p className="edit-cont-desc02">증빙파일을 첨부 할 수 있습니다.</p>
                            <input type="file" className="edit-file01"  onChange={handleChange}/>
                            {file !== null && file.id !== undefined && <div className="edit-cont-desc01"><a href={downloadUrl} className="info-file">{file.name}</a>
                                <label style={{marginLeft:'10px'}}><input type="checkbox" checked={file.checkDelete} className="ick01" onChange={onChangeCheck}/><span>삭제</span> </label></div>}


                        </form>

                        <button type="button" className="btn-cont-del" onClick={onRemoveField}>입력 정보 삭제
                        </button>
                    </div>

                </div>

            );
        }
        else {
            return(
                <div>
                    <div className="info-cont-wrap">
                        <div className="info-cont">
                            <div className="info-cont-inner">
                                <div className="cont-inner-left">
                                    <p className="left-date">{info.year}</p>
                                </div>
                                <div className="cont-inner-right">
                                    <div className="right-tit-wrap"><span className="right-tit">수상명 : {info.name}</span><span
                                        className="tit-desc">수여기관 : {info.institution}</span></div>
                                    <div className="right-textarea">
                                        {info.descp}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {file !== null && file.id !== undefined && <a href={downloadUrl} className="info-file">{file.name}</a>}
                </div>
            );
        }


}

export default AwardField;
