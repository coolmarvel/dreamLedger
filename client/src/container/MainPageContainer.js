import { HeaderPage } from "../pages/HeaderPage";
import { Popup1 } from "../pages/Popup1";
import { Toast1 } from "../pages/Toast1";
import { Toast2 } from "../pages/Toast2";
import { Popup2 } from "../pages/Popup2";
import { Popup3 } from "../pages/Popup3";
import { Popup4 } from "../pages/Popup4";
import { changeField } from "../modules/auth";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "../pages/MainPage";

const MainPageContainer = (props) => {
  const { status } = useSelector(({ auth }) => ({
    status: auth.openSideBar.status,
  }));
  const dispatch = useDispatch();

  const toggleSideBar = (e) => {
    dispatch(
      changeField({
        form: "openSideBar",
        key: "status",
        value: !status,
      })
    );
  };

  return (
    <div>
      <MainPage openSideBarStatus={status} toggleSideBar={toggleSideBar} />
    </div>
  );
};

export default MainPageContainer;
