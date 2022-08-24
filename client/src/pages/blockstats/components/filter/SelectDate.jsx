import React, { useState, useEffect } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function SelectDate({ setSelectData, setLoading }) {
  const [alignment, setAlignment] = useState("Hour");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  useEffect(() => {
    setLoading(true);
    setSelectData(alignment);
    setLoading(false);
  }, [alignment]);

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      spacing={3}
    >
      <ToggleButton value="Hour">Hour</ToggleButton>
      <ToggleButton value="Day">Day</ToggleButton>
      <ToggleButton value="Month">Month</ToggleButton>
    </ToggleButtonGroup>
  );
}

export default React.memo(SelectDate);
