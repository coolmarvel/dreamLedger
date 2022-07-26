import React, { Component } from "react";
import EduLevelField from "./EduLevelField";
import CoverLetterField from "./CoverLetterField";
import { TextareaAutosize } from "@material-ui/core";

const CoverLetterFieldList = (props) => {
  const { data, onUpdate, editing } = props;
  const list = data.map((info) => (
    <CoverLetterField
      key={info.key}
      info={info}
      editing={editing}
      onUpdate={onUpdate}
    />
  ));

  return (
    <div>
      <div className="edit-cont-idx-wrap" data-cont-idx="0">
        <h2 className="main-tit02">자기소개서</h2>
        {list}
      </div>
    </div>
  );
};

export default CoverLetterFieldList;
