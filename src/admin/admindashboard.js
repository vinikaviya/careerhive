import React from 'react';
import { Link } from 'react-router-dom';
import './admindashboard.css'; 

function Admindashboard() {
  return (
    <>
      <div className='admindashboard-image'>
        <center>
          <h1 className='admindash-h1'>ADMIN DASHBOARD</h1>
        </center>
        <div>
          <center>
            <Link to='/adminaccount'>
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
            <Link to="/postjob">
              <button className="btn-53 mb-4">
                <div className="original">Post Job</div>
                <div className="letters">
                  <span>P</span>
                  <span>o</span>
                  <span>s</span>
                  <span>t</span>
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
            <Link to='/saved-jobs'>
              <button className="btn-53 mb-4">
                <div className="original">Saved Jobs</div>
                <div className="letters">
                  <span>S</span>
                  <span>a</span>
                  <span>v</span>
                  <span>e</span>
                  <span>d</span>
                  <span> </span>
                  <span>J</span>
                  <span>o</span>
                  <span>b</span>
                  <span>s</span>
                </div>
              </button>
            </Link>
          </center>
        </div>
        <div>
          <center>
            <Link to="/applied-jobs">
              <button className="btn-53 mb-4">
                <div className="original">Applied Jobs</div>
                <div className="letters">
                  <span>A</span>
                  <span>p</span>
                  <span>p</span>
                  <span>l</span>
                  <span>i</span>
                  <span>e</span>
                  <span>d</span>
                  <span> </span>
                  <span>J</span>
                  <span>o</span>
                  <span>b</span>
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

export default Admindashboard;
