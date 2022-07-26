import React, {Component, useState} from 'react';
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
import {useSelector} from "react-redux";
import getUUID from "../../lib/api/commonlib";

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
const  CoverLetterField  = (props) => {

    const classes = useStyles(props);
    const { info,onUpdate,  editing} = props;

    const onUpdateField = (e) => {
        const { name, value } = e.target;
        onUpdate(info.key,name,value);
    }

    if (editing) { // 수정모드
        return (
            <div className="edit-cont-wrap">
                <div className="edit-cont">
                    <TextField name="title" style={{ width:"90%", margin:"10px"}} label=""  variant="outlined" placeholder={"자기소개서 제목"} value={info.title} onChange={onUpdateField}/>
                    <TextareaAutosize name="descp" aria-label="설명" label="Outlined" variant="outlined"
                                      placeholder="성장배경, 장단점, 생애목표 및 진로방향, 학습계획을 포함하여 2000자 이상 적어주세요."
                                      style={{ width:"90%", margin:"10px"}} rowsMin={5}  value={info.descp} onChange={onUpdateField}/>
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
                            <p className="textarea-tit">{info.title}</p>
                            <div className="right-textarea01">
                                {info.descp}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default CoverLetterField;
