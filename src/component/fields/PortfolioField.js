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

const  PortfolioField = (props) => {


    const classes = useStyles(props);
    const { info,refresh,onUpdate, editing,onChangeImgFile,onRemove} = props;
    const { m_portfolioFiles} = useSelector(({ auth}) => ({
        m_portfolioFiles:auth.portfolioFiles
    }));

    const [state,setState] = useState({fileName:'',pdfFile:null})
    const [file,setFile] =  useState(null);


    const onUpdateField = (e) => {
        const { name, value } = e.target;
        onUpdate(info.key,name,value);
    }

    const onRemoveField=(e) =>{
        onRemove(info.key);
    }

    if (editing) { // 수정모드
            return (
                <div className="edit-cont-idx-wrap" data-cont-idx="9">
                    <div className="edit-cont-wrap">
                        <div className="edit-cont">
                            <div className="pot-wrap">
                                <div className="pot-left">URL</div>
                                <div className="pot-right">
                                    <div className="itxt-wrap02"><input type="text" className="itxt03" name={"url"}
                                                                        title="포트폴리오 URL 입력" value={info.url}  onChange={onUpdateField}/></div>
                                </div>
                            </div>
                            <button type="button" className="btn-cont-del" onClick={onRemoveField}>입력 정보 삭제
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
                            <div className="cont-inner-left">URL</div>
                            <div className="cont-inner-right">
                                <a href="#" className="info-file">{info.url}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default PortfolioField;
