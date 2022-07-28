import React from "react";

export const ResourcePageStats = () => {
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
                  <select name="site05" id={1} style={{ width: 200 }}>
                    <option value={1}  >
                      Channel_1
                    </option>
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
                <li className="btn_area_search">
                  <div className="pop_btn_one width_100">
                    <a href="#a" data-modal-id="popup2" tabIndex={-1}>
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
              {/*  컨텐츠 없는경우 defaut */}
              <div className="h_500 width_100p" style={{ textAlign: "center" }}>
                조회할 Domain 을 입력해주세요
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
