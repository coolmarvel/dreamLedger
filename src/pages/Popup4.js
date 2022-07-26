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
        </div>
    );
}