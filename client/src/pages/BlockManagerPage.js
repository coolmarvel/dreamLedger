import React from "react";

export const BlockManagerPage = () => {
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
                            <th>Sever name</th>
                            <th>state</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>admin</td>
                            <td>
                              <div className="state_default"> default</div>
                            </td>
                          </tr>
                          <tr className="admin_btn">
                            <td>admin</td>
                            <td>
                              <div className="state_default"> default</div>
                            </td>
                          </tr>
                          <tr>
                            <td>admin</td>
                            <td>
                              <div className="state_default"> default</div>
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
                    <div className="con_sub_tit">Detail View</div>
                  </div>
                  <div className="con_menu_tb_wrap">
                    <table className="table_wrap">
                      <tbody>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">
                              Server Name:{" "}
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="admin"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">User Name:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="ubuntu"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">
                              {" "}
                              Home Path:
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="/home/ubuntu"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">Password:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="null"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">Host IP:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="127.0.0.01"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">SFTP Port:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="null"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">
                              Dockerd Port:
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="null"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">UID:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="null"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_130">GID:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              disabled=""
                              placeholder="null"
                            />
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
