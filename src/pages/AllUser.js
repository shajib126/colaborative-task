import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import TaskNav from "./TaskNav";

const AllUser = () => {
  const [myTeam, setMyTeam] = useState(null);
  const [tasks, setTasks] = useState(null);
  const [sort,setSort] = useState("")

  useEffect(() => {
    const myTeamData = JSON.parse(localStorage.getItem("team"));
    setMyTeam(myTeamData);
  }, []);
  useEffect(() => {
    const taskData = JSON.parse(localStorage.getItem("tasks"));
    if(!sort){
        setTasks(taskData)
    }else{
        const filterData = taskData?.filter((task)=>task.progress?.includes(sort))
        setTasks(filterData)
    }  
  
    
    
   
  }, [sort]);
  return (
    <div>
      <Navbar />
      <div className="w-[80%] mx-auto mt-4 flex">
        <TaskNav />
        <div className="p-2">
          <h1 className="border-b-2">My Team</h1>
          {!myTeam ? (
            <h1>Loading..</h1>
          ) : (
            <div>
              <div className="flex gap-1">
                {myTeam?.map((member, i) => (
                  <div className="border-2 border-gray-500 mt-4 p-2">
                    <span>Name: </span>
                    <h1>{member.name}</h1>
                    <span>Bio</span>
                    <h1>{member.bio}</h1>
                  </div>
                ))}
              </div>
              {!tasks ? (
                <h1>Loading...</h1>
              ) : (
                <div>
                  <h1 className="border-b-2 mt-4">All Tasks</h1>
                  <h1 className="ml-6 mt-4">Sort By Progress</h1>
                  <select className="bg-gray-500 ml-6" value={sort} onChange={(e)=>setSort(e.target.value)}>
                    <option value="progress" key="">Progress</option>
                    <option value="complete" key="">Complete</option>
                  </select>
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
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
                              Name
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                            >
                              Creator
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
                              Progress
                            </th>
                           
                          </tr>
                        </thead>
                        <tbody>
                          {tasks?.map((task, i) => (
                            <tr key={i} className="bg-gray-100 border-b">
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {i + 1}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {task.name}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {task.creator}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {task.description}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {task.dueDate}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                {task.priority}
                              </td>
                              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                               {task.progress}
                              </td>

                              
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUser;
