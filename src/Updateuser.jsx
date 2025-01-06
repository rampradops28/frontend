import React, { useState } from 'react' 
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'; 
import './Createuser.css'
const Updateuser = () => {

  const {id} = useParams();
  const [name,setName] = useState();
  const [email, setEmail] = useState();
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const updateUser = (e) => {
    e.preventDefault();
    axios.put(`https://backend-kv0h.onrender.com/api/user/update/${id}`, {name,email,address})
    .then(res => {
      console.log(res)
      navigate('/')
    })
    .catch(err => console.log(err)) 
  }

  return (
    <div className="create-form">
            <div>
                <h1>Update User</h1>
            </div>
            <form onSubmit={updateUser}>
                <label htmlFor="name">name</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)}/> <br />

                <label htmlFor="email">email</label>
                <input type="text" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/> <br />

                <label htmlFor="address">address</label>
                <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)}/> <br />

                <button type="submit">Update</button>
            </form>
        </div>
  )
}

export default Updateuser
