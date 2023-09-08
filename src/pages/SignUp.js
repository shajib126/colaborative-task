import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [name,setName] = useState("")
    const [photo,setPhoto] = useState(null)
    const [bio,setBio] = useState("")
    const userData =JSON.parse( localStorage.getItem('users'))
    console.log(userData);
    const navigate = useNavigate()

    const handleUpload = (e)=>{
        const reader = new FileReader()
        reader.onload = e =>{
            const photoUrl = e.target.result
            setPhoto(photoUrl)
        }
        reader.readAsDataURL(e.target.files[0])
    }

    const handleSubmit = e =>{
        e.preventDefault()
        if(!userData){
            localStorage.setItem('users',JSON.stringify([
                {
                    name,
                    photo,
                    bio
                }
            ]))
        }
        localStorage.setItem('users',JSON.stringify(
            [
                ...userData,
                {
                    name,
                    photo,
                    bio
                }
            ]
        ))
        alert('Signed in Successfully')
            navigate('/sign-in')
    }
   
  return (
    <div>
        <form className='flex flex-col w-[40%] mx-auto border-2 px-6 py-4 mt-6' onSubmit={handleSubmit}>
            <h1 className='mt-4 text-2xl mb-4  border-b-2 p-1 font-bold'>Sign Up</h1>
            <img className='w-[100px] rounded-md h-[100px] mb-4' src={photo} alt="avatar" />
            <input className='mb-4 p-2 w-[80%] text-black' onChange={(e)=>setName(e.target.value)} type="text" placeholder='name' />
            <textarea className='w-[80%] mb-4 text-black' onChange={(e)=>setBio(e.target.value)} placeholder='bio' cols="30" rows="10"></textarea>
            <input type="file" accept="image/*" onChange={handleUpload} />
            <button className='border-2 p-2 w-[200px] mx-auto mt-4 mb-6 hover:bg-black hover:border-none'>Sign Up</button>
            <span className='mb-2 text-sm text-gray-500 '>Alread have an account?</span>
            <button type='submit' className='signIn'>Sign In</button>
        </form>
    </div>
  )
}

export default SignUp