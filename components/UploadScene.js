import React, {Component} from 'react';

import {Link} from 'react-router';

class UploadScene extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title black-text'>Upload Scene</span>
          <div className='row'>
            <div className='col m9'>
              <div className='row'>
                <div className='col m6'>
                  <div className="file-field input-field">
                    <div className="btn">
                      <span>Browse</span>
                      <input type="file" />
                    </div>
                    <div className="file-path-wrapper">
                      <input className="file-path validate" type="text" />
                    </div>
                  </div>
                </div>
                <div className='col m6'>
                  <div className='input-field'>
                    <input type='text' placeholder='Title' />
                  </div>
                </div>
                <div className='col m12'>
                  <div className='input-field'>
                    <textarea placeholder='Description' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col m3'>
              <div className='row'>
                <div className='col m12'>
                  <Link to='/dashboard/global'>
                    <button className='btn' style={{width: '100%'}}>Submit</button>
                  </Link>
                </div>
              </div>
              <div className='row'>
                <div className='col m12'>
                  <Link to='/dashboard/global'>
                    <button className='btn' style={{width: '100%'}}>Cancel</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UploadScene;
