import React, { Component } from "react";
import EduLevelField from "./EduLevelField";
import PsychometryField from "./PsychometryField";

const PsychometryFieldList = (props) => {
  const { editing, onChangeImgFile, refresh } = props;

  return (
    <div>
      <div className="edit-cont-idx-wrap" data-cont-idx="0">
        <h2 className="main-tit02">청소년 심리검사</h2>
        <PsychometryField
          refresh={refresh}
          editing={editing}
          onChangeImgFile={onChangeImgFile}
        />
      </div>
    </div>
  );
};

export default PsychometryFieldList;
