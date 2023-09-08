import React from 'react'
import { Link } from 'react-router-dom'

const TaskNav = () => {
  return (
    <nav className='flex flex-col gap-2 border-r-[1px] border-gray-600 w-[10%] h-[100vh]'>
            <Link to='/create-team' className='text-md text-white'>Create Team</Link>
            <Link to='/create' className='text-md text-white'>Create Task</Link>
            <Link to='/all-task' className='text-1xl text-white'>All Task</Link>
            <Link to='/all-user' className='text-1xl text-white'>Track Tasks</Link>
    </nav>
  )
}

export default TaskNav