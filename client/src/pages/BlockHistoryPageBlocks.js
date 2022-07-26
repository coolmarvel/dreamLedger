import React from "react";

export const BlockHistoryPageBlocks = () => {
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
                <li className="con_tb_area">
                  <div className="con_menu_tb_wrap">
                    <div className="timePicker">
                      <div className="sch_tbl_con">
                        <span className="width_46p sch_tbl_input_date">
                          <input type="text" className="S_date" />
                        </span>
                        <span className="sch_tbl_input_date_txt">~</span>
                        <span className="width_46p sch_tbl_input_date">
                          <input type="text" className="E_date" />
                        </span>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <label htmlFor="">
                    <span className="sw_tit">Channel:</span>
                  </label>
                  <input
                    type="text"
                    className="width_150 input_txt"
                    placeholder=""
                  />
                </li>
                <li>
                  <label htmlFor="">
                    <span className="sw_tit width_100">Block Hash:</span>
                  </label>
                  <input
                    type="text"
                    className="width_150 input_txt"
                    placeholder=""
                  />
                </li>
                <li>
                  <label htmlFor="">
                    {" "}
                    <span className="sw_tit">TX ID:</span>
                  </label>
                  <input
                    type="text"
                    className="width_150 input_txt"
                    placeholder=""
                  />
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
                  <div className="con_sub_tit">Blocks</div>
                </div>
                <div className="con_menu_tb_wrap">
                  <div className="table_wrap">
                    <table id="tableData" className="dt_tbl">
                      <colgroup>
                        <col style={{ width: "5%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "5%" }} />
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "25%" }} />
                        <col style={{ width: "20%" }} />
                      </colgroup>
                      <thead>
                        <tr>
                          <th>NO</th>
                          <th>Block Number</th>
                          <th>Channel Name</th>
                          <th>Tx Count</th>
                          <th>Block Hash</th>
                          <th>Transactions</th>
                          <th>Creation Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>10</td>
                          <td>10</td>
                          <td>DIDChannel</td>
                          <td>8</td>
                          <td>7s89f7sa8f7sd8f7sdf7sd65fsdf1s…</td>
                          <td>7s89f7sa8f7sd8f7sdf7sd65fsdf1s…</td>
                          <td>2022-04-04 11:15:50</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>10</td>
                          <td>DIDChannel</td>
                          <td>8</td>
                          <td>7s89f7sa8f7sd8f7sdf7sd65fsdf1s…</td>
                          <td>7s89f7sa8f7sd8f7sdf7sd65fsdf1s…</td>
                          <td>2022-04-04 11:15:50</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>10</td>
                          <td>DIDChannel</td>
                          <td>8</td>
                          <td>7s89f7sa8f7sd8f7sdf7sd65fsdf1s…</td>
                          <td>7s89f7sa8f7sd8f7sdf7sd65fsdf1s…</td>
                          <td>2022-04-04 11:15:50</td>
                        </tr>
                        <tr>
                          <td>10</td>
                          <td>10</td>
                          <td>DIDChannel</td>
                          <td>8</td>
                          <td>7s89f7sa8f7sd8f7sdf7sd65fsdf1s…</td>
                          <td>7s89f7sa8f7sd8f7sdf7sd65fsdf1s…</td>
                          <td>2022-04-04 11:15:50</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  {/* paging */}
                  <div className="pagenation_area_squar">
                    <span className="con_btn_area_float_l">
                      <span className="total_view_list">
                        Total <span className="txt_blue">46</span>
                        items
                      </span>
                    </span>
                    <div className="pagenation_squar">
                      <ul className="list_page">
                        <li>
                          <a href="#" className="btn_tb_back">
                            <i className="la la-angle-double-left" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn_tb_back">
                            <i className="la la-angle-left" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="active">
                            1
                          </a>
                        </li>
                        <li>
                          <a href="#">2</a>
                        </li>
                        <li>
                          <a href="#">3</a>
                        </li>
                        <li>
                          <a href="#">4</a>
                        </li>
                        <li>
                          <a href="#">5</a>
                        </li>
                        <li>
                          <a href="#" className="btn_tb_next">
                            <i className="la la-angle-right" />
                          </a>
                        </li>
                        <li>
                          <a href="#" className="btn_tb_next">
                            <i className="la la-angle-double-right" />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <span className="con_btn_area_float_r">
                      <span className="tb_num_view">
                        <select name="pn_list" className="select" id="pn">
                          <option value="num10">10</option>
                          <option value="num20">20</option>
                          <option value="num30">30</option>
                        </select>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
