import React, { Component } from "react";
import EduLevelField from "./EduLevelField";
import CareerDescField from "./CareerDescField";
import { TextareaAutosize } from "@material-ui/core";
import StudentLifeDescField from "./StudentLifeDescField";
import CareerField from "./CareerField";

const CareerDescFieldList = (props) => {
  const {
    data,
    onUpdate,
    editing,
    onChangeImgFile,
    refresh,
    onCheckDeleteFile,
  } = props;

  const list = data.map((info) => (
    <CareerDescField
      key={info.key}
      info={info}
      refresh={refresh}
      editing={editing}
      onUpdate={onUpdate}
      onChangeImgFile={onChangeImgFile}
      onCheckDeleteFile={onCheckDeleteFile}
    />
  ));

  return (
    <div>
      <div className="edit-cont-idx-wrap" data-cont-idx="0">
        <h2 className="main-tit02">경력기술서</h2>
        {list}
      </div>
    </div>
  );
};
export default CareerDescFieldList;
