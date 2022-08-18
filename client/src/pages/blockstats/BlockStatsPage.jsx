import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as echarts from "echarts";

import { searchDataAsync } from "../../redux/boardReducer";

import BlocksChart from "./charts/BlocksChart";
import TransactionChart from "./charts/TransactionChart";

export const BlockStatsPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { dashboard } = useSelector((state) => state.boardReducer);

  useEffect(() => {
    setLoading(true);
    dispatch(searchDataAsync());
    setLoading(false);
  }, []);

  if (loading) {
    return <div>loading...</div>;
  } else {
    return (
      <div id="con_wrap">
        <div id="con_area">
          <div className="con_box_flexcol">
            {/* left_area channel name  s*/}
            <div className="con_search_area_col">
              <div className="con_sub_tit_wrap">
                <span className="con_sub_tit">Search filter</span>
              </div>
              <div className="con_menu_search_wrap">
                {/* 컨텐츠 */}
                <ul className="con_tb_area_wrap">
                  <li>
                    <label htmlFor="">
                      <span className="sw_tit">Channel:</span>
                    </label>
                    <select
                      name="site05"
                      id={1}
                      style={{ width: 200 }}
                      defaultValue={"DEFAULT"}
                    >
                      {/* <option value={"DEFAULT"} disabled>
                        Choose a Channel
                      </option> */}
                      <option value={1 && "DEFAULT"}>Channel_1</option>
                      <option value={2}>Channel_2</option>
                      <option value={3}>Channel_3</option>
                    </select>
                  </li>
                  <li className="radio_btn_wrap">
                    <span className="sch_tbl_con chk_box02 radio_btn">
                      <input
                        type="radio"
                        id={1}
                        name="sch_status"
                        defaultValue="01a"
                        defaultChecked=""
                      />
                      <label htmlFor="01a">
                        <span className="sq_input">Hour</span>
                      </label>
                      <input
                        type="radio"
                        id={2}
                        name="sch_status"
                        defaultValue={2}
                      />
                      <label htmlFor={2}>
                        <span className="sq_input">Day</span>
                      </label>
                      <input
                        type="radio"
                        id={3}
                        name="sch_status"
                        defaultValue={2}
                      />
                      <label htmlFor={3}>
                        <span className="sq_input">Month</span>
                      </label>
                    </span>
                  </li>
                  <li className="con_tb_area">
                    <div className="con_menu_tb_wrap">
                      <div className="timePicker">
                        <div className="sch_tbl_con">
                          <span className="width_100p sch_tbl_input_date">
                            <input type="text" className="S_date" />
                          </span>
                          {/* <span class="sch_tbl_input_date_txt">~</span>
                                                  <span class="width_46p sch_tbl_input_date">
                                                      <input type="text" class="E_date"></span> */}
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="btn_area_search">
                    <div className="pop_btn_one width_100">
                      <a href="#a" data-modal-id="popup3" tabIndex={-1}>
                        Search
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* left_area channel name  e*/}
            {/* right_area  s*/}
            <div className="con_sub_wrap_col">
              <div className="con_sub_all_box col">
                <div className="con_tb_area">
                  <div className="con_sub_tit_wrap">
                    <div className="con_sub_tit">Block</div>
                  </div>
                  <div className="con_menu_tb_wrap">
                    <div id="chart-container_stats">
                      <BlocksChart echarts={echarts} />
                    </div>
                  </div>
                </div>
                <div className="con_tb_area">
                  <div className="con_sub_tit_wrap">
                    <div className="con_sub_tit">Transactions</div>
                  </div>
                  <div className="con_menu_tb_wrap">
                    <div id="chart-container_stats2">
                      <TransactionChart echarts={echarts} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
