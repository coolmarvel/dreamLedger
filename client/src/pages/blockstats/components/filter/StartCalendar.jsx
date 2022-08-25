import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function StartCalendar({ setStartData, setLoading }) {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    setLoading(true);
    setStartData(value);
    setLoading(false);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["year", "month", "day"]}
        label="(시작날짜)"
        value={value}
        inputFormat={"yyyy-MM-dd"}
        mask={"____-__-__"}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
}

export default React.memo(StartCalendar);
