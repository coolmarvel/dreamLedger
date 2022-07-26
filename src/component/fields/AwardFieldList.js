import React from "react";
import AwardField from "./AwardField";

const AwardFieldList = (props) => {
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
        <AwardField
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
        <h2 className="main-tit02">수상실적</h2>
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

export default AwardFieldList;
