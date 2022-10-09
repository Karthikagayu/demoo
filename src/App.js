// // import React, { useState } from 'react';
// // import './App.css';
// // import Create from './Components/create';
// // import Read from './Components/read';
// // import Update from './Components/update';
// // import { Route, Routes, Navigate, useLocation } from 'react-router-dom'
// // import Fetchget from './fetchgetandpost/get';

// // function App() {

// //   // const { pathname } = useLocation();  

// //   return (
// //     <div>
// //       <Fetchget></Fetchget>
// //     </div>
// //     // <div className="main">
// //     // <h2 className="main-header">React Crud Operations</h2>
  
// //     // <Routes>
// //     //                 {/* <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} /> */}
// //     //                 <Route exact path="/" component={Read} />
// //     //                 <Route path="/add" component={Create} />
// //     //                 {/* <Navigate from="*" to="/" /> */}
// //     //             </Routes>

 
// //     // </div>
// //   );
// // }
// // export default App;
// import React, { useState } from 'react';
// import AddEditEmployee from './AddEditEmployee';
// import Editemployee from './editemployee';
// import EmployeeTable from './EmployeeTable';
// const App=()=>{

//     const Employees=[
//         {Emp_id:1,Emp_name:"gayu",Emp_native:"watrap",Emp_DOB:"25.06.2005"},
//         {Emp_id:2,Emp_name:"karthika",Emp_native:"watrap",Emp_DOB:"20.03.2000"},
//         {Emp_id:3,Emp_name:"chithra",Emp_native:"madurai",Emp_DOB:"11.05.2000"},
//         {Emp_id:4,Emp_name:"sathya",Emp_native:"chennai",Emp_DOB:"19.09.2002"},
//          {Emp_id:5,Emp_name:"baby",Emp_native:"rjplym",Emp_DOB:"23.01.2000"},
//         {Emp_id:6,Emp_name:"kam",Emp_native:"rjplym",Emp_DOB:"12.06.2000"},
//         {Emp_id:7,Emp_name:"yuhan",Emp_native:"theni",Emp_DOB:"6.06.2000"},
//      ]
     
//     const[employees,setEmployees]=useState(Employees)

    
    
//      const initialstate={Emp_id:null,Emp_name:'',Emp_native:'',Emp_DOB:''}
//      const[editMode,seteditMode]=useState(false) 
//      const[currentemployee,setcurrentemployee]=useState(initialstate)

//      const addemployee=(emp)=>{
//            emp.id=employees.length+1;
//            setEmployees([...employees,emp])
//      }

//      const editemployee=(emp)=>{
//         console.log(emp)
//             seteditMode(true)
//             setcurrentemployee({Emp_id:emp.Emp_id,Emp_name:emp.Emp_name,Emp_native:emp.Emp_native,Emp_DOB:emp.Emp_DOB})
//      }

//      const updateemployee=(id,updatedemployee)=>{
//              seteditMode(false);
//              setEmployees(employees.map(emp=>{
//              return emp.Emp_id === id ? updatedemployee : emp }));
//      };


//      const deleteemployee=(id)=>{
//         console.log(id)
//         // seteditMode(false)
//         setEmployees(employees.filter(emp=>emp.Emp_id!==id))
//      };

//     return(
//         <div className='container'>
//             <div className='flex-row'>
//                 <div className='flex-large'>
//                     {editMode?(
//                         <div>
//                             <h2>Edit Employee</h2>
//                             <Editemployee editMode={editMode} seteditMode={seteditMode} currentemployee={currentemployee}updateemployee={updateemployee}></Editemployee>

//                         </div>
//                     ):(
//                         <div>
//                    <h1>Add Employee</h1>
//                    <AddEditEmployee addemployee={addemployee}></AddEditEmployee>
//                         </div>
//                     )}

//                 </div>
//                 <EmployeeTable employees={employees} editemployee={editemployee} deleteemployee={deleteemployee}></EmployeeTable>
//             </div>

//         </div>
//     )
//         }
// export default App;
import React, { useState } from "react";
import "./App.css";


function App() {
  const[state,setState]=useState(true)
  const handleBulb=()=>{
    setState(true)
  }
  return (
    <div>
    <button onClick={handleBulb}>ON</button>
    {state?
    (<img src="https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg"/>):
    (<img src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg" />)}
    </div>
  );
}

export default App;