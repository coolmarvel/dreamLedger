import React, { useState } from "react";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";

function ColorToggleButton() {
  const [alignment, setAlignment] = useState("Hour");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

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

export default React.memo(ColorToggleButton);
