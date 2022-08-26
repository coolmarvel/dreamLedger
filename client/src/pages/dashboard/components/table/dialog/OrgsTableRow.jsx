import React, { useState } from "react";

// MUI DIALOG
import { Chip } from "@mui/material";

// MUI TABLE
import { TableCell, TableRow } from "@mui/material";

///////////////////////////////////////////////////스위치 버튼///////////////////////////////////////////////////

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
