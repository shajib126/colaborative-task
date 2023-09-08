import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const [name,setName] = useState('')
    const [profile,setProfile] = useState()
    const profileData =JSON.parse( localStorage.getItem('profile'))
    const navigate = useNavigate()
    const handeSubmit = e =>{
        e.preventDefault()

        const myname = JSON.parse(localStorage.getItem('users')).find((user)=>user.name.includes(name))
        setProfile(myname)
       
    }
    useEffect(()=>{
        if(profile){
            localStorage.setItem('profile',JSON.stringify({
                name:profile?.name,
                bio:profile?.bio,
                task:[
                    ...profileData.task,
                    {
                        name:"Crate a ride shareing app",
                        description:"create a ride shareing using node,rect js",
                        dueDate:'10/7/2023',
                        priority:"Top",
                        process:"pending"
                    }
                ]
                
            }))
            navigate('/profile')
        }
       
        return
    },[profile])
   

  return (
    <div>
        <form className='flex flex-col w-[20%] mx-auto mt-[200px] border-2 p-2' onSubmit={handeSubmit}> 
        <h1 className='text-center border-b-2 p-1 mb-2'>Sign In</h1>
            <label>Name</label>
            <input className='p-2 mb-2' type="text" onChange={(e)=>setName(e.target.value)} />
            <button type='submit' className='border-2 hover:border-none p-1 mt-3 hover:bg-black hover:text-white'>Sign In</button>
            <span className='mt-3 text-sm text-gray-400'>Don't have account ?</span>
            <Link className='border-b-2 border-gray-500 w-[100px] text-center text-gray-400' to='/sign-up'>Sign Up</Link>
        </form>
        <img src={profile?.photo} alt="" />
    </div>
  )
}

export default SignIn