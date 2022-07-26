import React from "react";

export const Popup1 = () => {
  return (
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
            <a href="./blockchain_Physical Servers_001.html">로그아웃</a>
          </div>
          <div className="pop_btn_cancle width_100">
            <a href="./blockchain_Physical Servers_001.html">취소</a>
          </div>
          {/*//버튼*/}
        </div>
      </div>
    </div>
  );
};
