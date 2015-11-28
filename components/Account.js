import React, {Component} from 'react';
import {Link} from 'react-router';

class Account extends Component {
  render() {
    let sampleBio = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum orci at arcu egestas efficitur. Nunc tincidunt suscipit facilisis. Aenean congue nisi quis massa lobortis, et pharetra nisl condimentum. Phasellus sagittis, erat vitae consectetur porta, odio nulla lobortis quam, sed varius turpis risus at augue. Maecenas vestibulum, purus sit amet fringilla rhoncus, nulla nisl mattis dolor, id hendrerit lacus massa vel ligula. Integer et diam vel augue scelerisque semper a malesuada velit. Nam mattis lorem turpis, sit amet scelerisque tortor porttitor id. Proin nec ligula quis lectus hendrerit tincidunt vel sed urna. Donec convallis congue lacus et dapibus. Morbi quis commodo ligula. Praesent ornare vel augue nec sollicitudin.';

    return (
      <div className='row'>
        <div className='col m12'>
          <div className='card'>
            <div className='card-content'>
              <span className='card-title black-text'>Edit Account</span>
              <div className='row'>
                <div className='col m6 s12'>
                  <div className='input-field'>
                    <input className='validate' id='email' type='text' placeholder='Email' value='email@example.com' />
                  </div>
                  <div className='input-field'>
                    <input className='validate' id='username' type='text' placeholder='Username' value='user123' />
                  </div>
                  <div className='input-field'>
                    <input className='validate' id='password' type='password' placeholder='Password' value='password' />
                  </div>
                  <div className='input-field'>
                    <input className='validate' id='re-password' type='password' placeholder='Re-Enter Password' value='password' />
                  </div>
                </div>
                <div className='col m6 s12'>
                  <div className='input-field'>
                    <textarea placeholder='Bio' id='bio' style={{height: 275}} value={sampleBio} />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col m6'>
                  <Link to='/dashboard/global'>
                    <button className='btn col m12'>Save Changes</button>
                  </Link>
                </div>
                <div className='col m6'>
                  <Link to='/dashboard/global'>
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

export default Account;
