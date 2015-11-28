import React, {Component} from 'react';

import {Link} from 'react-router';

class CreateOrganization extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col m8 offset-m2'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title black-text'>Create Organization</span>
              <div className='row'>
                <div className='col m12'>
                  <div className='input-field'>
                    <input type='text' placeholder='Enter Organization Name' />
                  </div>
                </div>
                <div className='col m12'>
                  <p className='center-align'>Select Users for Local Administrator</p>
                  <form action="#">
                    <p>
                      <input type="checkbox" id="user1" />
                      <label htmlFor="user1">User 1</label>
                    </p>
                    <p>
                      <input type="checkbox" id="user2" />
                      <label htmlFor="user2">User 2</label>
                    </p>
                    <p>
                      <input type="checkbox" id="user3" />
                      <label htmlFor="user3">User 3</label>
                    </p>
                    <p>
                      <input type="checkbox" id="user4" />
                      <label htmlFor="user4">User 4</label>
                    </p>
                    <p>
                      <input type="checkbox" id="user5" />
                      <label htmlFor="user5">User 5</label>
                    </p>
                  </form>
                </div>
              </div>
              <div className='row'>
                <div className='col m6'>
                  <Link to='/organizations'>
                    <button className='btn col m12'>Save Changes</button>
                  </Link>
                </div>
                <div className='col m6'>
                  <Link to='/organizations'>
                    <button className='btn col m12'>Cancel</button>
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

export default CreateOrganization;
