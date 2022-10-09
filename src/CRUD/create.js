import axios from 'axios';
import React, {  useEffect, useState } from 'react';
function Create(){
    const[Apidata,setApidata]=useState([])
    const[firstName,setFirstName]=useState('')
    const[lastName,setlastName]=useState('')
    const[id,setId]=useState('')

    useEffect(
        ()=>{
            fetching()
        },[]
    )
    const fetching=()=>{
        axios.get(`http://localhost/contact/api/user`).then((response)=>{
            
            setApidata(response.data.data);
            console.log(response.data.data,'Apidata')
        });

    }
    const postdata=()=>{
        if(id){
            axios.put(`http://localhost/contact/api/user/update/${id}`,{
                    firstName,
                    lastName})
            fetching()
            alert('Successfully! Updated')
        }else{
            axios.post(`http://localhost/contact/api/user`,{
                firstName,
                lastName
            })
            fetching()
            alert('Successfully! Inserted')
        }
       
    }
    const handleDelete=(id)=>{
        axios.delete(`http://localhost/contact/api/user/delete/${id}`).then(()=>{
            fetching();
        })
    }
    
    const handleUpdate=(user)=>{
        console.log(user)
         let {id,first_name,last_name}=user
        // setId(id)
        setFirstName(first_name)
        setlastName(last_name)
      
    }

    const resetData=()=>{
        setId('')
        setFirstName('')
        setlastName('')
    }
    return(
        <div>
            <table border="1px">
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Actions</th>
                    </tr>
                    {Apidata && Apidata.map((user)=>{
                        return <tr>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <button onClick={()=>handleUpdate(user)}>Edit</button>
                            <button onClick={()=>handleDelete(user.id)}>Delete</button>
                    </tr>
                    })}

                </table>
        
            First Name:<input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input><br></br>
            Last Name:<input type="text"  value={lastName} onChange={(e)=>setlastName(e.target.value)}></input><br></br>
            <button type="submit" onClick={postdata}> { !id ? 'Submit' : 'Update' }</button>
            <button onClick={resetData}>Cancel</button>
        </div>
    )
}
export default Create;