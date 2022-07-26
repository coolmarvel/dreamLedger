import React, { Component, useState } from "react";
import {
  FormControl,
  InputBase,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextareaAutosize,
  TextField,
  withStyles,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import getUUID from "../../lib/api/commonlib";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis  !important",
      whiteSpace: "nowrap",
      color: "blue",
    },
  },
  formControl: {
    minWidth: 120,
    // height: 48,
    // padding: '30px',
    // margin : '10px',
  },
  selectEmpty: {
    minWidth: 120,
  },
  photo: {
    height: "100%",
    width: "auto",
    zIndex: -10,
  },
}));
const EducationField = (props) => {
  const classes = useStyles(props);
  const { info, onUpdate, onRemove, editing } = props;

  const onUpdateField = (e) => {
    const regex1 = /^[0-9-\b]{0,7}$/;
    const { name, value } = e.target;

    if (e.target.name === "startMonth" || e.target.name === "endMonth") {
      if (regex1.test(e.target.value)) {
        onUpdate(info.key, name, value);
      }
    } else {
      onUpdate(info.key, name, value);
    }
  };
  const onRemoveField = (e) => {
    onRemove(info.key);
  };

  if (editing) {
    // 수정모드
    return (
      <div className="edit-cont-wrap">
        <div className="edit-cont">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              className="itxt-wrap01 cell07-01"
              name="name"
              label="Outlined"
              variant="outlined"
              label={"교육명"}
              value={info.name}
              onChange={onUpdateField}
            />
            <TextField
              className="itxt-wrap01 cell07-02"
              name="institution"
              label="Outlined"
              variant="outlined"
              label={"교육기관"}
              value={info.institution}
              onChange={onUpdateField}
            />
            <TextField
              required
              className="itxt-wrap01 cell07-03"
              name="startMonth"
              label="Outlined"
              variant="outlined"
              placeholder={"yyyy-mm"}
              InputProps={{ classes: { input: classes.input } }}
              label={"시작년월"}
              value={info.startMonth}
              onChange={onUpdateField}
            />
            <TextField
              required
              className="itxt-wrap01 cell07-04"
              name="endMonth"
              label="Outlined"
              variant="outlined"
              placeholder={"yyyy-mm"}
              InputProps={{ classes: { input: classes.input } }}
              label={"종료년월"}
              value={info.endMonth}
              onChange={onUpdateField}
            />

            <TextareaAutosize
              className="txta-wrap01 cell07-05"
              name="descp"
              aria-label="설명"
              label="Outlined"
              variant="outlined"
              placeholder="설명."
              style={{ width: "90%" }}
              rowsMin={5}
              value={info.descp}
              onChange={onUpdateField}
            />
          </form>
          <button
            type="button"
            className="btn-cont-del"
            onClick={onRemoveField}
          >
            입력 정보 삭제
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="info-cont-wrap">
          <div className="info-cont">
            <div className="info-cont-inner">
              <div className="cont-inner-left">
                <p className="left-date">
                  {info.startMonth} ~ {info.endMonth}
                </p>
                {/*<p className="left-state">1년</p>*/}
              </div>
              <div className="cont-inner-right">
                <div className="right-tit-wrap">
                  <span className="right-tit">{info.name}</span>
                  <span className="tit-desc">{info.institution}</span>
                </div>
                <div className="right-textarea">{info.descp}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default EducationField;
