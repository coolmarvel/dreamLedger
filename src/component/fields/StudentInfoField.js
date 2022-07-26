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
import { changeField } from "../../modules/auth";
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

const StudentInfoField = (props) => {
  const classes = useStyles();

  const {
    member,
    student,
    onChange,
    onSubChange,
    editing,
    onChangeImgFile,
    onSave,
  } = props;
  const { m_studentFile, address, zipcode, detailAddress, baseUrl } =
    useSelector(({ auth }) => ({
      m_studentFile: auth.studentFile,
      zipcode: auth.temparary.zipcode,
      address: auth.temparary.address,
      detailAddress: auth.temparary.detailAddress,
      baseUrl: auth.baseUrl,
    }));

  const [state, setState] = useState({ image_file: null, image_preview: "" });
  const [file, setFile] = useState(null);
  const hiddenFileInput = React.useRef(null);
  const [error, setError] = useState({
    phoneNumber: false,
    mobileNumber: false,
    birthDay: false,
    email: false,
  });

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupPreviewOpen, setIsPopupPreviewOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const onSubChangeField = (e) => {
    const regex1 = /^[0-9\b]{0,11}$/;
    const regex2 = /^[0-9\b]{0,8}$/;
    if (e.target.name === "phoneNumber" || e.target.name === "mobileNumber") {
      if (regex1.test(e.target.value)) {
        error[e.target.name] = false;
        onSubChange(e);
      }
    } else if (e.target.name === "email") {
      error[e.target.name] = false;
      onChange(e);
    } else if (e.target.name === "birthday") {
      if (regex2.test(e.target.value)) {
        error[e.target.name] = false;
        onSubChange(e);
      }
    }
  };
  const handleChange = (e) => {
    let image_as_base64 = URL.createObjectURL(e.target.files[0]);
    let image_as_files = e.target.files[0];
    setState({
      image_preview: image_as_base64,
      image_file: image_as_files,
    });

    if (file.id !== undefined) {
      onChangeImgFile(
        file.id,
        file.key,
        student.seq,
        student.fieldId,
        e.target.files[0]
      );
    } else {
      let fileObj = new Object();
      fileObj.key = getUUID();
      setFile(fileObj);
      onChangeImgFile(
        fileObj.id,
        fileObj.key,
        student.seq,
        student.id,
        e.target.files[0]
      );
    }
  };

  // useEffect(
  //     ()=>{
  //         m_studentFile.forEach((file) => {
  //             if (file.id === student.fileId) {
  //                 setFile(file)
  //                 setState({
  //                     image_preview: baseUrl +"/v1/files/view/" + file.id,
  //                 })
  //             }
  //         });
  //     },[m_studentFile]);

  if (file === null) {
    setFile(new Object());
    m_studentFile.forEach((file) => {
      if (file.id === student.fileId) {
        setFile(file);
        setState({
          image_preview: baseUrl + "/v1/files/view/" + file.id,
        });
      }
    });
  }

  const popupPost = (e) => {
    dispatch(
      changeField({
        form: "temparary",
        key: "address",
        value: "",
      })
    );
    dispatch(
      changeField({
        form: "temparary",
        key: "zipcode",
        value: "",
      })
    );
    dispatch(
      changeField({
        form: "temparary",
        key: "detailAddress",
        value: "",
      })
    );
    setIsPopupOpen(true);
  };

  const onCloseDialog = () => {
    setIsPopupOpen(false);
  };
  const onOkDialog = () => {
    setIsPopupOpen(false);

    if (address.length > 0) {
      const tAddress = "(" + zipcode + ") " + address + " " + detailAddress;

      dispatch(
        changeField({
          form: "student",
          key: "address",
          value: tAddress,
        })
      );
    }
  };
  const onClosePreviewDialog = () => {
    setIsPopupPreviewOpen(false);
  };
  const onPreview = () => {
    setIsPopupPreviewOpen(true);
  };

  const boxStyle = {
    display: "block",

    position: "absolute",
    top: "0%",
    width: "600",
    height: "630px",
    padding: "2px",
    // backgroundColor:"grey",
  };

  if (editing) {
    // 수정모드

    return (
      <div className="{classes.root} edit-cont-wrap">
        <input
          type="text"
          className="itxt-main"
          placeholder="나에 대해 알려줍시다. 강점, 목표, 관심분야도 좋아요."
        />
        <Button
          size="large"
          className="{classes.button}"
          onClick={onSave}
          variant="contained"
          color={"primary"}
        >
          저장하기
        </Button>
        <Button
          size="large"
          className="{classes.button}"
          onClick={onPreview}
          variant="contained"
          style={{ marginLeft: "3%" }}
          color={"primary"}
        >
          미리보기
        </Button>
        <span className="tit-desc01" style={{ marginLeft: "3%" }}>
          {" "}
          <sub>*</sub> 필수 입력 정보입니다.
        </span>

        {isPopupPreviewOpen && (
          <DialogPreview
            msgTitle={"미리보기"}
            onClose={onClosePreviewDialog}
            open={true}
          ></DialogPreview>
        )}

        {isPopupOpen && (
          <DialogPostCode
            msgTitle={"우편번호 찾기"}
            onOk={onOkDialog}
            onClose={onCloseDialog}
            open={true}
          ></DialogPostCode>
        )}

        <div className="photo-edit-cont">
          <div className="id-img-wrap no-img" align={"center"}>
            {
              <img
                className={classes.photo}
                src={state.image_preview}
                alt=""
                onClick={handleClick}
              />
            }

            {/* image input field */}
            <input
              type="file"
              ref={hiddenFileInput}
              onChange={handleChange}
              style={{ display: "none" }}
            />
            <button
              type="button"
              className="btn-img-edit"
              onClick={handleClick}
            >
              사진변경
            </button>
            <button type="button" className="edit-desc" onClick={handleClick}>
              <em>+</em>사진추가
            </button>
          </div>
          <div className="cont-left">
            <TextField
              className="itxt-wrap01 cell01-01"
              name="name"
              label="Outlined"
              variant="outlined"
              label={"이름"}
              value={member.name}
              inputProps={{ readOnly: true }}
            />

            <FormControl
              variant="outlined"
              className="{classes.formControl} itxt-wrap01 cell01-02"
            >
              <InputLabel id="schoolType">성별</InputLabel>
              <Select
                name="sex"
                labelId="sex"
                id="demo-simple-select-outlined"
                value={student.sex}
                onChange={onSubChange}
                label="성별"
                style={{ width: 100 }}
              >
                <MenuItem value={"MALE"}>남</MenuItem>
                <MenuItem value={"FEMALE"}>여</MenuItem>
              </Select>
            </FormControl>

            <TextField
              required
              className="itxt-wrap01 cell01-03"
              name="birthday"
              label="Outlined"
              placeholder={"20200312"}
              InputProps={{ classes: { input: classes.input } }}
              error={error.birthDay}
              variant="outlined"
              label={"생년월일"}
              value={student.birthday}
              onChange={onSubChangeField}
            />

            <TextField
              required
              className="itxt-wrap01 cell01-04"
              name="email"
              label="Outlined"
              error={error.email}
              variant="outlined"
              label={"이메일"}
              value={member.email}
              onChange={onSubChangeField}
            />

            <TextField
              className="itxt-wrap01 cell01-05"
              name="phoneNumber"
              label="Outlined"
              placeholder={"숫자입력"}
              InputProps={{ classes: { input: classes.input } }}
              error={error.phoneNumber}
              variant="outlined"
              label={"전화번호"}
              value={student.phoneNumber}
              onChange={onSubChangeField}
            />

            <TextField
              required
              className="itxt-wrap01 cell01-06"
              name="mobileNumber"
              label="Outlined"
              placeholder={"숫자입력"}
              InputProps={{ classes: { input: classes.input } }}
              error={error.mobileNumber}
              variant="outlined"
              label={"핸드폰번호"}
              value={student.mobileNumber}
              onChange={onSubChangeField}
            />

            <div style={{ display: "inline" }}>
              <TextField
                className="itxt-wrap01 cell01-07"
                name="address"
                label="Outlined"
                variant="outlined"
                label={"주소"}
                value={student.address}
                onClick={popupPost}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="{classes.root} edit-cont-wrap">
        <h1 className="main-tit01">
          나에 대해 알려줍시다. <br className="mob-inline" />
          강점, 목표, 관심분야도 좋아요.
        </h1>
        <div className="photo-cont">
          <img src={state.image_preview} alt="증명사진" className="id-img" />

          <div className="cont-left01">
            <div className="name-wrap">
              <span className="name">{member.name}</span> {student.sex}
            </div>
            <div className="info">
              <span className="info-tit">생년월일</span>
              {student.birthday}
            </div>
            <div className="info">
              <span className="info-tit">휴대폰</span>
              {student.mobileNumber}
            </div>
            <div className="info">
              <span className="info-tit">전화번호</span>
              {student.phoneNumber}
            </div>
            <div className="info">
              <span className="info-tit">주소</span>
              {student.address}
            </div>
            <div className="info">
              <span className="info-tit">이메일</span>
              {member.email}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default StudentInfoField;
