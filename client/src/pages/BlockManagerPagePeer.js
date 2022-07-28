import React from "react";

export const BlockManagerPagePeer = () => {
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
                            <th>Peer name</th>
                            <th>state</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>peer1.org1.dreamsecurity.com</td>
                            <td>
                              <div className="state_default"> default</div>
                            </td>
                          </tr>
                          <tr className="admin_btn">
                            <td>peer1.org1.dreamsecurity.com</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>peer1.org1.dreamsecurity.com</td>
                            <td></td>
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
                    <div className="con_sub_tit">Detail View</div>
                  </div>
                  <div className="con_menu_tb_wrap">
                    <table className="table_wrap">
                      <tbody>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">
                              Peer Name:{" "}
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="admin"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">
                              PhysicalServer Name:
                            </span>
                            <select name="site01" id={1} style={{ width: 500 }}>
                              <option value={1}  >
                                nodo1
                              </option>
                              <option value={2}>node1</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">
                              Organization :
                            </span>
                            <select name="site01" id={2} style={{ width: 500 }}>
                              <option value={1}  >
                                org
                              </option>
                              <option value={2}>org</option>
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">
                              Server Port:
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="null"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">
                              Operations Port:
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="127.0.0.01"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">
                              State Database:
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="127.0.0.01"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">Status:</span>
                            {/* <input type="text" class="width_500 input_txt"
                                                          placeholder="acitve"> */}
                            <div className="width_500">
                              <a href="#a" data-modal-id="popup4" tabIndex={-1}>
                                <input
                                  type="checkbox"
                                  id="toggle_set"
                                  name=""
                                />
                              </a>
                              <div>
                                <label
                                  htmlFor="toggle_set"
                                  className="switch a"
                                >
                                  <span className="slider" />
                                </label>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="btn_area">
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
