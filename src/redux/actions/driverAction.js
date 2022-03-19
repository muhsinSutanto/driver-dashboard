import axios from "axios";
import { BASE_URL } from "../../const/config";
import { ENDPOINTS } from "../../const/endpoints";
import { ACTION } from "../store/types";

export const getData = (page) => (dispatch) => {
   dispatch({
      type: ACTION.LOADING_GET_DRIVER_DATA,
      payload: true,
   });
   axios
      .get(`${BASE_URL}/${ENDPOINTS.DRIVER_LIST}page=${page}&results=5`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
};
