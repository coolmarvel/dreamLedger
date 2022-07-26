import React from "react";

export const HeaderPage = () => {
  return (
    <div id="header">
      <div className="header_area">
        <div className="hd_logo_wrap">
          <div className="hd_logo" tabIndex={-1}>
            <a href="#a">
              <span className="ad_logo">
                <img src="images/logo.png" alt="관리자 로고" />
              </span>
              <span className="ad_text">blockchain</span>
            </a>
          </div>
        </div>
        <div className="hd_menu">
          <div className="hamburger nav-toggle">
            <a href="#">
              <span className="screen-reader-text">
                <span className="listIcon">
                  <i className="las la-bars" />
                </span>
              </span>
            </a>
          </div>
          <div className="brand_wrap">
            <div className="brand_text02">Block Architecture</div>
            <i className="las la-angle-right" />
            <div className="brand_text01">Physical Servers</div>
          </div>
        </div>
        <div className="hd_logout">
          <ul>
            <li>
              <a href="#a" data-modal-id="popup1" tabIndex={-1}>
                <i className="la la-power-off" />
                Logout
              </a>
            </li>
          </ul>
        </div>
        <div className="hd_user">
          <ul>
            <li>
              <a href="#a" data-modal-id="popup2" tabIndex={-1}>
                <i className="las la-user" />
                <span className="my_page">My page</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="hd_info">
          <ul>
            <li style={{ display: "none" }}>
              <a
                href="#"
                tabIndex={-1}
                className="txt_red"
                data-modal-id="popup10"
              >
                무료이용기간이 30일 남았습니다.
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
