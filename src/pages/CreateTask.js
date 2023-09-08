import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskNav from "./TaskNav";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(null);
  const [priority, setPriority] = useState("");
  const [profile, setProfile] = useState(null);
  const tasksData =JSON.parse(localStorage.getItem('tasks'))
  useEffect(() => {
    const profileData = JSON.parse(localStorage.getItem("profile"));
    setProfile(profileData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!tasksData){
        localStorage.setItem('tasks',JSON.stringify([
            {
                creator:profile.name,
                name:title,
                description,
                dueDate:date,
                priority  
            }
        ]))
    }else{
        localStorage.setItem('tasks',JSON.stringify([
            ...tasksData,
            {
                creator:profile.name,
                name:title,
                description,
                dueDate:date,
                priority  
            }
        ]))
    }
    
  };
  return (
    <div>
      <Navbar />
      <div className="flex w-[80%] mx-auto mt-2">
        <TaskNav />
        <div className="p-2 w-[50%]">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-[80%] mx-auto"
          >
            <label>Task title</label>
            <input
              className="p-2 rounded-sm text-black"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="title"
            />
            <label>Task description</label>
            <textarea
              onChange={(e) => setDescription(e.target.value)}
              className="text-black"
              placeholder="description"
              cols="30"
              rows="10"
            ></textarea>
            <label>Due Date</label>
            <div className="flex gap-2">
              <input
                onChange={(e) => setDate(e.target.value)}
                type="date"
                className="text-gray-500"
              />
              <select
                onChange={(e) => setPriority(e.target.value)}
                className="bg-gray-500 p-2"
              >
                <option value="" key="">
                  Priority Level
                </option>
                <option value="high" key="">
                  High
                </option>
                <option value="medium" key="">
                  Medium
                </option>
                <option value="low" key="">
                  Low
                </option>
              </select>
            </div>
            <button
              type="submit"
              className="border-2 p-2 font-bold w-[200px] mx-auto mt-4 hover:bg-green-500 hover:text-gray-700 hover:border-none transition-all"
            >
              Create Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
