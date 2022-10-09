import React, { useState } from 'react';
import UsersList from './UsersList';
import AddUser from './AddUser';
import EditUser from './EditUser';
function Users(props) {
    const usersDetails=[
        {id:1,firstname:"Karthika",lastname:"Ramakrishnan",email:"kar@gmail.com",password:"kar"},
        {id:2,firstname:"Gayathri",lastname:"Ramar",email:"gay@gmail.com",password:"gay"},
        {id:3,firstname:"Sathiya",lastname:"Moorthy",email:"sat@gmail.com",password:"sat"}
    ]
    const initialState={id:null,firstname:'',lastname:'',email:'',password:''};
    const[users,setUsers]=useState(usersDetails);
    const[edit,setEdit]=useState(false);
    const[currentUser,setCurrentUser]=useState(initialState);
    const addUser=(user)=>{
         user.id = users.length+1
         setUsers([...users,user])
    }
    const editUser=(user)=>{
          setEdit(true)
          setCurrentUser({id:user.id,firstname:user.firstname,lastname:user.lastname,email:user.email,password:user.password})
    }
    const updateUser=(id,updatedUser)=>{
        
          setEdit(false)
          setUsers(users.map(user=>(user.id===id?updatedUser:user)))
    }
    const deleteUser=(id)=>{
           setUsers(users.filter(user=>user.id!==id))
    }
    return (
        <div className='container'>
            <h3>React CRUD Operations</h3>
            <div className='flex-row'>
                <div className='flex-large'>
                    {edit?(
                        <div>
                             <h3>Edit User</h3>
                             <EditUser  currentUser={currentUser} updateUser={updateUser}></EditUser>
                        </div>
                    ):(
                        <div>
                            <h3>Add User</h3>
                            <AddUser addUser={addUser}></AddUser>
                        </div>
                    )}
                </div>
                <div className='flex-large'>
                    <h3>List of Users</h3>
                    <UsersList users={users} editUser={editUser} deleteUser={deleteUser}></UsersList>
                </div>
            </div>
        </div>
    );
}
export default Users;