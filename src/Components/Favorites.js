import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { removeFavoritesUser } from "../features/userSlice/userSlice";

function Favorites() {
  const dispatch = useDispatch()
  const favorites = useSelector((state) => state.user.favorites)

  return (
    <section className="Favorites">
      <ul className="flex items-center flex-col space-y-4 mt-9">
        {favorites?.map(users => (
          <li className=" grid grid-cols-3 justify-items-center	items-center gap-4 border rounded-md shadow-sm px-4 py-3" key={users.id}>
            <span className="h-10 w-10  bg-cover bg-no-repeat block" style={{ backgroundImage: `url(${users.avatar_url})` }}></span>
            <h3>Login: {users.login}</h3>
            <div className="cursor-pointer" onClick={()=>dispatch(removeFavoritesUser(users))}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <div className="col-span-3">
                <a href={users.html_url} className="py-5 hover:underline"  target="_blank" rel="noreferrer">see github</a>
              </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Favorites;