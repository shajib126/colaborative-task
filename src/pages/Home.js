import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  const [profile,setProfile] = useState(null)
  useEffect(()=>{
    const profileData = JSON.parse(localStorage.getItem('profile'))
    setProfile(profileData)
  })
  return (
    <div className="home">
        <Navbar/>
      <div className="w-[80%] mx-auto text-center mt-[4rem]">
        <h1 className="text-[4vw] font-bold">Task Mananger </h1>
        <h3>Manage your Task and colaborate with your team</h3>
        <h4>Create Your team & colaborate your task</h4>
        <br/>
        {profile ? <Link className="border border-2 p-2 hover:bg-black" to='/task-manage'>Get Started</Link> : <Link to='/sign-in'>Sign in</Link>}
        
      </div>
    </div>
  );
};

export default Home;
