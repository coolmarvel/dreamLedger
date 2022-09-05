import React from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function SelectTimeOption({ selectData, setSelectData }) {
  const optionList = ["hour", "day", "month"];

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
      {optionList.map((value, index) => {
        return (
          <ToggleButton key={index} value={value}>
            {value}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
}

export default React.memo(SelectTimeOption);
