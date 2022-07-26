import React, { Component } from "react";
import EduLevelField from "./EduLevelField";
import StudentLifeDescField from "./StudentLifeDescField";

const StudentLifeDescFieldList = (props) => {
  const { editing, onChangeImgFile, refresh, onCheckDeleteFile } = props;

  return (
    <div>
      <div className="edit-cont-idx-wrap" data-cont-idx="0">
        <h2 className="main-tit02">생활기록부</h2>
        <StudentLifeDescField
          refresh={refresh}
          editing={editing}
          onChangeImgFile={onChangeImgFile}
          onCheckDeleteFile={onCheckDeleteFile}
        />
      </div>
    </div>
  );
};

export default StudentLifeDescFieldList;
