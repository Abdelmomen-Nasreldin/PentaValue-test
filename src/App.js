import "./App.css";
import Auth from "./components/login/Auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { dataActions } from "./store/data";
import DataContainer from "./components/dashboard/DataContainer";
import Header from "./components/dashboard/Header";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const data = useSelector((state) => state.data);

  const dispatch = useDispatch();
  useEffect(() => {
    axios
      .get("https://pentavalue-2a41c-default-rtdb.firebaseio.com/show.json")
      .then((response) => {
        const convertedData = [];
        for (const key in response.data) {
          let newFormat = {
            image: response.data[key].image,
            video: response.data[key].video,
            from: response.data[key].from_time,
            to: response.data[key].to_time,
          };
          convertedData.push(newFormat);
        }
        dispatch(dataActions.setData(convertedData));
      })
      .catch((error) => console.log(error))
      .finally(() => console.log("finally"));
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && data && <DataContainer />};
    </div>
  );
}

export default App;
