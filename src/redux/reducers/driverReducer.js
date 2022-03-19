import { pagination } from "../../helpers/utils";
import { ACTION } from "../store/types";

const initialState = {
   loading: false,
   page: 1,
   rawData: [],
   data: [],
};

export default function (state = initialState, action) {
   switch (action.type) {
      case ACTION.LOADING_GET_DRIVER_DATA:
         return {
            ...state,
            loading: action.payload,
         };

      case ACTION.GET_DRIVER_DATA:
         return {
            ...state,
            rawData: action.payload.rawData,
            data: action.payload.trimData.data,
            totalPage: action.payload.trimData.totalPage,
            page: action.payload.trimData.page,
            loading: false,
         };
      case ACTION.PAGINATE_NEXT:
         return {
            ...state,
            rawData: action.payload.rawData,
            data: action.payload.trimData.data,
            totalPage: action.payload.trimData.totalPage,
            page: action.payload.trimData.page,
            loading: false,
         };
      case ACTION.PAGINATE_PREV:
         return {
            ...state,
            rawData: action.payload.rawData,
            data: action.payload.trimData.data,
            totalPage: action.payload.trimData.totalPage,
            page: action.payload.trimData.page,
            loading: false,
         };

      default:
         return state;
   }
}
