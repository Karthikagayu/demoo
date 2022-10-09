import React from 'react';

const EmployeeTable = props => (
    // <div>
    //    { console.log(props)}
            <table>
                <thead>
                    <tr>
                        <th>Employee Name</th>
                        <th>Employee Native</th>
                        <th>Employee DOB</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {props.employees.length > 0 ?(
                     props.employees.map(emp=>(
                        <tr key={emp.Emp_id}>
                            <td>{emp.Emp_name}</td>
                            <td>{emp.Emp_native}</td>
                            <td>{emp.Emp_DOB}</td>
                            <td><button onClick={()=>props.editemployee(emp)}>Edit</button></td>
                            <td><button onClick={()=>props.deleteemployee(emp.Emp_id)}>Delete</button></td>
                        </tr>
                     ))
                ):(
                      <tr>
                        <td colSpan={6}>No Employees</td>
                      </tr>
                )}
                </tbody>
            </table>
            // </div>
) 
    


export default EmployeeTable;