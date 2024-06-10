import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './navbar.js';
import Login from './login.js';
import Register from './register.js'

import Postjobsoftware from './postjob/postjob_software.js';
import Postjobdata from './postjob/postjob_data.js';


import Admindashboard from './admin/admindashboard.js';
import Adminaccount from './admin/adminaccount.js';
import Savedjobs from './admin/saved-jobs.js';
import Appliedjobs from './admin/applied-jobs.js';

import Userdashboard from './user/userdashboard.js';
import Userjobapply from './user/user-job-apply.js';
import Userjobstatus from './user/user-job-status.js';
import Useraccount from './user/user-account.js';

import { GoogleLogin } from '@react-oauth/google';


function App() {
  return (

  
  <BrowserRouter>
    <Routes>

      <Route path="/" element={<Navbar />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/admindashboard" element={<Admindashboard />} />

      <Route path='/postjob' element={<Postjobsoftware />} />
      <Route path='/postjob' element={<Postjobdata />} />

      <Route path='/saved-jobs' element={<Savedjobs />} />
      <Route path='/adminaccount' element={<Adminaccount />} />
      <Route path='/applied-jobs' element={<Appliedjobs />} />

      <Route path='/userdashboard' element={<Userdashboard />} />
      <Route path='/user-job-apply' element={<Userjobapply />} />
      <Route path="/user-job-status" element={<Userjobstatus />} />
      <Route path='/user-account' element={<Useraccount />} />


    </Routes>
   <span>
    <GoogleLogin
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed')
        }}
      />
      </span> 
  </BrowserRouter>

    
  );
}

export default App;
