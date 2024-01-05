import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentUserReducer from "../features/currentUser/currentUserSlice";
import productRequestsReducer from "../features/productRequests/productRequestsSlice";

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  productRequests: productRequestsReducer,
});

export function setupStore(preloadedState) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}
