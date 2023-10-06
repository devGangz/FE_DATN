import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./user/userSlide";
import { appStoreReducer } from "./app/appSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    appStore: appStoreReducer,
  },
  // Added this mdware to fix error "A none-serializable value was detected..."
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
