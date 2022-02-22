import axios from "axios";
import { dataActions } from "./data";
import { loadingActions } from "./loading";

///////////////////////////////////////////////////
// Fetch the Data from and to firebase Database //
//////////////////////////////////////////////////
export const fetchData = () => {
  return (dispatch) => {
    dispatch(
      loadingActions.showNotification({
        loading: true,
      })
    );
    axios
      .get("https://pentavalue-2a41c-default-rtdb.firebaseio.com/show.json")
      .then((response) => {
        const convertedData = [];
        for (const key in response.data) {
          let newFormat = {
            id: parseInt(key),
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
      .finally(() =>
        dispatch(
          loadingActions.showNotification({
            loading: false,
          })
        )
      );
  };
};

export const putData = (lastUpdate) => {
  return (dispatch) => {
    let convertedData = [];
    for (const key in lastUpdate) {
      let newFormat = {
        // id: parseInt(key),
        image: lastUpdate[key].image,
        video: lastUpdate[key].video,
        from_time: lastUpdate[key].from,
        to_time: lastUpdate[key].to,
      };
      convertedData.push(newFormat);
    }
    axios
      .put(
        "https://pentavalue-2a41c-default-rtdb.firebaseio.com/show.json",
        convertedData
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
