import React, { Component } from "react";
import LicenseField from "./LicenseField";
import { useSelector } from "react-redux";

const LicenseFieldList = (props) => {
  const {
    data,
    onUpdate,
    onRemove,
    onAdd,
    editing,
    onChangeImgFile,
    onCheckDeleteFile,
  } = props;
  const list = data.map(
    (info) =>
      info.deleteFlag === undefined && (
        <LicenseField
          key={info.key}
          info={info}
          editing={editing}
          onUpdate={onUpdate}
          onRemove={onRemove}
          onChangeImgFile={onChangeImgFile}
          onCheckDeleteFile={onCheckDeleteFile}
        />
      )
  );

  return (
    <div>
      <div className="edit-cont-idx-wrap" data-cont-idx="0">
        <h2 className="main-tit02">자격증</h2>
        {list}
      </div>
      {editing && (
        <div className="btn-add-wrap">
          <button type="button" className="btn-cont-add" onClick={onAdd}>
            <span className="plus">+</span>
            <span className="add-txt">추가</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default LicenseFieldList;
