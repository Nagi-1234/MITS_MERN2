import React,{useState} from 'react'

const Signup = () => {
    const [userData,setUserData]=useState({

        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setUserData((prev)=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Email :</label>
            <input type="email" 
            value={userData.email} 
            name="email"
            onChange={handleChange} 
             placeholder='Enter the Email'/>
             <br></br>
             <br></br>
            <label>password:</label>
            <input type="password" 
            value={userData.password} 
            name="password" 
            onChange={handleChange}
            placeholder ='Enter the password'/>
            <br></br>
            <br></br>
            <button type="submit"> Signup </button>
        </form>
    </div>
  )
}

export default Signup