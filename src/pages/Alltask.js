import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskNav from "./TaskNav";

const Alltask = () => {
  const [tasks, setTasks] = useState(null);
  const [team, setTeam] = useState(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const tasksData = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasksData);
  }, []);
  useEffect(() => {
    const teamData = JSON.parse(localStorage.getItem("team"));
    setTeam(teamData);
  }, []);

  const handleAssign = (t,member)=>{
    
    const task = JSON.parse(localStorage.getItem('tasks'))
    const findTask = task?.find((tas)=>tas?.name.includes(t.name))
    console.log(task);
    findTask.team = member.name
    localStorage.setItem('tasks',JSON.stringify(task)) 
    alert(`${member.name} added to this ${t.name} task`)
    //find user
  }
  return (
    <div>
        <Navbar/>

      
      <div className="flex w-[90%] mx-auto">
        
         <TaskNav/>
         <div className="w-[88%] p-1">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                #
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                creator
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Name
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Description
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Due Date
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Priority
              </th>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Assign To
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks?.map((t, i) => (
              <tr key={i} className="bg-gray-100 border-b">
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {i + 1}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {t.creator}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {t.name}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {t.description}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {t.dueDate}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  {t.priority}
                </td>
                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                  <button
                    data-tooltip-target="tooltip-default"
                    className="border-b-2 border-gray-500 "
                    onClick={() => setShow(!show)}
                  >
                    Choose Member{" "}
                  </button>
                 
                  {show &&
                    team?.map((member, i) => (
                      <button onClick={()=>handleAssign(t,member)} key={i} className="flex flex-col z-10">
                        {member.name}
                      </button>
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </div>
  );
};

export default Alltask;
