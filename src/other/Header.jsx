import React from 'react'
import { useState , useEffect } from 'react'
import { setLocalStorage } from '../utils/localStorage'

const Header = (props) => {
 
  // console.log("props in header : ", props)
  const [username, setUsername] = useState(' ')
  const name = props.data?.firstName;

  const role = JSON.parse(localStorage.getItem('loggedInUser')).role
  useEffect(() => {
  if(!name)
  {
    setUsername(role) 
  }
  else{
    setUsername(name)
  }
}, [name])



  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    // console.log("logging out user")
    // localStorage.clear()
    // console.log(" this is what i was looking for . ",props.changeUser)
    // localStorage.setItem('loggedInUser', )
    // window.location.reload()
    props.changeUser('')

  }
  return (
    <div className='flex align-center justify-between ' >
        <h1 className='text-2xl'>Hello <br /><span className='text-3xl font-semibold'>{username}👋</span></h1>
        <button onClick={logOutUser} className='bg-red-500 rounded-xl px-5 py-2 text-white text-lg font-medium'>Log-out</button>
    </div>
    
  ) 
}

export default Header