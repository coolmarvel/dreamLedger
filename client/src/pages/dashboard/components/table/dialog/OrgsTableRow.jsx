import React, { useState } from "react";

// MUI DIALOG
import { Chip } from "@mui/material";
import { styled } from "@mui/material/styles";

// MUI TABLE
import { TableCell, TableRow } from "@mui/material";

// MUI SWITCH
import { FormControlLabel, Switch } from "@mui/material";

///////////////////////////////////////////////////스위치 버튼///////////////////////////////////////////////////

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const DivideTableRow = ({ row }) => {
  const [value, setValue] = useState(false);

  console.log("row", row);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" align="center">
        <Chip
          color={value ? "success" : "error"}
          sx={{
            height: 24,
            fontSize: "0.1rem",
            textTransform: "capitalize",
            "& .MuiChip-label": { fontWeight: 0 },
          }}
        />
      </TableCell>
      <TableCell align="center">{row}</TableCell>
    </TableRow>
  );
};

export default React.memo(DivideTableRow);
