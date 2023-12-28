import { configureStore } from "@reduxjs/toolkit";

import productRequestsReducer from "../features/productRequests/productRequestsSlice";

export default configureStore({
  reducer: {
    productRequests: productRequestsReducer,
  },
});
