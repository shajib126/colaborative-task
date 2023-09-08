import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskNav from "./TaskNav";

const CreateTeam = () => {
  const [users, setUsers] = useState(null);
  const [userInput, setUserInput] = useState("");
  const [findUser, setFindUser] = useState(null);
  const teamData = JSON.parse(localStorage.getItem("team"));

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("users"));
    setUsers(userData);
  }, []);
  console.log(users);
  useEffect(() => {
    const user = users?.find((user) => user?.name.includes(userInput));
    setFindUser(user);
  }, [userInput]);

  const userSelectHandle = (user) => {
    if (!teamData) {
      localStorage.setItem(
        "team",
        JSON.stringify([
          {
            name: user.name,
            bio: user.bio,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "team",
        JSON.stringify([
          ...teamData,
          {
            name: user.name,
            bio: user.bio,
          },
        ])
      );
    }
    alert(`${user.name} added to the team`);
  };
  return (
    <div>
      <Navbar />

      <div className="w-[80%] mx-auto mt-2 flex">
        <TaskNav />
        <div className="p-2 w-[80%] mx-auto">
          <h1 className="text-2xl font-bold border-b-2">Create Team</h1>
          <br />
          <input
            className="text-black w-[400px] p-2 mb-4"
            onChange={(e) => setUserInput(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <div>
            {findUser && (
              <div
                
                className="flex gap-1"
              >
                <h1>
                    <span>name: </span>{findUser.name}
                    <br/>
                    <span>bio: </span>{findUser.bio}
                </h1>
                <button className=" bg-gray-500 px-2 rounded-md" onClick={() => userSelectHandle(findUser)}>Invite</button>
              </div>
            )}
            <div className="flex gap-2 mt-4">
            {users?.map((user, i) => (
              <div className="cursor-pointer border-2 p-2" key={i} >
                <h1><span>name: </span>{user.name}</h1>
                <p><span>bio: </span>{user.bio}</p>
                <button className="w-full bg-gray-500 mt-4" onClick={()=>userSelectHandle(user)}>Invite</button>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
