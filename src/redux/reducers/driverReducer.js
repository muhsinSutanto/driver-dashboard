import { ACTION } from "../store/types";

const initialState = {
   loading: false,
   pagination: 1,
   data: [],
};

export default function (state = initialState, action) {
   switch (action.type) {
      case ACTION.LOADING_GET_DRIVER_DATA:
         return {
            ...state,
            loading: true,
         };

      case ACTION.GET_DRIVER_DATA:
         return {
            ...state,
            data: action.payload,
            pagination: 1,
         };

      default:
         return state;
   }
}
