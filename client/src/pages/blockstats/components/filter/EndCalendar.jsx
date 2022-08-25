import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function EndCalendar({ setEndData, setLoading }) {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    setLoading(true);
    setEndData(value);
    setLoading(false);
  }, [value]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["day", "month", "year"]}
        label="(종료날짜)"
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

export default React.memo(EndCalendar);
