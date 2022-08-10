import React from 'react';
import {Popup3} from "./Popup3";
import LoginPage from "./LoginPage";

export const SettingPageAdministator = (props) => {

    const handleClose = () => {
        props.history.push('/login');
    };

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
                                        <span className="sw_tit">Admin:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="width_200 input_txt"
                                        placeholder=""
                                    />
                                </li>
                                <li>
                                    <label htmlFor="">
                                        <span className="sw_tit width_100">AdminName:</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="width_200 input_txt"
                                        placeholder=""
                                    />
                                </li>
                                <li className="btn_area_search">
                                    <div className="pop_btn_one width_100">
                                        <a href="#a" data-modal-id="popup3" tabIndex={-1} onClick={handleClose}>
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
                                <div className="con_sub_tit_wrap_setting">
                                    <div className="con_sub_tit">Admin List</div>
                                    <div className="width_100 btn_blu addbtn">
                                        <a href="#a" data-modal-id="popup4" tabIndex={-1}>
                                            <i className="la la-plus" />
                                            Add
                                        </a>
                                    </div>
                                </div>
                                <div className="con_menu_tb_wrap">
                                    <div className="table_wrap">
                                        <table id="tableData" className="dt_tbl">
                                            <colgroup>
                                                <col style={{ width: "5%" }} />
                                                <col style={{ width: "15%" }} />
                                                <col style={{ width: "35%" }} />
                                                <col style={{ width: "25%" }} />
                                                <col style={{ width: "20%" }} />
                                            </colgroup>
                                            <thead>
                                            <tr>
                                                <th>NO</th>
                                                <th>Admin ID</th>
                                                <th>Admin Name</th>
                                                <th>Authority</th>
                                                <th>management</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>4</td>
                                                <td>text01</td>
                                                <td>admintest_01</td>
                                                <td>
                                                    일반운영자 팝업(열)
                                                    <a
                                                        href="#a"
                                                        data-modal-id="popup3"
                                                        tabIndex={-1}
                                                    >
                                                        <i className="las la-edit" />
                                                    </a>
                                                </td>
                                                <td>
                                                    <a
                                                        href="#a"
                                                        data-modal-id="popup5"
                                                        tabIndex={-1}
                                                    >
                                                        <i className="las la-edit" />
                                                    </a>
                                                    <i className="las la-trash-alt" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>3</td>
                                                <td>text01</td>
                                                <td>admintest_01</td>
                                                <td>
                                                    일반운영자 <i className="las la-edit" />
                                                </td>
                                                <td>
                                                    <i className="las la-edit" />
                                                    <i className="las la-trash-alt" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>2</td>
                                                <td>text01</td>
                                                <td>admintest_01</td>
                                                <td>
                                                    일반운영자
                                                    <i className="las la-edit" />
                                                </td>
                                                <td>
                                                    <i className="las la-edit" />
                                                    <i className="las la-trash-alt" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>1</td>
                                                <td>text01</td>
                                                <td>admintest_01</td>
                                                <td>
                                                    일반운영자
                                                    <i className="las la-edit" />
                                                </td>
                                                <td>
                                                    <i className="las la-edit" />
                                                    <i className="las la-trash-alt" />
                                                </td>
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
}