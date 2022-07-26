import React from "react";
import $ from "jquery";

export const BlockArchitecturePage = () => {
  $(document).ready(function () {
    var currentGfgStep, nextGfgStep, previousGfgStep;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;

    setProgressBar(current);

    $(".btn_next_arrow").click(function () {
      currentGfgStep = $(this).parent().parent();
      nextGfgStep = $(this).parent().parent().next();

      $(".progressbar li")
        .eq($("fieldset").index(nextGfgStep))
        .addClass("active");

      nextGfgStep.show();
      currentGfgStep.animate(
        { opacity: 0 },
        {
          step: function (now) {
            opacity = 1 - now;

            currentGfgStep.css({
              display: "none",
            });
            nextGfgStep.css({ opacity: opacity });
          },
          duration: 0,
        }
      );
      setProgressBar(++current);
    });

    $(".btn_prev_arrow").click(function () {
      currentGfgStep = $(this).parent().parent();
      previousGfgStep = $(this).parent().parent().prev();

      $(".progressbar li")
        .eq($("fieldset").index(currentGfgStep))
        .removeClass("active");

      previousGfgStep.show();

      currentGfgStep.animate(
        { opacity: 0 },
        {
          step: function (now) {
            opacity = 1 - now;

            currentGfgStep.css({
              display: "none",
            });
            previousGfgStep.css({ opacity: opacity });
          },
          duration: 0,
        }
      );
      setProgressBar(--current);
    });

    function setProgressBar(currentStep) {
      var percent = parseFloat(100 / steps) * current;
      var perDcent = percent.toFixed();
      $("#progressbar").css("width", percent + "%");
    }

    $(".submit").click(function () {
      return false;
    });

    $("#phySever .addbtn").click(function () {
      // console.log('dd')
      $(".toast.pop01").fadeIn(400).delay(1000).fadeOut(400);
    });
  });
  return (
    <div id="con_wrap">
      <div id="con_area">
        <div className="con_box_flex_top">
          <ul className="progressbar">
            <li id="step1" className="active">
              <a href=""> Physical Servers</a>
            </li>
            <li id="step2">
              <a href="#phySever">Organization</a>
            </li>
            <li id="step3">
              <a href="#oragnization">CA</a>
            </li>
            <li id="step4">
              <a href="#Orderer">Orderer</a>
            </li>
            <li id="step5">
              <a href="#peer">Peer</a>
            </li>
            <li id="step6">
              <a href="#channel">Channel</a>
            </li>
            <li id="step7">
              <a href="#confirm">Confirm</a>
            </li>
          </ul>
        </div>
        {/* 필드셋01 physical server*/}
        <fieldset>
          <div className="pro_btn_area">
            <div className="btn_prev_arrow_disable" name="previous-step">
              <i className="las la-angle-left" />
            </div>
            <div className="btn_next_arrow" name="next-step">
              <i className="las la-angle-right" />
            </div>
          </div>
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
                      <div className="table_wrap m40 m40">
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
                            <tr>
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
                    <div className="con_menu_tb_wrap">
                      <table className="table_wrap m40">
                        <tbody>
                          <tr>
                            <td>
                              <span className="sw_tit width_130">
                                Server Name:{" "}
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
                                placeholder="admin"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_130">
                                User Name:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
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
                                className="width_300 input_txt"
                                disabled=""
                                placeholder="/home/ubuntu"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_130">
                                Password:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
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
                                className="width_300 input_txt"
                                disabled=""
                                placeholder="127.0.0.01"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_130">
                                SFTP Port:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
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
                                className="width_300 input_txt"
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
                                className="width_300 input_txt"
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
                                className="width_300 input_txt"
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
        </fieldset>
        {/* 필드셋02 oragnization */}
        <fieldset>
          <div className="pro_btn_area">
            <div className="btn_prev_arrow" name="previous-step">
              <i className="las la-angle-left" />
            </div>
            <div className="btn_next_arrow" name="next-step">
              <i className="las la-angle-right" />
            </div>
          </div>
          <div className="con_box_flex" id="oragnization">
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
                      <div className="table_wrap m40">
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
                    <div className="con_menu_tb_wrap">
                      <table className="table_wrap m40">
                        <tbody>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Organization Name:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
                                placeholder="OrdererOrg0"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">Type:</span>
                              <select
                                name=" site01"
                                id=""
                                style={{ width: 300 }}
                              >
                                <option value={1}>ORDERER</option>
                                <option value={2}>peer</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180"> Domain:</span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
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
        </fieldset>
        {/* 필드셋03_ ca */}
        <fieldset>
          <div className="pro_btn_area">
            <div className="btn_prev_arrow" name="previous-step">
              <i className="las la-angle-left" />
            </div>
            <div className="btn_next_arrow" name="next-step">
              <i className="las la-angle-right" />
            </div>
          </div>
          <div className="con_box_flex">
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
                      <div className="table_wrap m40">
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
                            <tr>
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
                    <div className="con_menu_tb_wrap">
                      <table className="table_wrap m40">
                        <tbody>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">CA Name:</span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
                                placeholder="ubuntu"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Physical Server Name:
                              </span>
                              <select
                                name=" site01"
                                id=""
                                style={{ width: 300 }}
                              >
                                <option value={1} selected="">
                                  admiddn
                                </option>
                                <option value={2}>node1</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Organization:
                              </span>
                              <select
                                name="site01"
                                id=""
                                style={{ width: 300 }}
                              >
                                <option value={1} selected="">
                                  ordererOrg1
                                </option>
                                <option value={2}>org1</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Server Port:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
                                placeholder={7505}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Operations Port:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
                                placeholder={15844}
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
        </fieldset>
        {/* 필드셋03 ordered */}
        <fieldset>
          <div className="pro_btn_area">
            <div className="btn_prev_arrow" name="previous-step">
              <i className="las la-angle-left" />
            </div>
            <div className="btn_next_arrow" name="next-step">
              <i className="las la-angle-right" />
            </div>
          </div>
          <div className="con_box_flex" id="ordered">
            <div className="flex_wrap">
              {/* left_area channel name  s*/}
              <div className="con_search_area">
                <span className="width_100 btn_blu addbtn">
                  <a href="#a" data-modal-id="popup4" tabIndex={-1}>
                    <i className="la la-plus" />
                  </a>
                  Add
                </span>
                <div className="con_menu_search_wrap">
                  {/* 컨텐츠 */}
                  <div className="con_tb_area">
                    <div className="con_menu_tb_wrap">
                      <div className="table_wrap m40 ">
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
                            <tr>
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
                </div>{" "}
                {/*  컨텐츠  */}
              </div>
              {/* left_area channel name  e*/}
              {/* right_area  s*/}
              <div className="con_sub_wrap">
                <div className="con_sub_all_box">
                  <div className="con_tb_area">
                    <div className="con_menu_tb_wrap">
                      <table className="table_wrap m40">
                        <tbody>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Organization Name:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
                                placeholder="OrdererOrg0"
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">Type:</span>
                              <select
                                name=" site01"
                                id=""
                                style={{ width: 300 }}
                              >
                                <option value={1}>ORDERER</option>
                                <option value={2}>peer</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180"> Domain:</span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
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
        </fieldset>
        {/* 필드셋05  peer*/}
        <fieldset>
          <div className="pro_btn_area">
            <div className="btn_prev_arrow" name="previous-step">
              <i className="las la-angle-left" />
            </div>
            <div className="btn_next_arrow" name="next-step">
              <i className="las la-angle-right" />
            </div>
          </div>
          <div className="con_box_flex" id="peer">
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
                      <div className="table_wrap m40">
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
                              <td>peer</td>
                              <td>
                                <i className="las la-trash-alt" />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/*  컨텐츠  */}
              </div>
              {/* left_area channel name  e*/}
              {/* right_area  s*/}
              <div className="con_sub_wrap">
                <div className="con_sub_all_box">
                  <div className="con_tb_area">
                    <div className="con_menu_tb_wrap">
                      <table className="table_wrap m40">
                        <tbody>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Peer Name:
                              </span>
                              <select
                                name=" site01"
                                id=""
                                style={{ width: 300 }}
                              >
                                <option value={1} selected="">
                                  admiddn
                                </option>
                                <option value={2}>node1</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Physical Server Name:
                              </span>
                              <select
                                name=" site01"
                                id=""
                                style={{ width: 300 }}
                              >
                                <option value={1} selected="">
                                  admiddn
                                </option>
                                <option value={2}>node1</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Organization:
                              </span>
                              <select
                                name="site01"
                                id=""
                                style={{ width: 300 }}
                              >
                                <option value={1} selected="">
                                  ordererOrg1
                                </option>
                                <option value={2}>org1</option>
                              </select>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Server Port:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
                                placeholder={7505}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                Operations Port:
                              </span>
                              <input
                                type="text"
                                className="width_300 input_txt"
                                disabled=""
                                placeholder={15844}
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <span className="sw_tit width_180">
                                State Database:
                              </span>
                              <select
                                name="site02"
                                id=""
                                style={{ width: 300 }}
                              >
                                <option value={1} selected="">
                                  levelDB
                                </option>
                                <option value={2}>cloud DB</option>
                              </select>
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
        </fieldset>
        {/* 필드셋06 channel*/}
        <fieldset>
          <div className="pro_btn_area">
            <div className="btn_prev_arrow" name="previous-step">
              <i className="las la-angle-left" />
            </div>
            <div className="btn_next_arrow" name="next-step">
              <i className="las la-angle-right" />
            </div>
          </div>
          <div className="con_box_flex" id="channel">
            <div className="flex_wrap">
              <div className="con_search_area">
                {/* <span class="con_sub_tit">
                                  </span> */}
                <a href="#a" data-modal-id="popup3" tabIndex={-1}>
                  <span className="width_100 btn_blu addbtn">
                    <i className="la la-plus" />
                    Add
                  </span>
                </a>
                <div className="con_menu_search_wrap">
                  {/* 컨텐츠 */}
                  <div className="con_tb_area">
                    <div className="con_menu_tb_wrap">
                      <div className="table_wrap m40">
                        <table id="tableData" className="dt_tbl">
                          <colgroup>
                            <col style={{ width: "70%" }} />
                            <col style={{ width: "30%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Channel name</th>
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
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/*  컨텐츠  */}
              </div>
              {/* left_area channel name  e*/}
              {/* right_area  s*/}
              <div className="con_sub_wrap">
                <div className="con_sub_all_box">
                  <div className="con_tb_area">
                    <div className="con_menu_tb_wrap">
                      <div className="con_sub_tit_wrap">
                        <span className="width_100 btn_blu addbtn">
                          <i className="la la-plus" />
                          Add
                        </span>
                        <span className="con_sub_tit"> Orderer List</span>
                      </div>
                      <div className="table_wrap m40">
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
                      <div className="table_wrap m40">
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
        </fieldset>
        {/* 필드셋07 confirm*/}
        <fieldset>
          <div className="pro_btn_area">
            <div className="btn_prev_arrow" name="previous-step">
              <i className="las la-angle-left" />
            </div>
            <div className="btn_next_arrow_disable" name="next-step">
              <i className="las la-angle-right" />
            </div>
          </div>
          <div className="con_box_flex" id="confirm">
            <div className="flex_wrap">
              {/* right_area  s*/}
              <div
                className="con_sub_wrap width_100p"
                style={{ margin: "0 30px 0 30px" }}
              >
                <div className="con_sub_all_box">
                  <div className="con_tb_area scroll_box">
                    {/* py */}
                    <div className="con_menu_tb_wrap">
                      <div className="con_sub_tit_wrap">
                        <span className="con_sub_tit"> Physical Server</span>
                      </div>
                      <div className="table_wrap">
                        <table id="tableData" className="dt_tbl">
                          <colgroup>
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Server Name</th>
                              <th>User Name</th>
                              <th>Home Path</th>
                              <th>Password</th>
                              <th>Host IP</th>
                              <th>SFTP Port</th>
                              <th>Dockerd Port</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Admin</td>
                              <td>ubuntu</td>
                              <td>/home/ubuntu</td>
                              <td>null</td>
                              <td>127.0.0.1</td>
                              <td>null</td>
                              <td>null</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* org */}
                    <div className="con_menu_tb_wrap">
                      <div className="con_sub_tit_wrap">
                        <span className="con_sub_tit"> Organization</span>
                      </div>
                      <div className="table_wrap">
                        <table id="tableData" className="dt_tbl">
                          <colgroup>
                            <col style={{ width: "30%" }} />
                            <col style={{ width: "30%" }} />
                            <col style={{ width: "40%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Organization Name</th>
                              <th>type</th>
                              <th>Domain</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>OrdererOrg0</td>
                              <td>OrdererOrg</td>
                              <td>example.com</td>
                            </tr>
                            <tr>
                              <td>Org1</td>
                              <td>PeerOrg</td>
                              <td>dreamsecurity.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* ca */}
                    <div className="con_menu_tb_wrap">
                      <div className="con_sub_tit_wrap">
                        <span className="con_sub_tit"> ca</span>
                      </div>
                      <div className="table_wrap">
                        <table id="tableData" className="dt_tbl">
                          <colgroup>
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "35%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "20%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>CA Name</th>
                              <th>Physical Server Name</th>
                              <th>Organization</th>
                              <th>Server Port</th>
                              <th>Orperation Port</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>ca_orderer</td>
                              <td>admin</td>
                              <td>OrdererOrg0</td>
                              <td>7054</td>
                              <td>152402</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/*order */}
                    <div className="con_menu_tb_wrap">
                      <div className="con_sub_tit_wrap">
                        <span className="con_sub_tit"> orderers</span>
                      </div>
                      <div className="table_wrap">
                        <table id="tableData" className="dt_tbl">
                          <colgroup>
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "35%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "20%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Orderer Name</th>
                              <th>Physical Server Name</th>
                              <th>Organization</th>
                              <th>Server Port</th>
                              <th>Orperation Port</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>ca_orderer</td>
                              <td>admin</td>
                              <td>OrdererOrg0</td>
                              <td>7054</td>
                              <td>152402</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* peer */}
                    <div className="con_menu_tb_wrap">
                      <div className="con_sub_tit_wrap">
                        <span className="con_sub_tit">peer</span>
                      </div>
                      <div className="table_wrap">
                        <table id="tableData" className="dt_tbl">
                          <colgroup>
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "20%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Peer Name</th>
                              <th>Physical Server Name</th>
                              <th>Organization</th>
                              <th>Server Port</th>
                              <th>Orperation Port</th>
                              <th>State Databases</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>peer</td>
                              <td>node1</td>
                              <td>Org1</td>
                              <td>7051</td>
                              <td>152402</td>
                              <td>LevelDB</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* channel */}
                    <div className="con_menu_tb_wrap">
                      <div className="con_sub_tit_wrap">
                        <span className="con_sub_tit"> channel</span>
                      </div>
                      <div className="table_wrap">
                        <table id="tableData" className="dt_tbl">
                          <colgroup>
                            <col style={{ width: "10%" }} />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "20%" }} />
                            <col style={{ width: "15%" }} />
                            <col style={{ width: "15%" }} />
                          </colgroup>
                          <thead>
                            <tr>
                              <th>Channel Name</th>
                              <th>Orderer List</th>
                              <th>Core_orderer</th>
                              <th>Peer List</th>
                              <th>Anchor Peer</th>
                              <th>Core Peer</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>channel-did</td>
                              <td>
                                orderer0.ordererOrg1.dreamsecurity.com
                                <br />
                                orderer1.ordererOrg1.dreamsecurity.com
                                <br />
                                orderer2.ordererOrg1.dreamsecurity.com
                              </td>
                              <td>orderer0.ordererOrg1.dreamsecurity.com</td>
                              <td>
                                orderer0.ordererOrg1.dreamsecurity.com
                                <br />
                                orderer1.ordererOrg1.dreamsecurity.com
                                <br />
                                orderer2.ordererOrg1.dreamsecurity.com
                              </td>
                              <td>peer1.org1.dreamsecurity.com</td>
                              <td>peer1.org1.dreamsecurity.com</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 스피너 */}
          <div className="sk-chase" style={{ display: "none" }}>
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
            <div className="sk-chase-dot" />
          </div>
          {/* 스피너  */}
          <div className="btn_area">
            <div className="pop_btn_one width_100" id="spinner">
              <a href="#a">Build</a>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};
