import React, { Component } from "react";
import { makeStyles, TextareaAutosize, TextField } from "@material-ui/core";
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
        fontSize: "80%",
      },
    },
    root: props.root,
  });

const CareerField = (props) => {
  const classes = useStyles(props);

  const { info, onUpdate, onRemove, editing } = props;

  const onUpdateField = (e) => {
    const regex1 = /^[0-9\b]{0,4}$/;
    const { name, value } = e.target;

    if (
      e.target.name === "employmentYear" ||
      e.target.name === "resignationYear"
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
            <TextField
              required
              className="itxt-wrap01 cell03-01"
              name="companyName"
              label="Outlined"
              variant="outlined"
              label={"회사명"}
              value={info.companyName}
              onChange={onUpdateField}
            />
            <TextField
              className="itxt-wrap01 cell03-02"
              name="partName"
              label="Outlined"
              variant="outlined"
              label={"부서명"}
              value={info.partName}
              onChange={onUpdateField}
            />
            <TextField
              required
              className="itxt-wrap01 cell03-03"
              name="employmentYear"
              placeholder={"4자리숫자"}
              InputProps={{ classes: { input: classes.input } }}
              label="Outlined"
              variant="outlined"
              label={"입사년도"}
              value={info.employmentYear}
              onChange={onUpdateField}
            />
            <TextField
              required
              className="itxt-wrap01 cell03-04"
              name="resignationYear"
              placeholder={"4자리숫자"}
              InputProps={{ classes: { input: classes.input } }}
              label="Outlined"
              variant="outlined"
              label={"퇴사년도"}
              value={info.resignationYear}
              onChange={onUpdateField}
            />

            <TextareaAutosize
              className="txta-wrap01 cell03-05"
              name="descp"
              aria-label="설명"
              label="Outlined"
              variant="outlined"
              placeholder="경력을 기술해 주세요."
              style={{ width: "90%", margin: "10px" }}
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
            입력 정보 삭제{" "}
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
                  {info.employmentYear} ~ {info.resignationYear}
                </p>
              </div>
              <div className="cont-inner-right">
                <div className="right-tit-wrap">
                  <span className="right-tit">
                    회사명: {info.companyName} {info.partName}
                  </span>
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

export default CareerField;
