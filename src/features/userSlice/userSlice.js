
import { createSlice } from "@reduxjs/toolkit";

const key = 'favorites'
const data = localStorage.getItem(key)

const initialState = {
  user:[],
  favorites: data ? JSON.parse(data) : [],
  
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    getUser: (state, actions) => {
    state.user = actions.payload
    },
    getFavoritesUser: (state, actions) => { 
      state.favorites.push(actions.payload);
      localStorage.setItem(key, JSON.stringify(state.favorites))
      
    },
    removeFavoritesUser: (state, actions) => { 
      state.favorites = state.favorites.filter(user => {
      if(user.id !== actions.payload.id) return user
      })
      localStorage.setItem(key, JSON.stringify(state.favorites))
    }
  }
})

export const { getUser, getFavoritesUser, removeFavoritesUser } =  userSlice.actions
export default userSlice.reducer