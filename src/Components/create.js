import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import Read from './read';
// import { Toast } from 'react-toastify/dist/components';

export default function CreateData() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [show,setshow]=useState(false)
    const postData = () => {
        axios.post(`http://localhost/contact/api/user`, {
            firstName,
            lastName,
            checkbox
        })
    }
    const read=(e)=>{
       setshow(true)
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' onChange={(e) => setCheckbox(!checkbox)}/>
                </Form.Field>
                <Button onClick={postData} type='submit'>Submit</Button>
                {/* <button  className="btn btn-success btnspace" onClick={()=>Toast.success('Success Message')}> Success Message</button> 
                    */}<br></br>
                    <button onClick={read}>READ</button>
                    {show && <Read/>}
            </Form>
        </div>
    )
}
