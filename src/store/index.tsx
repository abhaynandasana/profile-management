import { configureStore } from "@reduxjs/toolkit";

import { searchApi } from 'store/search/search.slice';
import { profileApi } from 'store/profile/profile.slice'
import profileHistorySlice from 'store/profileHistory/profileHistory.slice'
import filterSlice from "./filter/filter.slice";

const store = configureStore({
    reducer: {
        [searchApi.reducerPath]: searchApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        profileHistorySlice,
        filterSlice
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false })
            .concat(searchApi.middleware)
            .concat(profileApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>

export default store;