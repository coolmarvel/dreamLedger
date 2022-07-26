import React, {Component, useEffect, useState} from 'react';
import {
    FormControl,
    InputBase,
    InputLabel,
    makeStyles,
    MenuItem,
    Select, TextareaAutosize,
    TextField,
    withStyles
} from "@material-ui/core";
import getUUID from "../../lib/api/commonlib";
import {useSelector} from "react-redux";
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

const  CareerDescField = (props) => {


    const classes = useStyles(props);
    const { info,refresh,onUpdate, editing,onChangeImgFile,onCheckDeleteFile} = props;
    const { m_careerDescFiles} = useSelector(({ auth}) => ({
        m_careerDescFiles:auth.careerDescFiles
    }));

    const [state,setState] = useState({fileName:'',pdfFile:null})
    const [file,setFile] =  useState(null);
    const fileInput = React.useRef(null);

    const onUpdateField = (e) => {
        const { name, value } = e.target;
        onUpdate(info.key,name,value);
    }

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
    var downloadUrl = '#';
    if(file === null){
        setFile(new Object());
        m_careerDescFiles.forEach((file) => {
            if (file.id === info.fileId) {
                setFile(file)
            }
        });
    }
    else if(file.id !== undefined ){
        downloadUrl = client.defaults.baseURL +'/v1/files/down/'+ file.id;
    }
    const onChangeCheck = e => {
        onCheckDeleteFile(file.id,file.key,e.target.checked );
    }

    useEffect(
        ()=>{
            setFile(new Object());
            m_careerDescFiles.forEach((file) => {
                setFile(file)
            });
        },[m_careerDescFiles]);

    useEffect( () =>{
        if(editing && refresh){
            fileInput.current.value='';
        }
    },[refresh]);




    if (editing) { // 수정모드
            return (
                <div className="edit-cont-wrap">
                    <div className="edit-cont">
                        <TextareaAutosize name="descp" aria-label="설명" label="Outlined" variant="outlined" placeholder="경력기술을 자유롭게 작성할수 있습니다."
                                          style={{ width:"90%", margin:"10px"}} rowsMin={5}  value={info.descp} onChange={onUpdateField}/>
                        <p className="edit-cont-desc02">증빙파일을 첨부 할 수 있습니다.</p>
                        <input
                            type="file"
                            ref={fileInput}
                            onChange={handleChange}
                            className="edit-file01"
                        />
                        {file !== null && file.id !== undefined && <div className="edit-cont-desc01"><a href={downloadUrl} className="info-file">{file.name}</a>
                            <label style={{marginLeft:'10px'}}><input type="checkbox" checked={file.checkDelete} className="ick01" onChange={onChangeCheck}/><span>삭제</span> </label></div>}

                    </div>

                </div>

            );
        }
    else {
        return(
            <div>
                <div className="info-cont-wrap">
                    <div className="info-cont">
                        <div className="info-cont-inner02">
                            <div className="right-textarea01">
                                {info.descp}
                            </div>
                        </div>

                    </div>
                </div>
                {file !== null && file.id !== undefined && <a href={downloadUrl} className="info-file">{file.name}</a>}
            </div>
        );
    }

}

export default CareerDescField;
