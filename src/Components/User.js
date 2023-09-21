import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getFavoritesUser } from "../features/userSlice/userSlice";
import { useEffect, useState } from "react";

function User({user}) {
  
  const favorites = useSelector((state) => state.user.favorites)
  const dispatch = useDispatch()
  const [ choose, setChoose ] = useState(false)

  useEffect( ()=>{
    favorites.forEach(element => {
      if(element.id === user.id){
        setChoose(true)
      }
    });
  },[choose, favorites, user])

  return (
  <>    
    {user && 
    <section className="User flex flex-col items-center mb-4 ">
    <div className="relative max-w-full">
      <div onClick={() =>dispatch(getFavoritesUser(user))} className={`" right-[-30px] absolute top-12 "${choose && " text-red-600"}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 ">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </div>
      <div className="w-80 h-80 bg-cover bg-no-repeat rounded-md mt-11" style={{ backgroundImage: `url(${user.avatar_url})` }}></div>
    </div>
    <h3 className="py-5"><span className="font-bold">login</span>: {user.login}</h3>
    <Link onClick={()=>(user.repos_url)} to='repos' className="rounded-md border border-red-950 p-3 bg-emerald-600 hover:bg-emerald-700 transition-colors">see all repositories</Link>
    <a href={user.html_url} className="py-5 hover:underline text-sky-600"  target="_blank" rel="noreferrer">See github profile</a>
    </section>}
  </>
    
  );
}

export default User;