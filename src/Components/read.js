import React, { useEffect, useState } from 'react';
import { Table,Button } from 'semantic-ui-react'
import axios from 'axios';
import Update from './update';
import { Link , BrowserRouter as Router,} from 'react-router-dom';
export default function Read() {

    const [APIData, setAPIData] = useState([]);
    // const [shown,setShown]=useState("false");
    useEffect(() => {
        axios.get(`http://localhost/contact/api/user`)
            .then((response) => {
                setAPIData(response.data.data);
            })
    }, [])
    const setData = (data) => {
        console.log(data)
        let { id, first_name, last_name, checkbox } = data;
        console.log(first_name)
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', first_name);
        localStorage.setItem('Last Name', last_name);
        localStorage.setItem('Checkbox Value', checkbox)
        // setShown(true)

        

}
const onDelete = (id) => {
    axios.delete(`http://localhost/contact/api/user/delete/${id}`).then(()=>{
        getData();
    }
)

  }
  const getData = () => {
    axios.get(`http://localhost/contact/api/user`)
        .then((getData) => {
            setAPIData(getData.data.data);
         })
}


    return (
        <div>
<Router>
        <Link to="/create">
          <button>+Add</button>
        </Link>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                {APIData.map((data) => {
                    return (
                    <Table.Row>
                        <Table.Cell>{data.first_name}</Table.Cell>
                        <Table.Cell>{data.last_name}</Table.Cell>
                        <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                        {/* <Link to='/update'> */}
                        <Table.Cell> 
                        <Button onClick={() => setData(data)}>Update</Button>
                    {/* {shown && <Update/>} */}

                        </Table.Cell>
                        {/* </Link> */}
                        <Table.Cell>
                        <Button onClick={() => onDelete(data.id)}>Delete</Button>
                        </Table.Cell>
                        </Table.Row>
                )}
            )}
            </Table.Body>
            </Table>
            </Router>
        </div>
    )
}