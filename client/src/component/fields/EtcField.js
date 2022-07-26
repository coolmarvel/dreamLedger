import React, { Component } from "react";
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
    minWidth: 140,
    // height: 48,
    // padding: '30px',
    // margin : '10px',
  },
  selectEmpty: {
    minWidth: 100,
  },
}));
const EtcField = (props) => {
  const classes = useStyles(props);
  const { info, onUpdate, onRemove, editing } = props;
  const { m_typeCodeArray } = useSelector(({ auth }) => ({
    m_typeCodeArray: auth.typeCodeArray,
  }));

  const onUpdateField = (e) => {
    const regex1 = /^[0-9-\b]{0,7}$/;
    const { name, value } = e.target;

    if (e.target.name === "startMonth" || e.target.name === "endMonth") {
      if (regex1.test(e.target.value)) {
        onUpdate(info.key, name, value);
      }
    } else if (e.target.name === "typeCode") {
      const value1 = { id: e.target.value };
      onUpdate(info.key, name, value1);
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
              className="{classes.formControl} itxt-wrap01 cell03-02"
            >
              <InputLabel required id="schoolType">
                활동구분
              </InputLabel>
              <Select
                name="typeCode"
                labelId="typeCode"
                id="demo-simple-select-outlined"
                value={info.typeCode !== undefined && info.typeCode.id}
                onChange={onUpdateField}
                label="활동구분"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {m_typeCodeArray !== undefined &&
                  m_typeCodeArray.map((el) => (
                    <MenuItem value={el.id}>{el.name}</MenuItem>
                  ))}
              </Select>
            </FormControl>
            <TextField
              className="itxt-wrap01 cell03-02"
              name="name"
              label="Outlined"
              variant="outlined"
              label={"활동명"}
              value={info.name}
              onChange={onUpdateField}
            />
            <TextField
              required
              className="itxt-wrap01 cell03-03"
              name="startMonth"
              placeholder={"yyyy-mm"}
              InputProps={{ classes: { input: classes.input } }}
              label="Outlined"
              variant="outlined"
              label={"시작년월"}
              value={info.startMonth}
              onChange={onUpdateField}
            />
            <TextField
              required
              className="itxt-wrap01 cell03-04"
              name="endMonth"
              placeholder={"yyyy-mm"}
              InputProps={{ classes: { input: classes.input } }}
              label="Outlined"
              variant="outlined"
              label={"종료년월"}
              value={info.endMonth}
              onChange={onUpdateField}
            />
            <br />
            <TextareaAutosize
              name="descp"
              aria-label="설명"
              label="Outlined"
              variant="outlined"
              placeholder="설명."
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
            입력 정보 삭제
          </button>
        </div>
      </div>
    );
  } else {
    var typeCodeName = "";
    if (
      info.typeCode !== undefined &&
      info.typeCode.id &&
      m_typeCodeArray !== undefined
    ) {
      m_typeCodeArray.some((el) => {
        if (info.typeCode.id === el.id) {
          typeCodeName = el.name;
          return true;
        }
      });
    }

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
                  <span className="right-tit">활동명: {info.name}</span>
                  <span className="tit-desc">
                    활동구분: {info.typeCode !== undefined && typeCodeName}
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

export default EtcField;
