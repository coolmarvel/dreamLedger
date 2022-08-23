import React, { useState, useEffect } from "react";
import $ from "jquery";
import * as echarts from "echarts";

import Bar from "./components/charts/Bar";
import Line from "./components/charts/Line";

import styles from "./DashboardPage.module.css";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

// ** MUI Imports
import { Tabs, Tab } from "@material-ui/core";
import { Grid, Typography, Card, CardContent, Box } from '@mui/material'
import { Database, SwapHorizontalBold, Memory, Server, Sd } from 'mdi-material-ui'
import { TabList, TabPanel, TabContext } from '@mui/lab'

import CardStatisticsVerticalComponent from "./components/cards/CardStatisticsVerticalComponent";
import Table from './components/table/Table'

export const DashboardPage = () => {
  $(function () {
    "use strict";
    $(".tab_content").hide();
    $(".tab_content:first").show();

    $(".tab_bar li").click(function () {
      $(".tab_bar li").removeClass("active");
      $(this).addClass("active");
      $(".tab_content").hide();
      var activeTab = $(this).find("a").attr("href");
      $(activeTab).fadeIn();
      return false;
    });
  });
  $(function () {
    "use strict";
    var appendthis = "<div class='modal-overlay js-modal-close'></div>";

    $("a[data-modal-id]").click(function (e) {
      e.preventDefault();

      $("body").append(appendthis);
      $(".modal-overlay").fadeTo(500, 0.7);
      //$(".js-modalbox").fadeIn(500);
      var modalBox = $(this).attr("data-modal-id");
      $("#" + modalBox).fadeIn($(this).data());
    });

    $(".js-modal-close, .modal-overlay").click(function () {
      $(".modal-box, .modal-box-al, .modal-overlay").fadeOut(500, function () {
        $(".modal-overlay").remove();
      });
    });

    $(window).resize(function () {
      $(".modal-box, .modal-box-al").css({
        top:
          ($(window).height() - $(".modal-box, .modal-box-al").outerHeight()) /
          2,
        left:
          ($(window).width() - $(".modal-box, .modal-box-al").outerWidth()) / 2,
      });
    });

    $(window).resize();
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: #5900ff;
    width: 100%;
    height: 100%;
    background: #34343465;
  `;

  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      {loading ? (
        <div
          className={loading ? "parentDisable" : ""}
          width="100%"
          height="100%"
        >
          <div className={styles.overlay}>
            <FadeLoader
              size={150}
              color={"#ffffff"}
              css={override}
              loading={loading}
              z-index={"1"}
              text="Loading your content..."
            />
          </div>
        </div>
      ) : (
        false
      )}
      {/* 상단 */}
      <Grid container spacing={1}>
        <Grid item xs={15}>
          <Grid container spacing={1}>
            <Grid item xs={1.7}>
              <CardStatisticsVerticalComponent
                stats='2,650'
                color='success'
                trendNumber='1.46%'
                title='Blocks'
                subtitle='+ 345 than yesterday'
                icon={<Database />}
              />
            </Grid>
            <Grid item xs={1.7} >
              <CardStatisticsVerticalComponent
                stats='2,650'
                color='success'
                trendNumber='1.46%'
                title='Transactions'
                subtitle='+ 345 than yesterday'
                icon={<SwapHorizontalBold />}
              />
            </Grid>
            <Grid item xs={1.7} >
              <CardStatisticsVerticalComponent
                stats='17%'
                color='success'
                trendNumber='1.46%'
                title='CPU'
                subtitle='+ 345 than yesterday'
                icon={<Memory />}
              />
            </Grid>
            <Grid item xs={1.7} >
              <CardStatisticsVerticalComponent
                stats='20%'
                color='success'
                trendNumber='1.46%'
                title='Memory'
                subtitle='+ 345 than yesterday'
                icon={<Sd />}
              />
            </Grid>
            <Grid item xs={1.7} >
              <CardStatisticsVerticalComponent
                stats='60%'
                color='success'
                trendNumber='1.46%'
                title='Storage'
                subtitle='+ 345 than yesterday'
                icon={<Server />}
              />
            </Grid>
            <Grid item xs={3.5}>
              <Table />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* /상단 */}

      <TabContext value={value}>

        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="Tabs">
            <Tab label="Ledger Info" value="1" />
            <Tab label="Resource Info" value="2" />
          </Tabs>
        </Box>

        {/* LEDGER INFO */}
        <TabPanel value="1">
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Grid container spacing={1}>

                <Grid item xs={12} md={6} sx={{ boxShadow: 3 }}>
                  <Box>
                    <Typography variant='h5'>Block Height</Typography>
                    <Bar echarts={echarts} setLoading={setLoading} />
                  </Box>
                  <Box>
                    <Typography variant='h5' sx={{ marginTop: 3 }}>Block Chart</Typography>
                    <Line echarts={echarts} setLoading={setLoading} />
                  </Box>
                </Grid>

                <Grid item xs={12} md={6} sx={{ boxShadow: 3 }}>
                  <Box>
                    <Typography variant='h5'>Transaction Height</Typography>
                    <Bar echarts={echarts} setLoading={setLoading} />
                  </Box>
                  <Box >
                    <Typography variant='h5' sx={{ marginTop: 3 }}>Transaction Chart</Typography>
                    <Line echarts={echarts} setLoading={setLoading} />
                  </Box>
                </Grid>

              </Grid>
            </Grid>
          </Grid>
        </TabPanel>

        {/* RESOURCE INFO */}
        <TabPanel value="2">
          <Grid item xs={12} sx={{ boxShadow: 3 }}>
            <Box>
              <Typography variant='h5'>Cpu</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ boxShadow: 3 }}>
            <Box>
              <Typography variant='h5'>Memory</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sx={{ boxShadow: 3 }}>
            <Box>
              <Typography variant='h5'>Storage</Typography>
            </Box>
          </Grid>
        </TabPanel>

      </TabContext>
    </React.Fragment >
  );
};
