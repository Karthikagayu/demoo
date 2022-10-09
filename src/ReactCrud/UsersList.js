import React from 'react';
function UsersList(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.users.length > 0 ? (
                     props.users.map(user=>{
                        // console.log(user)
                        return <tr key={user.id}>
                            <td>{user.firstname}</td>
                            <td>{user.lastname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <button onClick={()=>props.editUser(user)}>Edit</button>
                            </td>
                            <td>
                                <button onClick={()=>props.deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                     })
                    ):(
                       <tr>
                        <td colSpan={4}>No Users</td>
                       </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}
export default UsersList;