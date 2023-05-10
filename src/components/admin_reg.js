import React, { useEffect, useState } from 'react';
import "../PatientInfo.css";
import axios from 'axios';



function Admin_reg(props){

  const [id, setId] = useState('');
  const [fname, setFName] = useState("");
  const [lname, setLName] = useState("");
  const [qualification, setQualification] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(props.Api)
  async function save(event)
  {
      event.preventDefault();
  try
      {
       await axios.post(`${props.Api}doctor/`,
      {
      
      firstName: fname,
      lastName : lname,
      qualification : qualification,
      type:'D',
      username:username,
      password: password         
      
      });
        alert("Employee Registation Successfully");
        // setId("");
        // setName("");
        // setAddress("");
        // setMobile("");
      
      
      }
  catch(err)
      {
        alert("User Registation Failed");
      }
 }


 


return(
<>
<div class="container mt-4">
<form>
        <div class="form-group">
            <label>First Name</label>
            <input type="text" class="form-control" placeholder="Enter First Name"
             value={fname}
            onChange={(event) =>
              {
                setFName(event.target.value);      
              }}
            />
        </div>

        <div class="form-group">
            <label>Last Name</label>
            <input type="text" class="form-control" placeholder="Enter Last Name"
             value={lname}
             onChange={(event) =>
               {
                setLName(event.target.value);      
               }}
            />
        </div>

        <div class="form-group">
            <label>Qualification</label>
            <input type="text" class="form-control" placeholder="Enter Qualification"
            value={qualification}
            onChange={(event) =>
              {
                setQualification(event.target.value);      
              }}
           />
        </div>

        <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" placeholder="Enter Username"
            value={username}
            onChange={(event) =>
              {
                setUsername(event.target.value);      
              }}
           />
        </div>

        <div class="form-group">
            <label>Password</label>
            <input type="password" class="form-control" placeholder="Enter Password"
            value={password}
            onChange={(event) =>
              {
                setPassword(event.target.value);      
              }}
           />
        </div>
        
        <button class="btn btn-primary mt-4"  onClick={save} >Register</button>
        </form>


</div>

</>
);
    
      
    
  }
  
  export default Admin_reg;