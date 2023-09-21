import React from 'react';
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

function Repositories() {
  const user = useSelector((state) => state.user.user)
  const [repos, setRepos] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect( ()=> {
    fetch(user.repos_url)
      .then(res => res.json())
      .then(data =>setRepos(data))
  },[user])

  useEffect( ()=>{
    if(repos)setLoading(false)
  },[repos])
  return (
    <>
    {loading ? <p className="absolute top-2/4 right-2/4">loading...</p> :
    <section>
        <ul className="grid sm:grid-cols-2 gap-4 justify-center m-4 md:grid-cols-3">
        {repos?.map(item => (
          <li key={item.id} className="flex flex-col p-4 border-zinc-500 border  hover:shadow-md "> 
          <span className="italic">Name: {item.name}</span>
          <span className="font-bold">{"language: "+ item.language ?? "No language "}</span>
          <span className="font-['Helvetica']">{item.description && "Description: " + item.description}</span>
          <span className="underline font-arial hover:no-underline "><a href={item.html_url} target="_blank" rel="noreferrer">Link</a></span>
          </li>
        ))}
        </ul>
    </section>}
    </>
  );
}

export default Repositories;