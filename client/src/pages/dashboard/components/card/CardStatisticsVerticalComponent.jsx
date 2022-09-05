import React from "react";

// ** MUI Imports
import {
  Box,
  Card,
  Avatar,
  useTheme,
  Typography,
  CardContent,
} from "@mui/material";

// ** Icons Imports
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import SwipeableViews from "react-swipeable-views";

import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const CardStatsVertical = (props) => {
  // ** Props
  const { title, subtitle, color, icon, stats, trend, trendNumber } = props;

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            marginBottom: 1.5,
            alignItems: "flex-start",
            justifyContent: "space-between",
          }}
        >
          <Avatar
            sx={{
              boxShadow: 3,
              marginRight: 4,
              color: "common.white",
              backgroundColor: `${color}.main`,
            }}
          >
            {icon}
          </Avatar>
          {/* <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
                        <DotsVertical />
                    </IconButton> */}
        </Box>

        <Typography sx={{ fontWeight: 300, fontSize: "1.2rem" }} align="left">
          {title}
        </Typography>

        <Box
          sx={{
            marginTop: 3,
            display: "flex",
            flexWrap: "wrap",
            marginBottom: 2,
            alignItems: "flex-start",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: 600, mr: 2 }}>
            {stats}
          </Typography>
        </Box>

        <Box sx={{ marginTop: 3.3 }}>
          <Typography
            component="sup"
            variant="caption"
            sx={{
              marginTop: 2.5,
              marginBottom: 1.5,
              color: trend === "positive" ? "success.main" : "error.main",
            }}
            align="left"
          >
            {trendNumber}
          </Typography>
        </Box>
        <Typography variant="caption">{subtitle}</Typography>
      </CardContent>
    </Card>
  );
};

export default React.memo(CardStatsVertical);

CardStatsVertical.defaultProps = {
  color: "primary",
  trend: "positive",
};
