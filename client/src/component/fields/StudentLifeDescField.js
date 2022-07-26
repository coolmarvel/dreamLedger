import React, { Component, useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import getUUID from "../../lib/api/commonlib";
import { changeDeleteFileField } from "../../modules/auth";
import client from "../../lib/api/client";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: "none",
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
const StudentLifeDescField = (props) => {
  const classes = useStyles(props);
  const { refresh, editing, onChangeImgFile, onCheckDeleteFile } = props;
  const { m_studentLifeFile } = useSelector(({ auth }) => ({
    m_studentLifeFile: auth.studentLifeFile,
  }));

  const fileInput = React.useRef(null);

  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    if (file.id !== undefined) {
      onChangeImgFile(file.id, file.key, 1, undefined, e.target.files[0]);
    } else {
      let fileObj = new Object();
      fileObj.key = getUUID();
      setFile(fileObj);
      onChangeImgFile(fileObj.id, fileObj.key, 1, undefined, e.target.files[0]);
    }
  };

  const onChangeCheck = (e) => {
    onCheckDeleteFile(file.id, file.key, e.target.checked);
  };

  useEffect(() => {
    setFile(new Object());
    m_studentLifeFile.forEach((file) => {
      setFile(file);
    });
  }, [m_studentLifeFile]);

  useEffect(() => {
    if (editing && refresh) {
      fileInput.current.value = "";
    }
  }, [refresh]);

  var downloadUrl = "#";
  if (file === null) {
    setFile(new Object());
    m_studentLifeFile.forEach((file) => {
      setFile(file);
    });
  } else if (file.id !== undefined) {
    downloadUrl = client.defaults.baseURL + "/v1/files/down/" + file.id;
  }

  if (editing) {
    // 수정모드
    return (
      <div className="edit-cont-wrap">
        <div className="edit-cont no-close">
          <p className="edit-cont-desc01">
            NEIS에서 다운받은 PDF를 올려주세요. 파일은 암호화하여 저장됩니다.
          </p>
          <input
            type="file"
            ref={fileInput}
            onChange={handleChange}
            className="edit-file01"
          />
          {file !== null && file.id !== undefined && (
            <div className="edit-cont-desc01">
              <a href={downloadUrl} className="info-file">
                {file.name}
              </a>
              <label style={{ marginLeft: "10px" }}>
                <input
                  type="checkbox"
                  checked={file.checkDelete}
                  className="ick01"
                  onChange={onChangeCheck}
                />
                <span>삭제</span>{" "}
              </label>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div className="info-cont-wrap">
          <div className="info-cont">
            <div className="info-cont-inner01">
              {file !== null && file.id !== undefined && (
                <a href={downloadUrl} className="info-file">
                  {file.name}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default StudentLifeDescField;
