import React, { useState, useEffect } from "react";
import $ from "jquery";
import * as echarts from "echarts";

import Bar from "./components/charts/Bar";
import Line from "./components/charts/Line";

import styles from "./DashboardPage.module.css";
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";

import { Tabs, Tab } from "@material-ui/core";
import { Grid, Button, Container, Box } from '@mui/material'
import { Database, SwapHorizontalBold, Memory, Server, Sd } from 'mdi-material-ui'

import CardStatisticsVerticalComponent from "./components/cards/Card";
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

  const [show, setShow] = useState(false)
  const [view, setView] = useState(false)
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onChangeShow = () => {
    setShow(!show)
    setView(!view)
  }

  const onChangeView = () => {
    setShow(!show)
    setView(!view)
  }

  console.log("show", show)
  console.log("view", view)

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
        <div id="con_wrap">
          <div id="con_area">
            <div className="con_box">
              {/* <div class="pagenation_area_squar">
                          <span class="con_btn_area_float_r">
                              <span class="tb_num_view">
                                  <select name="pn_list" class="select" id="pn">
                                      <option value="num10">1 sec</option>
                                      <option value="num20">2 sec</option>

                                  </select>
                              </span>
                          </span>
                          <span class="con_btn_area_float_r">
                              <span class="total_view_list">Update:
                                  <span class="txt_blue">2022.04.01 19:00.34</span>
                              </span>
                          </span>


                      </div> */}
              <div className="con_dash_wrap">
                {/* Content_table : S */}
                <div className="dash_col_box01">
                  <div className="width_15p h_100p">
                    <div className="dash_box h_100p">
                      <div className="dash_tit_wrap">
                        <div className="img_wrap">
                          <img src="./images/blocks.png" alt="블록" />
                        </div>
                        <p className="cir_sub02">Blocks</p>
                        <div className=" tit_wrap">
                          <span className="tit">2,650</span>
                          <span>- 1.46%</span>
                        </div>
                        <span className="cir_tit02">+ 345 than yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div className="width_15p h_100p">
                    <div className="dash_box h_100p">
                      <div className="dash_tit_wrap">
                        <div className="img_wrap">
                          <img src="./images/transactions.png" alt="트랜섹션" />
                        </div>
                        <p className="cir_sub02"> Transactions</p>
                        <div className="tit_wrap">
                          <span className="tit">2,650</span>
                          <span> - 1.46%</span>
                        </div>
                        <span className="cir_tit02">+ 345 than yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div className="width_15p h_100p">
                    <div className="dash_box h_100p">
                      <div className="dash_tit_wrap">
                        <div className="img_wrap">
                          <img src="./images/cpu.png" alt="cpu" />
                        </div>
                        <p className="cir_sub02">CPU</p>
                        <div className="tit_wrap">
                          <span className="tit">17%</span>
                          <span> - 1.46%</span>
                        </div>
                        <span className="cir_tit02">+ 345 than yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div className="width_15p h_100p">
                    <div className="dash_box h_100p">
                      <div className="dash_tit_wrap">
                        <div className="img_wrap">
                          <img src="./images/memory.png" alt="메모리" />
                        </div>
                        <p className="cir_sub02">Memory</p>
                        <div className="tit_wrap">
                          <span className="tit">20%</span>
                          <span>- 1.46%</span>
                        </div>
                        <span className="cir_tit02">+ 345 than yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div className="width_15p h_100p">
                    <div className="dash_box h_100p">
                      <div className="dash_tit_wrap">
                        <div className="img_wrap">
                          <img src="./images/storage.png" alt="스토리지" />
                        </div>
                        <p className="cir_sub02">Storage</p>
                        <div className="tit_wrap">
                          <span className="tit">60%</span>
                          <span> - 1.46%</span>
                        </div>
                        <span className="cir_tit02">+ 345 than yesterday</span>
                      </div>
                    </div>
                  </div>
                  <div className="width_30p h_100p">
                    <div className="dash_box h_100p">
                      <div className="dash_tit_wrap info">
                        <p className="cir_sub02">Blockchain Info</p>
                        <div className="noti">
                          <ul>
                            <li>위험</li>
                            <li>주의</li>
                            <li>안전</li>
                          </ul>
                        </div>
                      </div>
                      <div className="dash_tit_wrap info02">
                        <ul className="blockchaininfo">
                          <li>
                            <p className="num" /> Servers<span>3</span>
                          </li>
                          <li>
                            <p className="num" />
                            Orgs <span>3</span>
                          </li>
                          <li>
                            <p className="num" />
                            Orderers <span>5</span>
                          </li>
                          <li>
                            <p className="num" />
                            <a href="#a" data-modal-id="popup3" tabIndex={-1}>
                              Peers
                            </a>{" "}
                            <span>6</span>
                          </li>
                          <li>
                            <p className="num" />
                            <a href="#a" data-modal-id="popup4" tabIndex={-1}>
                              CA Servers{" "}
                            </a>
                            <span>6</span>
                          </li>
                          <li>
                            <p className="num" />
                            Channels <span>3</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content_table : E */}
                {/* Content_table : S */}
                <div className="dash_col_box02">
                  <div className="width_100p h_100p">
                    <div className="dash_box h_100p">
                      <div className="dash_tit_wrap">
                        <ul className="tab_bar">
                          {/* <li className="active">
                          <a href="#tab01" className="tabBtn" >
                            Ledger Info
                          </a>
                        </li>
                        <li>
                          <a href="#tab02" className="tabBtn" >
                            Resource Info
                          </a>
                        </li> */}
                          <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
                            <Tab label="Ledger Info" onClick={onChangeShow} />
                            <Tab label="Resource Info" onClick={onChangeView} />
                          </Tabs>
                        </ul>
                        {/* <span class="txt_gry"> (최근 30일)</span> */}
                      </div>
                      <div className="tab_container">
                        <div className="tab_content" id="tab01">
                          {show === false ?
                            <Bar echars={echarts} setLoading={setLoading} />
                            : null
                          }
                          {show === false ?
                            <div id="chart-container">
                              <Bar echars={echarts} setLoading={setLoading} />
                              <div id="chart-containerline">
                                <Line echars={echarts} setLoading={setLoading} />
                              </div>
                            </div>
                            : null
                          }
                          {show === true ?
                            <div id="chart-containerline03">Cpu</div>
                            : null
                          }
                          {show === true ?
                            <div id="chart-containerline04">Memory</div>
                            : null
                          }
                          {show === true ?
                            <div id="chart-containerline05">Storage</div>
                            : null
                          }
                        </div>
                        <div className="tab_content" id="tab02">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Content_table : E */}
              </div>
            </div>
          </div>
        </div>
      </Grid>
    </React.Fragment >
  );
};
