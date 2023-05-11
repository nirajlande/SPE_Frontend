import React, { useEffect, useState } from 'react';
import "../PatientInfo.css";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate,  } from "react-router-dom";
import axios from 'axios';
import Navbar_head from './Navbar_head';

function Customer(props){
  let [res,setRes]=useState([]);
  const navigate = useNavigate()
  const {state} = useLocation();
  const {cust_id,resp} = state;
  console.log(resp)
  
  axios.interceptors.request.use( config => {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if(user){
      const token = 'Bearer ' + user;
      config.headers.Authorization =  token;
    }
    return config;
  });



  const Fetch_data = async()=>{
    await axios.get(`${props.Api}api/complaints/${cust_id}`, 
    
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

console.log(res)

for(let i=0;i<res.length;i++){
  console.log(res[i])
  for(let j=1;j<res[i].services.length;j++){
    if(res[i].services[j][0]!==','){
    res[i].services[j]="," + res[i].services[j]
    }
  }
}
  // showStudentList = () => {
  //   this.setState({
  //     showTable: true,
  //   })
//   const navigate = useNavigate()

//   const Fetch_data = async()=>{
//     await axios.get(`${props.Api}doctor/`, 
    
//     {
//       mode:'cors',
//       headers: new Headers({
//         "ngrok-skip-browser-warning": "69420",
//       }),
      
//   })
//     .then((response)=>{
//         console.log(response.data);
//         setRes(response.data);
//     })
//     .catch(function(error)
//     {
//         console.log(error);
//     });
    
// }

//   useEffect(()=>{
//     Fetch_data();
// },[]);

let name=resp.firstName
  return (
    <>
    <div>
    <Navbar_head/>
      <h1>Hello, {name} </h1>
    </div>
      <div>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
              <th>Vehicle_ID</th>
                <th>Vehicle Type</th>
                {/* <th>Age</th> */}
                <th>Services</th>
                <th>Remarks</th>
                <th>Acknowledgement</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
            {res.map((val, key) => {
        return (
          <tr key={key}>
            <td>{val.vehicleNo}</td>
            <td>{val.vehicleType}</td>
            {/* <td>{val.age}</td> */}
            <td>{val.services}</td>
            <td>{val.remark}</td>
            <td>{val.aknow}</td>
            <td>{val.status}</td>

            
          </tr> 
        );
      })}
            </tbody>
          </table>
          <Button type="click"
            variant="primary"
            onClick={()=>navigate('/customer/custform',{state:{cust_id:cust_id,resp:resp}})}
            >
            Request Service
        </Button>
        {/* <a href="#" onClick={this.showStudentList}>StudentList</a> */}
        </div>
      </div>
    </>
    );
}

export default Customer;