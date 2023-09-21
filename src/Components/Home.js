import {useState, useEffect} from 'react';
import { useGetUserQuery } from "../features/Api/githubApi";
import useDebounce from "../hooks/debounce";
import { useDispatch } from "react-redux";
import { getUser } from "../features/userSlice/userSlice";
import { Link } from "react-router-dom";

function Home() {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const [ dropDown, setDropDown] = useState(false)
  const debounced = useDebounce(value,500)
  const { data, isLoading, isError} = useGetUserQuery(debounced, {
    skip: debounced.length < 1,
    // пока true данные не принимаем
    refetchOnMountOrArgChange: true
  })

  useEffect(() => {
    if(debounced.length === 0) setDropDown(false)
    else setDropDown(true)
  },[debounced])
// запрос с задержкой

  return (
    <section className="Home flex items-center justify-center mt-4">
      <div className="input">
        {isError && <p className=" text-center text-red-500"> somthing went wrong</p>}
        <input placeholder="search user..." className="border border-black rounded-md p-2" value={value} onChange={e =>setValue(e.target.value) }/>
        {dropDown && <ul className='shadow-md h-56 overflow-y-scroll'>
          {isLoading && <p className="text-center">Loading..</p>}
          {data?.map(item => (
            <Link  key={item.id} to={`${item.login}`} onClick={()=>dispatch(getUser(item))} 
              className="text-center cursor-pointer hover:bg-slate-600 rounded-md hover:text-white transition-colors block">
              {item.login}
            </Link> 
          ))}
        </ul> }
      </div>
    </section>
  );
}
export default Home;