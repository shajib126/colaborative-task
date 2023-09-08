import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [profile, setProfile] = useState("");
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("profile"));
    setProfile(profileData);
  }, []);
  return (
    <nav className="flex justify-between p-2 w-[90%] mx-auto">
      <Link className="text-2xl font-bold" to="/">IBOS-Task</Link>
      <div className="profile-nav">
        {profile ? (
          <button className="px-2 transition-all transition-transform" onClick={() => setShowProfile(!showProfile)}>
            {profile?.name}
          </button>
        ) : (
          <Link  to="/sign-in">Sign in</Link>
        )}
        {showProfile && <Link to="/profile">Profile --> </Link>}
      </div>
    </nav>
  );
};

export default Navbar;
