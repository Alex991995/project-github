
import { createSlice } from "@reduxjs/toolkit";

const user = localStorage.getItem('user');
const favorites = localStorage.getItem('favorites');

const initialState = {
  user: user ? JSON.parse(user) : [],
  favorites: favorites ? JSON.parse(favorites) : [],
  
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    getUser: (state, actions) => {
    state.user = actions.payload
    localStorage.setItem('user', JSON.stringify(state.user))
    },
    getFavoritesUser: (state, {payload}) => { 
      const isExist = state.favorites.find(item => item.id === payload.id)
      if(!isExist)state.favorites.push(payload)
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
      
    },
    removeFavoritesUser: (state, actions) => { 
      state.favorites = state.favorites.filter(user => {
      if(user.id !== actions.payload.id) return user
      })
      localStorage.setItem('favorites', JSON.stringify(state.favorites))
    }
  }
})

export const { getUser, getFavoritesUser, removeFavoritesUser } =  userSlice.actions
export default userSlice.reducer