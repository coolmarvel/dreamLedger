import React, { Component, useState } from "react";
import {
  FormControl,
  InputBase,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
  withStyles,
} from "@material-ui/core";

const useStyles = (props) =>
  makeStyles({
    formControl: {
      minWidth: 120,
      // height: 48,
      // padding: '30px',
      // margin : '10px',
    },
    selectEmpty: {
      minWidth: 120,
    },
    input: {
      "&::placeholder": {
        textOverflow: "ellipsis  !important",
        whiteSpace: "nowrap",
        color: "blue",
      },
    },
    root: props.root,
  });

const EduLevelField = (props) => {
  const classes = useStyles(props);

  const { info, onUpdate, onRemove, editing } = props;

  const onUpdateField = (e) => {
    const regex1 = /^[0-9\b]{0,4}$/;
    const { name, value } = e.target;

    if (
      e.target.name === "admissionYear" ||
      e.target.name === "graduationYear"
    ) {
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
            <FormControl
              variant="outlined"
              className="{classes.formControl} itxt-wrap01 cell02-01 exist-val"
            >
              <InputLabel required id="schoolType">
                학교구분
              </InputLabel>
              <Select
                name="schoolType"
                labelId="schoolType"
                id="demo-simple-select-outlined"
                value={info.schoolType}
                onChange={onUpdateField}
                label="학교구분"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"MIDDLE_SCHOOL"}>중학교</MenuItem>
                <MenuItem value={"HIGH_SCHOOL"}>고등학교</MenuItem>
                <MenuItem value={"COLLEGE"}>대학교</MenuItem>
              </Select>
            </FormControl>
            <TextField
              required
              className="itxt-wrap01 cell02-02"
              name="schoolName"
              label="Outlined"
              variant="outlined"
              label={"학교명"}
              value={info.schoolName}
              onChange={onUpdateField}
            />
            <TextField
              required
              className="itxt-wrap01 cell02-03"
              name="admissionYear"
              label="Outlined"
              placeholder={"4자리숫자"}
              InputProps={{ classes: { input: classes.input } }}
              variant="outlined"
              label={"입학년도"}
              value={info.admissionYear}
              onChange={onUpdateField}
            />
            <TextField
              required
              className="itxt-wrap01 cell02-04"
              name="graduationYear"
              placeholder={"4자리숫자"}
              InputProps={{ classes: { input: classes.input } }}
              label="Outlined"
              variant="outlined"
              label={"졸업년도"}
              value={info.graduationYear}
              onChange={onUpdateField}
            />

            <FormControl
              variant="outlined"
              className="{classes.formControl} itxt-wrap01 cell02-02"
            >
              <InputLabel id="graduationStatus">졸업상태</InputLabel>
              <Select
                name="graduationStatus"
                labelId="graduationStatus"
                id="demo-simple-select-outlined"
                value={info.graduationStatus}
                onChange={onUpdateField}
                label="graduationStatus"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"IN_SCHOOL"}>재학중</MenuItem>
                <MenuItem value={"GRADUATION_EXPECTANT"}>졸업예정</MenuItem>
                <MenuItem value={"GRADUATION"}>졸업</MenuItem>
              </Select>
            </FormControl>
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
    var graduationStatus = "";
    if (info.graduationStatus !== undefined) {
      const graduations = {
        IN_SCHOOL: "재학중",
        GRADUATION_EXPECTANT: "졸업예정",
        GRADUATION: "졸업",
      };
      graduationStatus = graduations[info.graduationStatus];
    }
    return (
      <div>
        <div className="info-cont-wrap">
          <div className="info-cont">
            <div className="info-cont-inner">
              <div className="cont-inner-left">
                <p className="left-date">
                  {info.admissionYear} ~ {info.graduationYear}
                </p>
                <p className="left-state">{graduationStatus}</p>
              </div>
              <div className="cont-inner-right">
                <div className="right-tit-wrap">
                  <span className="right-tit">{info.schoolName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default EduLevelField;
