import React, { useEffect, useState } from 'react';

function Fetchget() {
    const[fetdata,setfetdata]=useState([])
    useEffect(()=>{
        fetching()
    })
    const fetching=()=>{
        fetch('').then(response=>response.json()).then((data)=>{
            setfetdata(data)
        })
        console.log(data)
    }
    return (
        <div>
           <table border="1px">
            <tr>
                <th>
                    
                </th>
                <th>
                    EmployeeID
                </th>
            </tr>
            {fetdata && fetdata.map((user)=>{
                return <tr>
                    <td>
                        {user.Emp_name}
                        {user.Emp_id}
                    </td>
                </tr>
            }) }
            </table> 
        </div>
    );
}

export default Fetchget;