import React from "react";
import DaumPostcode from "react-daum-postcode";
import Button from "./Button";
import { grey } from "@material-ui/core/colors";
import { useDispatch } from "react-redux";
import { changeField } from "../redux/BlockManagerReducer.js";

const PopupPostCode = (props) => {
  // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용

  const dispatch = useDispatch();
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(data);
    console.log(fullAddress);
    console.log(data.zonecode);
    if (fullAddress) {
      dispatch(
        changeField({
          form: "temparary",
          key: "zipcode",
          value: data.zonecode,
        })
      );
      dispatch(
        changeField({
          form: "temparary",
          key: "address",
          value: fullAddress,
        })
      );
    }

    props.onClose();
  };

  const postCodeStyle = {
    display: "block",
    position: "absolute",
    top: "18%",
    width: "90%",
    height: "80%",
    padding: "2px",
    backgroundColor: "grey",
    zIndex: 5000,
  };

  return (
    <div>
      <Button
        onClick={() => {
          props.onClose();
        }}
      >
        닫기
      </Button>
      <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
    </div>
  );
};

export default PopupPostCode;
