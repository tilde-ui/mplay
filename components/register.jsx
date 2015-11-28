import React, {Component} from 'react';
import Layout from './Layout';

class Register extends Component {
  render() {
    return (
      <Layout>
        <div className='row'>
          <div className='col m8 offset-m2'>
            <div className='card'>
              <div className='card-content'>
                <span className='card-title black-text'>User Registration</span>
                <form action='/users/register' method='post'>
                  <div className='row'>
                    <div className='col m6 s12'>
                      <div className='input-field'>
                        <input className='validate' name='firstName' type='text' placeholder='First Name' />
                      </div>
                      <div className='input-field'>
                        <input className='validate' name='lastName' type='text' placeholder='Last Name' />
                      </div>
                      <div className='input-field'>
                        <input className='validate' name='email' type='text' placeholder='Email' />
                      </div>
                      <div className='input-field'>
                        <input className='validate' name='password' type='password' placeholder='Password' />
                      </div>
                      <div className='input-field'>
                        <input className='validate' name='confirm_pw' type='password' placeholder='Re-Enter Password' />
                      </div>
                    </div>
                    <div className='col m6 s12'>
                      <div className='input-field'>
                        <textarea placeholder='Bio' style={{height: 350}} />
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col m6 s12'>
                      <div className="input-field">
                        <select className='browser-default' name='organization' defaultValue='1'>
                          <option value="1">Organization 1</option>
                          <option value="2">Organization 2</option>
                          <option value="3">Organization 3</option>
                        </select>
                      </div>
                    </div>
                    <div className='col m6 s12'>
                      <div className="input-field">
                        <select className='browser-default' name='role' defaultValue='1'>
                          <option value="1">Author</option>
                          <option value="2">Local Administrator</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col m6'>
                      <button className='btn col m12'>Register</button>
                    </div>
                    <div className='col m6'>
                      <button className='btn col m12'>Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Register;
