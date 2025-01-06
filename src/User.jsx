import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './User.css'

const User = () => {
    const [user, setUser] = useState([ ])

    useEffect(() => {
        axios.get('https://backend-kv0h.onrender.com/api/user/fetch')
        .then((res) => {
            setUser(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    const handleDelete = (id) => {
        axios.delete(`https://backend-kv0h.onrender.com/api/user/delete/${id}`)
        .then(res => {
            console.log("user deleted")
        })
        .catch(err => console.log(err)) 
    }
    return (
        <div >
            <h1>User</h1>
            <Link to="/create">Create User</Link>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                {user.map((value) => (                        
                    <tr>
                        <td>{value.name}</td> 
                        <td>{value.email}</td>
                        <td>{value.address}</td>
                        <td>
                            <Link to={`/update/${value._id}`}>update</Link>
                            <button onClick={(e) => handleDelete(value._id)}>delete</button>
                        </td>
                    </tr> 
                    )
                )}
            </table>
        </div>
    )
}

export default User
