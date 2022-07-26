import React, { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import getUUID from "../../lib/api/commonlib";
import { useDispatch, useSelector } from "react-redux";
import PopupPostCode from "../common/PopupPostCode";
import PopupDom from "../common/PopupDom";
import { changeField, searchMember } from "../../modules/auth";
import DialogMsgBox from "../common/DialogMsgBox";
import DialogPostCode from "../common/DialogPostCode";
import StudyHistoryViewContainer from "../../container/StudyHistoryViewContainer";
import DialogPreview from "../common/DialogPreview";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      paddingTop: theme.spacing(1),
    },
  },
  button: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
  // input: {
  //     display: 'none',
  // },
  input: {
    "&::placeholder": {
      textOverflow: "ellipsis  !important",
      whiteSpace: "nowrap",
      color: "blue",
    },
  },
  formControl: {
    minWidth: 120,
    width: "120",
    height: "100%",
    margin: theme.spacing(1),
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

const StudentSearchField = (props) => {
  const classes = useStyles();

  const { search_member, onSearch, onChange } = props;

  const boxStyle = {
    display: "block",

    position: "absolute",
    top: "0%",
    width: "600",
    height: "630px",
    padding: "2px",
    // backgroundColor:"grey",
  };

  return (
    <div className="manage-srch-cont">
      <dl className="dl-srch dl01">
        <dt>가입일자</dt>
        <dd>
          <input
            type="text"
            name="regDateStart"
            className="sitxt01"
            onChange={onChange}
          />{" "}
          ~{" "}
          <input
            type="text"
            name="regDateEnd"
            onChange={onChange}
            className="sitxt01"
          />
        </dd>
      </dl>
      <dl className="dl-srch dl02">
        <dt>ID</dt>
        <dd>
          <input
            type="text"
            name="memberId"
            className="sitxt02"
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl className="dl-srch dl03">
        <dt>이름</dt>
        <dd>
          <input
            type="text"
            name="member_student_name"
            className="sitxt02"
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl className="dl-srch dl04">
        <dt>성별</dt>
        <dd>
          <select
            name="member_student_sex"
            className="srselct01"
            onChange={onChange}
          >
            <option value="">선택</option>
            <option value="MALE">남</option>
            <option value="FEMALE">여</option>
          </select>
        </dd>
      </dl>
      <dl className="dl-srch dl05">
        <dt>생년월일</dt>
        <dd>
          <input
            type="text"
            name="birthdayStart"
            className="sitxt01"
            onChange={onChange}
          />{" "}
          ~{" "}
          <input
            type="text"
            name="birthdayEnd"
            className="sitxt01"
            onChange={onChange}
          />
        </dd>
      </dl>
      <dl className="dl-srch dl06">
        <dt>학교</dt>
        <dd>
          <select
            name="edulevel_schoolType"
            className="srselct02"
            onChange={onChange}
          >
            <option value="">선택</option>
            <option value="MIDDLE_SCHOOL">중학교</option>
            <option value="HIGH_SCHOOL">고등학교</option>
            <option value="COLLEGE">대학교</option>
          </select>
          <input
            type="text"
            name="edulevel_schoolName"
            className="sitxt03"
            onChange={onChange}
          />
          <button type="button" className="btn-srch" onClick={onSearch}>
            조회
          </button>
        </dd>
      </dl>
    </div>

    // <div className="{classes.root} edit-cont-wrap" >
    //     <input type="text" className="itxt-main" placeholder="나에 대해 알려줍시다. 강점, 목표, 관심분야도 좋아요."/>
    //     <Button  size="large" className="{classes.button}" onClick={onSave}  variant="contained" color={"primary"}>저장하기</Button>
    //     <Button  size="large" className="{classes.button}" onClick={onPreview}  variant="contained" style={{marginLeft:'3%'}} color={"primary"}>미리보기</Button><span className="tit-desc01" style={{marginLeft:'3%'}}> <sub>*</sub> 필수 입력 정보입니다.</span>
    //
    //     {isPopupPreviewOpen &&  <DialogPreview  msgTitle={'미리보기'}   onClose = {onClosePreviewDialog} open={true}></DialogPreview> }
    //
    //     {isPopupOpen &&  <DialogPostCode  msgTitle={'우편번호 찾기'} onOk={onOkDialog} onClose = {onCloseDialog} open={true}></DialogPostCode> }
    //
    //     <div className="photo-edit-cont">
    //         <div className="id-img-wrap no-img" align={'center'}>
    //             {<img className={classes.photo} src={state.image_preview} alt="" onClick={handleClick} />}
    //
    //             {/* image input field */}
    //             <input
    //                 type="file"
    //                 ref={hiddenFileInput}
    //                 onChange={handleChange}
    //                 style={{display: 'none'}}
    //             />
    //             <button type="button" className="btn-img-edit"
    //                     onClick={handleClick} >사진변경
    //             </button>
    //             <button type="button" className="edit-desc"  onClick={handleClick}>
    //                 <em>+</em>사진추가
    //             </button>
    //         </div>
    //         <div className="cont-left" >
    //
    //             <TextField   className="itxt-wrap01 cell01-01" name="name" label="Outlined"  variant="outlined" label={"이름"}  value={member.name} inputProps={{ readOnly: true, }}/>
    //
    //
    //              <FormControl variant="outlined"  className="{classes.formControl} itxt-wrap01 cell01-02" >
    //                 <InputLabel id="schoolType"  >성별</InputLabel>
    //                 <Select
    //                     name="sex"
    //                     labelId="sex"
    //                     id="demo-simple-select-outlined"
    //                     value={student.sex}
    //                     onChange={onSubChange}
    //                     label="성별"
    //                     style = {{width: 100}}
    //                 >
    //                     <MenuItem value="">
    //                         <em>None</em>
    //                     </MenuItem>
    //                     <MenuItem value={"MALE"}>남</MenuItem>
    //                     <MenuItem value={"FEMALE"}>여</MenuItem>
    //                 </Select>
    //             </FormControl>
    //
    //             <TextField required   className="itxt-wrap01 cell01-03"  name="birthday" label="Outlined"
    //                        placeholder={'20200312'} InputProps={{classes: { input: classes.input}}}
    //                        error={error.birthDay}  variant="outlined"   label={"생년월일"} value={student.birthday} onChange={onSubChangeField}/>
    //
    //             <TextField required  className="itxt-wrap01 cell01-04" name="email" label="Outlined"  error={error.email}  variant="outlined" label={"이메일"} value={member.email} onChange={onSubChangeField}/>
    //
    //
    //             <TextField required  className="itxt-wrap01 cell01-05" name="phoneNumber" label="Outlined"
    //                        placeholder={'숫자입력'} InputProps={{classes: { input: classes.input}}}
    //                        error={error.phoneNumber} variant="outlined" label={"전화번호"} value={student.phoneNumber} onChange={onSubChangeField}/>
    //
    //
    //             <TextField required  className="itxt-wrap01 cell01-06" name="mobileNumber" label="Outlined"
    //                        placeholder={'숫자입력'} InputProps={{classes: { input: classes.input}}}
    //                        error={error.mobileNumber} variant="outlined" label={"핸드폰번호"} value={student.mobileNumber} onChange={onSubChangeField}/>
    //
    //             <div style={{display:'inline'}}>
    //                 <TextField required  className="itxt-wrap01 cell01-07" name="address" label="Outlined"  variant="outlined" label={"주소"}  value={student.address} onClick={popupPost}/>
    //             </div>
    //
    //
    //
    //         </div>
    //     </div>
    // </div>
  );
};

export default StudentSearchField;
