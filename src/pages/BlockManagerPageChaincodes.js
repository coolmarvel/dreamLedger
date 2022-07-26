import React from "react";

export const BlockManagerPageChaincodes = () => {
  return (
    <div id="con_wrap">
      <div id="con_area">
        <div className="con_box_flex" id="phySever">
          <div className="flex_wrap">
            {/* left_area channel name  s*/}
            <div className="con_search_area">
              <span className="width_100 btn_blu addbtn">
                <i className="la la-plus" />
                Add
              </span>
              <div className="con_menu_search_wrap">
                {/* 컨텐츠 */}
                <div className="con_tb_area">
                  <div className="con_menu_tb_wrap">
                    <div className="table_wrap">
                      <table id="tableData" className="dt_tbl">
                        <colgroup>
                          <col style={{ width: "70%" }} />
                          <col style={{ width: "30%" }} />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>Channel name</th>
                            <th />
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>peer1.org1.dreamsecurity.com</td>
                            <td>
                              <div>
                                <i className="las la-trash-alt" />
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              {/*  컨텐츠  */}
            </div>
            {/* left_area channel name  e*/}
            {/* right_area  s*/}
            <div className="con_sub_wrap">
              <div className="con_sub_all_box">
                <div className="con_tb_area">
                  <div className="con_sub_tit_wrap">
                    <span className="con_sub_tit"> Detail View</span>
                  </div>
                  <div className="con_menu_tb_wrap">
                    <table className="table_wrap">
                      <tbody>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">
                              Chaincode Name:{" "}
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="mycc"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">Version:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="v.1.1"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">Lang</span>
                            <select name="site01" id={2} style={{ width: 500 }}>
                              <option value={1} selected="">
                                go
                              </option>
                              <option value={2}>org</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">Sequence:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder={1}
                              disabled=""
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">Channel:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="channel did"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ display: "flex" }}>
                            <span className="sw_tit" style={{ width: 153 }}>
                              Directory:
                            </span>
                            {/* <textarea name="" id="" cols="30" rows="10"
                                                          class="txtarea"> </textarea> */}
                            <div className="txtarea">
                              <div className="img_wrap">
                                <img src="./images/upload.png" alt="" />
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* 버튼 */}
                <div className="btn_area">
                  <div className="pop_btn_cancle upg width_100">
                    <a href="">Upgrade</a>
                  </div>
                  <div className="pop_btn_one width_100">
                    <a href="">Save</a>
                  </div>
                  <div className="pop_btn_cancle width_100">
                    <a href="">Cancle</a>
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
