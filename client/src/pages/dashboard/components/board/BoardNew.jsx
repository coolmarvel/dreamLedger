import React from "react";

function BoardNew({ changeData, data, onSaveButtonClick, resetForm }) {
  const saveBtnClick = (e) => {
    e.preventDefault();
    onSaveButtonClick(data);
    resetForm();
  };

  return (
    <div>
      <form onSubmit={saveBtnClick}>
        <div>
          startDate :{" "}
          <input
            type="text"
            name="startDate"
            onChange={changeData}
            value={data.startDate || ""}
          />
        </div>
        <div>
          endDate :{" "}
          <input
            type="text"
            name="endDate"
            onChange={changeData}
            value={data.endDate || ""}
          />
        </div>
        {/* <input
          type="hidden"
          name="id"
          onChange={changeData}
          value={data.id || ""}
        /> */}
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default BoardNew;
