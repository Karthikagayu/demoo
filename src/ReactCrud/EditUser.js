import React, { useEffect, useState } from 'react';

function EditUser(props) {
    const[user,setUser]=useState(props.currentUser)
    // console.log(user)
    const handleChange=(event)=>{
          const {name,value}=event.target
          setUser({...user,[name]:value})
    }
    useEffect(()=>{
        setUser(props.currentUser)
    },[props])
    return (
        <div>
            <form onSubmit={event=>{
                event.preventDefault();
                props.updateUser(user.id,user)
            }}>
             <label>FirstName</label>
                    <input type="text" name="firstname" value={user.firstname} onChange={handleChange}></input>
                <label>LastName</label>
                    <input type="text" name="lastname" value={user.lastname} onChange={handleChange}></input>
                <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange}></input>
                <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange}></input>
                <button>Update</button>
            </form>    
        </div>
    );
}

export default EditUser;