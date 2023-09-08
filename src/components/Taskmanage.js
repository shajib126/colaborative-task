import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import TaskNav from "../pages/TaskNav";

const Taskmanage = () => {
  const [createdTask,setCreatedTask] = useState(null)
  const [completeTask,setCompleteTask] = useState(null)
  const [progressTask,setProgressTask] = useState(null)
  const [team,setTeam] = useState(null)
  const [users,setUsers] = useState(null)

  useEffect(()=>{
    const tasks = JSON.parse(localStorage.getItem('tasks'))
    setCreatedTask(tasks)
    const completeTaskData = tasks?.filter((task)=>task.progress?.includes('complete'))
    setCompleteTask(completeTaskData)
    const progressTaskData = tasks?.filter((task)=>task.progress?.includes('progress'))
    setProgressTask(progressTaskData)
    const teamData = JSON.parse(localStorage.getItem('team'))
    setTeam(teamData)
    const usersData = JSON.parse(localStorage.getItem('users'))
    setUsers(usersData)
  },[])
  return (
    <div className="task-manage">
      <Navbar />
      <div className="w-[80%] mx-auto mt-2 flex">
        <TaskNav />
        <div className="p-2 flex flex-wrap gap-4 mt-6 ml-4">
          <div className="border-2 p-2 w-[200px] h-[200px] rounded-md">
            <h1>Completed tasks</h1>
            {!completeTask ? <h1>Loading...</h1>: <h1>{completeTask.length }</h1> }
          </div>
          <div className="border-2 p-2 w-[200px] h-[200px] rounded-md">
            <h1>In Progress Task</h1>
            {!progressTask ? <h1>Loading...</h1>: <h1>{progressTask.length}</h1> }
          </div>
          <div className="border-2 p-2 w-[200px] h-[200px] rounded-md">
              <h1>Created Task</h1>
              {!createdTask ? <h1>Loading...</h1>: <h1>{createdTask.length}</h1> }
          </div>
          <div className="border-2 p-2 w-[200px] h-[200px] rounded-md">
            <h1>My Team</h1>
            {!team ? <h1>Loading...</h1>: <h1>{team.length}</h1> }
          </div>
          <div className="border-2 p-2 w-[200px] h-[200px] rounded-md">
            <h1>Users</h1>
            {!users ? <h1>Loading...</h1>: <h1>{users.length}</h1> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taskmanage;
