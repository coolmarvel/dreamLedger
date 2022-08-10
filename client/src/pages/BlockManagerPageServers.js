import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {blockManagerServers,  initializeForm2} from "../redux/BlockManagerReducer.js";

export const BlockManagerPageServers = () => {
    const [error, setError] = useState(null);
    const dispatch = useDispatch();
    const { returnValue,returnError,data} = useSelector(({ blockManager }) => ({
        returnValue: blockManager.blockManager.servers.returnValue,
        returnError: blockManager.blockManager.servers.error,
        data:blockManager.blockManager.servers.data
    }));

    const [serverIndex,setServerIndex] = useState(undefined)


    useEffect(() => {
        if (returnError) {
            console.log('오류 발생');

            return;
        }

        if (returnValue) {
            console.log(' 성공');

        }

    }, [returnValue, returnError]);

    useEffect(() => {
        dispatch(initializeForm2({
            form:'blockManager',
            sub:'servers'
        }
        ));

    }, []);
    useEffect(() => {

        dispatch(blockManagerServers());
    }, []);
    const onClickList = (e) => {
        const { id} = e.target;

        setServerIndex(Number(id));

    }
    const list = data.map(
        (info,index) => (

            <tr >
                <td id = {index} onClick = {onClickList}>{info.name}</td>
                <td>
                    <div className="state_default" id = {index} onClick = {onClickList}> default</div>
                </td>
            </tr>
        )
    );
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
                                                { list.length >0 && list }
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  컨텐츠  */}
                        </div>
                        { serverIndex !=undefined &&
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
                                  Server Name:
                                </span>
                                                        <input
                                                            type="text"
                                                            className="width_500 input_txt"
                                                            disabled=""
                                                            placeholder="admin"
                                                            value={data[serverIndex].name}
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
                                                            className="width_500 input_txt"
                                                            disabled=""
                                                            placeholder="ubuntu"
                                                            value={data[serverIndex].userName}
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
                                                            value={data[serverIndex].homePath}
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
                                                            className="width_500 input_txt"
                                                            disabled=""
                                                            placeholder="null"
                                                            value={data[serverIndex].passwd}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                <span className="sw_tit width_130">
                                  Host IP:
                                </span>
                                                        <input
                                                            type="text"
                                                            className="width_500 input_txt"
                                                            disabled=""
                                                            placeholder="127.0.0.01"

                                                            value={ data[serverIndex].hostIp == null? 'null' : data[serverIndex].hostIp}
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
                                                            className="width_500 input_txt"
                                                            disabled=""
                                                            placeholder="null"

                                                            value={ data[serverIndex].sftpPort == null? 'null' : data[serverIndex].sftpPort}
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

                                                            value={ data[serverIndex].dockerPort == null? 'null' : data[serverIndex].dockerPort}
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
                                                            value={ data[serverIndex].uid == null? 'null' : data[serverIndex].uid}
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
                                                            value={ data[serverIndex].gid == null? 'null' : data[serverIndex].gid}
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
                                    </div>`
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
}
