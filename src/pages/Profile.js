import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const [myTasks,setMyTasks] = useState(null)
  const [progress,setProgress] = useState("")

  
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    setProfile(profile);
    console.log(profile);
  }, []);

  useEffect(()=>{
      const myTaskData = JSON.parse(localStorage.getItem('tasks'))
      const findMyTask = myTaskData.filter((task)=>task.team.includes(profile?.name))
      setMyTasks(findMyTask);
      console.log(myTasks);
  },[])
  const testClick = (task) => {
    console.log('task', task);
    const mytask = JSON.parse(localStorage.getItem('tasks'))
    const findTask = mytask?.find((t)=>t?.name.includes(t.name))
    findTask.progress = progress
    localStorage.setItem('tasks',JSON.stringify(mytask))
    console.log('mytask',mytask);
  };
  return (
    <div className="profile">
      <Link className="p-2 text-xl border-2 " to='/'>Back</Link>
      <div className="max-w-lg mx-auto my-10 bg-white rounded-lg shadow-md p-5">
        <img
          className="w-32 h-32 rounded-full mx-auto"
          src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVtYW58ZW58MHx8MHx8fDA%3D&w=1000&q=80"
          alt="Profile picture"
        />
        <h2 className="text-center text-2xl text-gray-600 font-semibold mt-3">{profile?.name}</h2>
        <p className="text-center text-gray-600 mt-1">{profile?.bio}</p>
        <div className="flex justify-center mt-5">
          <p href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            Total Task: {profile?.task?.length}
          </p>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            LinkedIn
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-700 mx-3">
            GitHub
          </a>
        </div>
        <div className="mt-5">
          <h3 className="text-xl font-semibold">Bio</h3>
          <p className="text-gray-600 mt-2">
            John is a software engineer with over 10 years of experience in
            developing web and mobile applications. He is skilled in JavaScript,
            React, and Node.js.
          </p>
        </div>
      </div>
      <div className="tasks">
        <h1>All Task</h1>
        {!myTasks ? <h1>Loading...</h1>:
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                #
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Invite By
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Description
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Due Date
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Priority
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Progress
              </th>
              <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
               Action
              </th>
            </tr>
          </thead>
          <tbody>
            {myTasks?.map((task,i)=>(
                 <tr key={i} className="bg-gray-100 border-b">
                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{i+1}</td>
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
                  
                    <select value={progress} onChange={(e)=>setProgress(e.target.value)}>
                        
                        <option value="progress" key="">In Progress</option>
                        <option value="complete" key="">Complete</option>
                        
                    </select>
                   
                 </td>

                 <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                   <button onClick={()=>testClick(task)}>Done</button>
                 </td>
               </tr>
            ))}
           
            
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
  }
      </div>
    </div>
  );
};

export default Profile;
