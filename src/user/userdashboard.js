import React from 'react';
import { Link } from 'react-router-dom';
import './userdashboard.css';

function Userdashboard() {
  return (
    <>
      <div className='userdashboard-image'>
        <center>
          <h1 className='userdash-h1'>USER DASHBOARD</h1>
        </center>
        <h2 className='userdashboard-h2'>
          <marquee scrollamount="13">
            Welcome to CareerHive! Let's take the next step in your career journey together!
          </marquee>
        </h2>
        <div>
          <center>
          <Link to='/user-account'>
            <button className="btn-53 mt-4 mb-4">
              <div className="original">My account</div>
              <div className="letters">
                <span>M</span>
                <span>y</span>
                <span> </span>
                <span>a</span>
                <span>c</span>
                <span>c</span>
                <span>o</span>
                <span>u</span>
                <span>n</span>
                <span>t</span>
              </div>
            </button>
          </Link>
          </center>
        </div>
        <div>
          <center>
          <Link to="/user-job-apply">
            <button className="btn-53 mb-4">
              <div className="original">Apply Job</div>
              <div className="letters">
                <span>A</span>
                <span>p</span>
                <span>p</span>
                <span>l</span>
                <span>y</span>
                <span> </span>
                <span>J</span>
                <span>o</span>
                <span>b</span>
              </div>
            </button>
          </Link>
          </center>
        </div>
        <div>
          <center>
          <Link to='/user-job-status'>
            <button className="btn-53 mb-4">
              <div className="original">Job Status</div>
              <div className="letters">
                <span>J</span>
                <span>o</span>
                <span>b</span>
                <span> </span>
                <span>S</span>
                <span>t</span>
                <span>a</span>
                <span>t</span>
                <span>u</span>
                <span>s</span>
              </div>
            </button>
          </Link>
          </center>
          
        </div>
        
      </div>
    </>
  );
}

export default Userdashboard;
