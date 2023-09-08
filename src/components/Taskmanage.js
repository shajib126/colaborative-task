import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import TaskNav from '../pages/TaskNav'

const Taskmanage = () => {
  return (
    <div className='task-manage'>
      <Navbar/>
      <div className='w-[80%] mx-auto mt-2'>
          <TaskNav/>
        </div>
    </div>
  )
}

export default Taskmanage