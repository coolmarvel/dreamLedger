import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectWeek({ label, setData }) {
  const [value, setValue] = useState("");
  const [week, setWeek] = useState([]);

  useEffect(() => {
    const array = [];

    for (let i = 1; i <= 51; i++) {
      array.push(i);
    }

    setWeek(array);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    setData(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {week.map((v, i) => {
            return (
              <MenuItem key={i} value={v}>
                {v} 주
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export function SelectMonth({ label, setData }) {
  const [value, setValue] = useState("");
  const [month, setMonth] = useState([]);

  useEffect(() => {
    const array = [];

    for (let i = 1; i <= 12; i++) {
      array.push(i);
    }

    setMonth(array);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    setData(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {month.map((v, i) => {
            return (
              <MenuItem key={i} value={v}>
                {v} 월
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

export function SelectQuarter({ label, setData }) {
  const [value, setValue] = useState("");
  const [quarter, setQuarter] = useState([]);

  useEffect(() => {
    const array = [];

    for (let i = 1; i <= 4; i++) {
      array.push(i);
    }

    setQuarter(array);
  }, []);

  const handleChange = (event) => {
    setValue(event.target.value);
    setData(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={label}
          onChange={handleChange}
        >
          {quarter.map((v, i) => {
            return (
              <MenuItem key={i} value={v}>
                {v} 분기
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
