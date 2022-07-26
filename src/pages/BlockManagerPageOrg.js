import React from "react";

export const BlockManagerPageOrg = () => {
  return (
    <div id="con_wrap">
      <div id="con_area">
        <div className="con_box_flex" id="order">
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
                            <th>Organization Name</th>
                            <th>state</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>OrdererOrg0</td>
                            <td>
                              <div className="state_default"> default</div>
                            </td>
                          </tr>
                          <tr className="admin_btn">
                            <td>OrdererOrg0</td>
                            <td></td>
                          </tr>
                          <tr>
                            <td>OrdererOrg0</td>
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
                              Organization Name:{" "}
                            </span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="OrdererOrg0"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">Type :</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="ORDERER"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="sw_tit width_150">Domain:</span>
                            <input
                              type="text"
                              className="width_500 input_txt"
                              placeholder="example.com"
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
