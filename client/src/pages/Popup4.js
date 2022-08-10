import React from 'react';

export const Popup4 = () => {
    return (
        <div id="popup4" className="modal-box-al">
            <div className="modal_header">
                <p className="modal_tit">Orderes</p>
            </div>
            <div className="modal_body">
                <table id="tableData" className="dt_tbl">
                    <colgroup>
                        <col style={{ width: "10%" }} />
                        <col style={{ width: "70%" }} />
                        <col style={{ width: "20%" }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>
                            <input
                                type="checkbox"
                                id={55}
                                name="tb_info"
                                defaultValue={55}
                                className="check_nor"
                            />
                            <label htmlFor={55} className="check_label">
                                <span />
                            </label>
                        </th>
                        <th>Domain</th>
                        <th>Anchor</th>
                        <th>Core Peer</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            <input
                                type="checkbox"
                                id={56}
                                name="tb_info"
                                defaultValue={56}
                                className="check_nor"
                            />
                            <label htmlFor={56} className="check_label">
                                <span />
                            </label>
                        </td>
                        <td>orderer1.ordererOrg1.dreamsecurity.com</td>
                        <td>
                            <input
                                type="checkbox"
                                id={57}
                                name="tb_info"
                                defaultValue={57}
                                className="check_nor"
                            />
                            <label htmlFor={57} className="check_label">
                                <span />
                            </label>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                id={57}
                                name="tb_info"
                                defaultValue={57}
                                className="check_nor"
                            />
                            <label htmlFor={57} className="check_label">
                                <span />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="checkbox"
                                id={56}
                                name="tb_info"
                                defaultValue={56}
                                className="check_nor"
                            />
                            <label htmlFor={56} className="check_label">
                                <span />
                            </label>
                        </td>
                        <td>orderer1.ordererOrg1.dreamsecurity.com</td>
                        <td>
                            <input
                                type="checkbox"
                                id={57}
                                name="tb_info"
                                defaultValue={57}
                                className="check_nor"
                            />
                            <label htmlFor={57} className="check_label">
                                <span />
                            </label>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                id={57}
                                name="tb_info"
                                defaultValue={57}
                                className="check_nor"
                            />
                            <label htmlFor={57} className="check_label">
                                <span />
                            </label>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input
                                type="checkbox"
                                id={56}
                                name="tb_info"
                                defaultValue={56}
                                className="check_nor"
                            />
                            <label htmlFor={56} className="check_label">
                                <span />
                            </label>
                        </td>
                        <td>orderer1.ordererOrg1.dreamsecurity.com</td>
                        <td>
                            <input
                                type="checkbox"
                                id={57}
                                name="tb_info"
                                defaultValue={57}
                                className="check_nor"
                            />
                            <label htmlFor={57} className="check_label">
                                <span />
                            </label>
                        </td>
                        <td>
                            <input
                                type="checkbox"
                                id={57}
                                name="tb_info"
                                defaultValue={57}
                                className="check_nor"
                            />
                            <label htmlFor={57} className="check_label">
                                <span />
                            </label>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="seleted_area" className="seletArea"></div>
            </div>
            <div className="modal_footer">
                <div className="modal_footer_box">
                    {/*버튼*/}
                    <div className="pop_btn_one width_100">
                        <a href="">Add</a>
                    </div>
                    <div className="pop_btn_cancle width_100">
                        <a href="">Cancle</a>
                    </div>
                    {/*//버튼*/}
                </div>
            </div>
            <div id="popup1" className="modal-box-al">
                <div className="modal_header">
                    {/* <p class="modal_tit">아이디 찾기</p> */}
                </div>
                <div className="modal_body">
                    <p>로그아웃 하시겠습니까?</p>
                </div>
                <div className="modal_footer">
                    <div className="modal_footer_box">
                        {/*버튼*/}
                        <div className="pop_btn_one width_100">
                            <a href="./Magilinehub_001.html">로그아웃</a>
                        </div>
                        <div className="pop_btn_cancle width_100">
                            <a href="./Magilinehub_001.html">취소</a>
                        </div>
                        {/*//버튼*/}
                    </div>
                </div>
            </div>
            {/*alert01*/}
            <div id="popup2" className="modal-box-al">
                <div className="modal_header">
                    <p className="modal_tit">Changing password</p>
                </div>
                <div className="modal_body">
                    <table>
                        <tbody>
                        <tr className="sidfj">
                            <td>
                                <span className="sw_tit width_130">Admin ID: </span>
                                <input type="text" className="width_300 input_txt" />
                            </td>
                        </tr>
                        <tr className="sidfj">
                            <td>
                                <span className="sw_tit width_130">Admin Name: </span>
                                <input type="text" className="width_300 input_txt" />
                            </td>
                        </tr>
                        <tr className="sidfj">
                            <td>
                                <span className="sw_tit width_130"> Current Password:</span>
                                <input type="text" className="width_300 input_txt" />
                            </td>
                        </tr>
                        <tr className="sidfj">
                            <td>
                                <span className="sw_tit width_130">New password</span>
                                <input type="text" className="width_300 input_txt" />
                            </td>
                        </tr>
                        <tr className="sidfj">
                            <td>
                                <span className="sw_tit width_130">Confirm password</span>
                                <input type="text" className="width_300 input_txt" />
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div id="seleted_area" className="seletArea"></div>
                </div>
                <div className="modal_footer">
                    <div className="modal_footer_box">
                        {/*버튼*/}
                        <div className="pop_btn_one width_100">
                            <a href="">Save</a>
                        </div>
                        <div className="pop_btn_cancle width_100">
                            <a href="">Cancle</a>
                        </div>
                        {/*//버튼*/}
                    </div>
                </div>
            </div>
            {/*alert03*/}
            <div id="popup3" className="modal-box-al">
                <div className="modal_header">
                    <a className="js-modal-close pop_close">
                        <i className="la la-close" />
                    </a>
                    <p className="modal_tit">Details</p>
                </div>
                <div className="modal_body">
                    <div className="table_wrap">
                        <table id="tableData" className="dt_tbl">
                            <colgroup>
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "30%" }} />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>status</th>
                                <th>Domain</th>
                                <th />
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="reddot" />
                                </td>
                                <td>peer0.org1.dreamsecurity.com</td>
                                <td>
                                    <div className="team_set_box">
                                        <input type="checkbox" id="toggle_set" name="" />
                                        <div>
                                            <label htmlFor="toggle_set" className="switch">
                                                <span className="slider" />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="greendot" />
                                </td>
                                <td>peer0.org1.dreamsecurity.com</td>
                                <td>
                                    <div className="team_set_box">
                                        <input type="checkbox" id="toggle_set01" name="" />
                                        <div>
                                            <label htmlFor="toggle_set01" className="switch">
                                                <span className="slider" />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="orgdot" />
                                </td>
                                <td>peer0.org1.dreamsecurity.com</td>
                                <td>
                                    <div className="team_set_box">
                                        <input type="checkbox" id="toggle_set02" />
                                        <div>
                                            <label htmlFor="toggle_set02" className="switch">
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
                <div className="pagenation_area_squar">
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
                </div>
            </div>
            {/*alert03*/}
            {/*alert04*/}
            <div id="popup4" className="modal-box-al">
                <div className="modal_header">
                    <a className="js-modal-close pop_close">
                        <i className="la la-close" />
                    </a>
                    <p className="modal_tit">Details</p>
                </div>
                <div className="modal_body">
                    <div className="table_wrap">
                        <table id="tableData" className="dt_tbl">
                            <colgroup>
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "50%" }} />
                                <col style={{ width: "30%" }} />
                            </colgroup>
                            <thead>
                            <tr>
                                <th>status</th>
                                <th>Domain</th>
                                <th />
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="reddot" />
                                </td>
                                <td>peer0.org1.dreamsecurity.com</td>
                                <td>
                                    <div className="team_set_box">
                                        <input type="checkbox" id="toggle_set06" name="" />
                                        <div>
                                            <label htmlFor="toggle_set06" className="switch">
                                                <span className="slider" />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="reddot" />
                                </td>
                                <td>peer0.org1.dreamsecurity.com</td>
                                <td>
                                    <div className="team_set_box">
                                        <input
                                            type="checkbox"
                                            id="toggle_set"
                                            name=""
                                            defaultChecked=""
                                        />
                                        <div>
                                            <label htmlFor="toggle_set" className="switch">
                                                <span className="slider" />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="greendot" />
                                </td>
                                <td>peer0.org1.dreamsecurity.com</td>
                                <td>
                                    <div className="team_set_box">
                                        <input
                                            type="checkbox"
                                            id="toggle_set04"
                                            name=""
                                            defaultChecked=""
                                        />
                                        <div>
                                            <label htmlFor="toggle_set04" className="switch">
                                                <span className="slider" />
                                            </label>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="orgdot" />
                                </td>
                                <td>peer0.org1.dreamsecurity.com</td>
                                <td>
                                    <div className="team_set_box">
                                        <input type="checkbox" id="toggle_set05" />
                                        <div>
                                            <label htmlFor="toggle_set05" className="switch">
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
                <div className="pagenation_area_squar">
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
                </div>
            </div>
        </div>
    );
}
