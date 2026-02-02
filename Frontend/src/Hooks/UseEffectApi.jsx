import React, { useEffect, useState } from 'react'

const UseEffectApi = () => {
    const [users,setUsers]=useState([])
    
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>res.json())
        .then((data)=>setUsers(data))
        //.then((data)=>console.log(data))
    },[])
  return (
    <div>
      <ul>
        {users.map((user,index)=>(
          <li key={index}>
            <p>Name:{user.name}</p>
            <p>Email:{user.email}</p>
            <p>Latitude:{user.lat}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UseEffectApi