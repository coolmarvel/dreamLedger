import { changeField } from "../redux/MainReducer.js";
import { useDispatch, useSelector } from "react-redux";
import MainPage from "../pages/MainPage";

const MainPageContainer = (props) => {
  const { status } = useSelector(({ main }) => ({
    status: main.openSideBar.status,
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
