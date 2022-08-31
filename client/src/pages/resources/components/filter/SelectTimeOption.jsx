import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

const optionList = ["hour", "day", "month"];

const SelectTimeOption = ({ selectData, setSelectData }) => {
  const handleChange = (event, newAlignment) => {
    setSelectData(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={selectData}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      spacing={3}
    >
      {optionList.map((e) => {
        return <ToggleButton value={e}>{e}</ToggleButton>;
      })}
    </ToggleButtonGroup>
  );
};

export default React.memo(SelectTimeOption);
