import React, { Component } from "react";
import EduLevelField from "./EduLevelField";
import PortfolioField from "./PortfolioField";
import { TextareaAutosize } from "@material-ui/core";
import StudentLifeDescField from "./StudentLifeDescField";
import CareerField from "./CareerField";
import { addSubField } from "../../modules/auth";
import getUUID from "../../lib/api/commonlib";
import PortfolioFileField from "./PortfolioFileField";

const PortfolioFieldList = (props) => {
  const {
    data,
    filePart,
    onUpdate,
    editing,
    onChangeImgFile,
    refresh,
    onAdd,
    onAddFile,
    onRemove,
    onRemoveFile,
  } = props;

  const list = data.map(
    (info) =>
      info.deleteFlag === undefined && (
        <PortfolioField
          key={info.key}
          info={info}
          refresh={refresh}
          editing={editing}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      )
  );

  const filePartlist = filePart.map(
    (info) =>
      info.deleteFlag === undefined && (
        <PortfolioFileField
          key={info.key}
          info={info}
          refresh={refresh}
          editing={editing}
          onChangeImgFile={onChangeImgFile}
          onRemove={onRemoveFile}
        />
      )
  );

  return (
    <div>
      <div className="edit-cont-idx-wrap" data-cont-idx="0">
        <h2 className="main-tit02">포트폴리오</h2>
        {data !== undefined && list}
        {filePart !== undefined && filePartlist}
      </div>
      {editing && (
        <div className="btn-add-wrap">
          <button type="button" className="btn-cont-add01" onClick={onAddFile}>
            <span className="plus">+</span>
            <span className="add-txt">파일 추가</span>
          </button>
          <button type="button" className="btn-cont-add01" onClick={onAdd}>
            <span className="plus">+</span>
            <span className="add-txt">URL 추가</span>
          </button>
        </div>
      )}
    </div>
  );
};
export default PortfolioFieldList;
