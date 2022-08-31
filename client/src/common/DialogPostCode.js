import React, { useState } from "react";
import Button from "@material-ui/core/Button";

import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TextField, useMediaQuery, withStyles } from "@material-ui/core";
import PopupDom from "./PopupDom";
import PopupPostCode from "./PopupPostCode";
import { changeField } from "../redux/BlockManagerReducer.js";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "@material-ui/core/styles";
import Dialog from "@material-ui/core/Dialog";

// const Dialog = withStyles((theme) => ({
//     paper: {
//         height: '80%' // 100% is for full height or anything else what you need
//     },
// }))(MuiDialog);
const DialogPostCode = (props) => {
  const { msgTitle, onOk, onClose } = props;
  const [open, setOpen] = React.useState(props.open);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const { address, zipcode } = useSelector(({ auth }) => ({
    zipcode: auth.temparary.zipcode,
    address: auth.temparary.address,
  }));

  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    onClose();
  };
  const handleOk = () => {
    setOpen(false);
    onOk();
  };
  const popupPost = (e) => {
    setIsPopupOpen(true);
  };
  // 팝업창 닫기
  const closePostCode = () => {
    setIsPopupOpen(false);
  };
  const onChange = (e) => {
    dispatch(
      changeField({
        form: "temparary",
        key: "detailAddress",
        value: e.target.value,
      })
    );
  };
  return (
    <div>
      <Dialog
        open={open}
        fullScreen={fullScreen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{msgTitle} </DialogTitle>
        <DialogContent style={{ height: "600px", marginTop: "10px" }}>
          <div id="popupDom">
            {isPopupOpen && (
              <PopupDom>
                <PopupPostCode onClose={closePostCode} />
              </PopupDom>
            )}
          </div>
          <TextField
            name="postcode"
            label="Outlined"
            variant="outlined"
            label={"우편번호"}
            style={{ marginTop: "20px" }}
            value={zipcode}
          />
          <Button
            onClick={popupPost}
            size={"large"}
            label="Outlined"
            color={"default"}
            variant="contained"
            style={{ marginTop: "25px" }}
          >
            우편번호찾기
          </Button>
          <div>
            <TextField
              name="address"
              label="Outlined"
              variant="outlined"
              label={"주소"}
              fullWidth={true}
              value={address}
              style={{ marginTop: "10px" }}
            />
          </div>
          <div>
            <TextField
              name="detailAddress"
              label="Outlined"
              variant="outlined"
              label={"상세주소"}
              fullWidth={true}
              onChange={onChange}
              style={{ marginTop: "10px" }}
            />
          </div>
        </DialogContent>
        <DialogActions style={{ display: "flex", margin: "auto" }}>
          <Button
            onClick={handleOk}
            size={"large"}
            label="Outlined"
            variant="contained"
            color={"primary"}
            style={{ marginBottom: "20px" }}
            autoFocus
          >
            확인
          </Button>
          <Button
            onClick={handleClose}
            size={"large"}
            label="Outlined"
            variant="contained"
            color={"primary"}
            style={{ marginBottom: "20px" }}
            autoFocus
          >
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DialogPostCode;
