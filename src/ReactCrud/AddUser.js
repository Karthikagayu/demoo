import React, { useState } from 'react';
function AddUser(props) {
    const initialState={id:null,firstname:'',lastname:'',email:'',password:''}
    const [user,setUser]=useState(initialState);
    const handleChange=(event)=>{
        const {name,value}=event.target
        console.log(event.target)
        setUser({...user,[name]:value})
    }
    const handleSubmit=(event)=>{
         event.preventDefault();
         if (!(user.firstname || user.lastname || user.email || user.password )) return;
         props.addUser(user);
         setUser(initialState)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>FirstName</label>
                    <input type="text" name="firstname" value={user.firstname} onChange={handleChange}></input>
                <label>LastName</label>
                    <input type="text" name="lastname" value={user.lastname} onChange={handleChange}></input>
                <label>Email</label>
                    <input type="text" name="email" value={user.email} onChange={handleChange}></input>
                <label>Password</label>
                    <input type="password" name="password" value={user.password} onChange={handleChange}></input>
                    <button>Add User</button>
            </form>
        </div>
    );
}
export default AddUser;