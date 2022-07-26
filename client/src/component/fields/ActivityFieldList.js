import React from "react";
import ActivityField from "./ActivityField";

const ActivityFieldList = (props) => {
  const { data, onUpdate, onRemove, onAdd, editing } = props;
  const list = data.map(
    (info) =>
      info.deleteFlag === undefined && (
        <ActivityField
          key={info.key}
          info={info}
          editing={editing}
          onUpdate={onUpdate}
          onRemove={onRemove}
        />
      )
  );

  return (
    <div>
      <div className="edit-cont-idx-wrap" data-cont-idx="0">
        <h2 className="main-tit02">인턴/대외활동</h2>
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
export default ActivityFieldList;
