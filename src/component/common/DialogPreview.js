import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { StudyHistoryViewPage } from "../../pages/StudyHistoryViewPage";

const DialogPreview = (props) => {
  const { msgTitle, onClose } = props;
  const [open, setOpen] = React.useState(props.open);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    onClose();
  };

  return (
    <div>
      <Dialog
        style={{ padding: "3%" }}
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          style={{ display: "flex", margin: "auto" }}
          id="alert-dialog-title"
        >
          {msgTitle}
        </DialogTitle>
        <DialogContent>
          <StudyHistoryViewPage />
          {/*<DialogContentText id="alert-dialog-description">*/}
          {/*    {msgContents}*/}
          {/*</DialogContentText>*/}
        </DialogContent>
        <DialogActions style={{ display: "flex", margin: "auto" }}>
          <Button
            onClick={handleClose}
            size={"large"}
            label="Outlined"
            variant="contained"
            color={"primary"}
            style={{ marginBottom: "2px" }}
            autoFocus
          >
            닫기
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default DialogPreview;
