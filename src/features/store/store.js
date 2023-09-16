import { configureStore } from '@reduxjs/toolkit'
import { githubApi } from "../Api/githubApi"
import  userSlice  from "../userSlice/userSlice"
import { setupListeners } from "@reduxjs/toolkit/dist/query"

export const store = configureStore({
  reducer: {
    [githubApi.reducerPath]: githubApi.reducer,
    user: userSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(githubApi.middleware),
})

setupListeners(store.dispatch)