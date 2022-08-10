import React from 'react';

export const Popup2 = () => {
    return (
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
    );
}