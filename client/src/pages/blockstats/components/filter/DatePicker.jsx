import React, { useState } from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DayPickCalendar = ({ data, setData, label }) => {
  // console.log("data", data);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={["day"]}
        label={label}
        value={data}
        inputFormat={"yyyy-MM-dd"}
        mask={"____-__-__"}
        onChange={(newValue) => {
          setData(newValue);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
};

export const YearPickCalendar = ({ label, setData }) => {
  const [value, setValue] = useState(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        views={["year"]}
        label={label}
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
          setData(newValue.$y);
        }}
        renderInput={(params) => <TextField {...params} helperText={null} />}
      />
    </LocalizationProvider>
  );
};

export default React.memo(DayPickCalendar);
