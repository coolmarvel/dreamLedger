import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  OutlinedInput,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Chip,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, channelData, theme) => {
  return {
    fontWeight:
      channelData.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
};

const SelectChannelMenu = ({ channelData, setChannelData, channelList }) => {
  const theme = useTheme();
  const [channels] = useState(channelList); // select 박스에 표시된 목록

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setChannelData(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 350 }}>
        <InputLabel id="demo-multiple-chip-label">Channel</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={channelData}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {channels.map((channel, index) => (
            <MenuItem
              key={index}
              value={channel}
              style={getStyles(channel, channelData, theme)}
            >
              {channel}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default React.memo(SelectChannelMenu);
