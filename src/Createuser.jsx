import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
const Createuser = () => {

  const [ name, setName] = useState('');
  const [ email ,setEmail] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const submit = (e) => {
      e.preventDefault(); //stop the default rendering
      console.log({name,email,address})
      axios.post('https://backend-kv0h.onrender.com/api/user/create', {name,email,address})
      .then(res =>{
        console.log(res.data)
        navigate('/');
      })
      .catch(err => console.log(err)) 
  }

  return (
    <>
        <div className="create-form">
            <div>
                <h1>Create User</h1>
            </div>
            <form onSubmit={submit}>
                <label htmlFor="name">name</label>
                <input type="text" id="name" onChange={(e) => setName(e.target.value)}/><br />

                <label htmlFor="email">email</label>
                <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/> <br />

                <label htmlFor="address">address</label>
                <input type="text" id="address" onChange={(e) => setAddress(e.target.value)}/> <br />

                <button type="submit">Create</button>
            </form>
        </div>
    </>
  )
}

export default Createuser