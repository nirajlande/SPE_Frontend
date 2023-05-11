
import Login from './components/Login'
import { Route, Router, Routes } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Customer from './components/Customer';
import Customer_form from './components/Customer_form';
import Owner from './components/Owner';
import Customer_reg from './components/Customer_reg';
import Navbar_head from './components/Navbar_head';
// Example of a data array that
// you might receive from an API

function App() {
  let h="http://localhost:8081/"
  return (
  
    <>
    {/* <Navbar_head></Navbar_head> */}
      <Routes>
      <Route path='/' element={<Login Api={h}/>}/>
      <Route path='/customer' element={<Customer Api={h}/>}/>
      <Route path='/customer/custform' element={<Customer_form Api={h}/>}/>
      <Route path='/owner' element={<Owner Api={h}/>}/>
      <Route path='/register' element={<Customer_reg Api={h}/>}/>

        {/* <Route path='/custform' element={<Customer_form/>}/> */}
        {/* <Route path='/customer' element={<Customer/>}/> */}
        {/* <Route path='/' element={<Customer_form/>}/> */}
      </Routes>
    
    </>
  );
}
  
export default App;