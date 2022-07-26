import React from 'react';

export const BlockManagerPageChannel = () => {

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
                                                        <div className="">
                                                            {" "}
                                                            <i className="las la-trash-alt" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="admin_btn">
                                                    <td>peer1.org1.dreamsecurity.com</td>
                                                    <td>
                                                        <div className="">
                                                            {" "}
                                                            <i className="las la-trash-alt" />
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>peer1.org1.dreamsecurity.com</td>
                                                    <td>
                                                        <div className="">
                                                            {" "}
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
                                    <div className="con_menu_tb_wrap">
                                        <div className="con_sub_tit_wrap">
                                            <span className="con_sub_tit"> Detail View</span>
                                        </div>
                                        <div className="table_wrap">
                                            <div style={{ textAlign: "left" }}>
                            <span className="sw_tit width_110">
                              Channel Name:
                            </span>
                                                <input
                                                    type="text"
                                                    className="width_300 input_txt"
                                                    placeholder="channel-did"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="con_menu_tb_wrap">
                                        <div className="con_sub_tit_wrap">
                          <span className="width_100 btn_blu addbtn">
                            <i className="la la-plus" />
                            Add
                          </span>
                                            <span className="con_sub_tit"> Orderer List</span>
                                        </div>
                                        <div className="table_wrap">
                                            <table id="tableData" className="dt_tbl">
                                                <colgroup>
                                                    <col style={{ width: "70%" }} />
                                                    <col style={{ width: "30%" }} />
                                                </colgroup>
                                                <thead>
                                                <tr>
                                                    <th>Domain</th>
                                                    <th>Core Order</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>orderer2.ordererOrg1.dreamsecurity.com</td>
                                                    <td>
                                                        <div className="state_select">select</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>orderer2.ordererOrg1.dreamsecurity.com</td>
                                                    <td>
                                                        <div className="state_select">select</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>orderer2.ordererOrg1.dreamsecurity.com</td>
                                                    <td>
                                                        <div className="state_select">select</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>orderer2.ordererOrg1.dreamsecurity.com</td>
                                                    <td>
                                                        <div className="state_select">select</div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="con_menu_tb_wrap">
                                        <div className="con_sub_tit_wrap">
                          <span className="width_100 btn_blu addbtn">
                            <i className="la la-plus" />
                            Add
                          </span>
                                            <span className="con_sub_tit"> Peer List</span>
                                        </div>
                                        <div className="table_wrap">
                                            <table id="tableData" className="dt_tbl">
                                                <colgroup>
                                                    <col style={{ width: "50%" }} />
                                                    <col style={{ width: "25%" }} />
                                                    <col style={{ width: "25%" }} />
                                                </colgroup>
                                                <thead>
                                                <tr>
                                                    <th>Domain</th>
                                                    <th>Anchor</th>
                                                    <th>Core Order</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <td>orderer2.ordererOrg1.dreamsecurity.com</td>
                                                    <td>222</td>
                                                    <td>
                                                        <div className="state_select">select</div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                {/* 버튼 */}
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
}