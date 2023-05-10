import React, { useEffect, useState } from 'react';
import "../PatientInfo.css";
import axios from 'axios';
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate,  } from "react-router-dom";


function Admin(props){
  let [res,setRes]=useState([]);
  
  // showStudentList = () => {
  //   this.setState({
  //     showTable: true,
  //   })
  const navigate = useNavigate()

  const Fetch_data = async()=>{
    await axios.get(`${props.Api}doctor/`, 
    
    {
      mode:'cors',
      headers: new Headers({
        "ngrok-skip-browser-warning": "69420",
      }),
      
  })
    .then((response)=>{
        console.log(response.data);
        setRes(response.data);
    })
    .catch(function(error)
    {
        console.log(error);
    });
    
}

  useEffect(()=>{
    Fetch_data();
},[]);


  return (
    <>
    <div>
      <h1>Hello,Admin</h1>
    </div>
      <div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
              <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                {/* <th>Age</th> */}
                <th>Qualification</th>
              </tr>
            </thead>
            <tbody>
            {res.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.doctor_id}</td>
            <td>{val.firstName}</td>
            <td>{val.lastName}</td>
            {/* <td>{val.age}</td> */}
            <td>{val.qualification}</td>
          </tr> 
        );
      })}
            </tbody>
          </table>
          <Button type="click"
            variant="primary"
            onClick={()=>navigate('admin_reg')}
            >
            Add Doctor
        </Button>
        <Button type="click"
            variant="primary"
            onClick={()=>navigate('patient_request',{state:{response:res}})}
            >
            See Patient Requests
        </Button>
        {/* <a href="#" onClick={this.showStudentList}>StudentList</a> */}
        </div>
      </div>
    </>
    );
}

export default Admin;