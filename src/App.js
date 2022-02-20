import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import DataContainer from "./components/dashboard/DataContainer";
import Header from "./components/dashboard/Header";
import CardModal from "./components/dashboard/CardModal";
import { fetchData, putData } from "./store/fetch-actions";
import { authActions } from "./store/auth";
import AuthPhone from "./components/login/AuthPhone";

let firstTime = true;

function App() {
  let token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [addEditSwitch, setAddEditSwitch] = useState("");
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const data = useSelector((state) => state.data.items);
  const dataChanged = useSelector((state) => state.data.itemsChange);
  if (token) {
    dispatch(authActions.login(token));
  }

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);
  useEffect(() => {
    if (firstTime) {
      firstTime = false;
      return;
    }
    if (dataChanged) {
      dispatch(putData(data));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);
  return (
    <div className="App">
      <Header setModalShow={setModalShow} setAddEditSwitch={setAddEditSwitch} />
      <CardModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        addEditSwitch={addEditSwitch}
      />
      {!isAuthenticated && <AuthPhone />}
      {isAuthenticated && data && (
        <DataContainer
          setModalShow={setModalShow}
          setAddEditSwitch={setAddEditSwitch}
        />
      )}
      ;
    </div>
  );
}

export default App;
