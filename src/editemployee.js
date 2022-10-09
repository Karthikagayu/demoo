import React, { useEffect, useState } from 'react';

function Editemployee(props) {
    const[emp,setEmp]=useState(props.currentemployee)
    const handleChange=(event)=>{
      const{name,value}=event.target
      setEmp({...emp,[name]:value})
    }
    useEffect(
        ()=>{
            console.log(props.currentemployee,'currentemployee')
            setEmp(props.currentemployee)
        },[props]
    )
    return (
        <div>
            <form onSubmit={event=>{
                event.preventDefault();
                props.updateemployee(emp.Emp_id,emp)
            }}>
                <label>Employee Name</label>
                <input type="text" value={emp.Emp_name} name="Emp_name" onChange={handleChange}></input>
                <button>Update Employee</button>
                <button onClick={()=>props.seteditMode(false)}>Cancel</button>

            </form>
        </div>
    );
}

export default Editemployee;