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

export const searchDriver = (input, page, rawData) => (dispatch) => {
   if (!!input.length) {
      const data = rawData.filter((item) => {
         return item.name.first.toUpperCase() === input.toUpperCase();
      });

      dispatch({
         type: ACTION.SEARCH_DRIVER,
         payload: {
            rawData: rawData,
            trimData: pagination(data, 1, 5),
         },
      });
   } else {
      dispatch({
         type: ACTION.RESET_DATA,
         payload: {
            rawData: rawData,
            trimData: pagination(rawData, page, 5),
         },
      });
   }
};
