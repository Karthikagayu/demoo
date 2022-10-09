import React, { useState } from 'react';

function AddEditEmployee(props) {
    const initialstate={Emp_id:null,Emp_name:'',Emp_native:'',Emp_DOB:''}
    const [emp,setEmp]=useState(initialstate)
    const handleChange=(event)=>{
        const {name,value}= event.target
        setEmp({...emp,[name]:value})
    }
    return (
        <div>
            <form onSubmit={event=>{
                event.preventDefault();
               
                if(!emp.Emp_name|| !emp.Emp_native || !emp.Emp_DOB)
                return;
                props.addemployee(emp);
                setEmp(initialstate)
            }}>
                <label>Employee Name</label>
                <input type="text" name="Emp_name" value={emp.Emp_name} onChange={handleChange}></input>
                <label>Employee Native</label>
                <input type="text" name="Emp_native" value={emp.Emp_native} onChange={handleChange}></input>
                <label>Employee DOB</label>
                <input type="text" name="Emp_DOB" value={emp.Emp_DOB} onChange={handleChange}></input>
                <button>Add Employee</button>
            </form>
        </div>
    );
}
export default AddEditEmployee;