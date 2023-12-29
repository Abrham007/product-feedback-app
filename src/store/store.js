import { configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUser/currentUserSlice";
import productRequestsReducer from "../features/productRequests/productRequestsSlice";

export default configureStore({
  reducer: {
    currentUser: currentUserReducer,
    productRequests: productRequestsReducer,
  },
});
