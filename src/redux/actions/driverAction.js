import axios from "axios";
import { BASE_URL } from "../../const/config";
import { ENDPOINTS } from "../../const/endpoints";
import { pagination } from "../../helpers/utils";
import { ACTION } from "../store/types";

export const getData = (page) => (dispatch) => {
   dispatch({
      type: ACTION.LOADING_GET_DRIVER_DATA,
      payload: true,
   });
   axios
      .get(`${BASE_URL}/${ENDPOINTS.DRIVER_LIST}results=30`)
      .then((res) => {
         const data = res.data;
         console.log(data);
         dispatch({
            type: ACTION.GET_DRIVER_DATA,
            payload: {
               rawData: data.results,
               trimData: pagination(data.results, page, 5),
            },
         });
      })
      .catch((err) => console.log(err));
};

export const paginate = (page, cond, rawData) => (dispatch) => {
   if (cond === "prev") {
      dispatch({
         type: ACTION.PAGINATE_PREV,
         payload: {
            rawData: rawData,
            trimData: pagination(rawData, page, 5),
         },
      });
   } else {
      dispatch({
         type: ACTION.PAGINATE_NEXT,
         payload: {
            rawData: rawData,
            trimData: pagination(rawData, page, 5),
         },
      });
   }
};
