import React, {Component} from 'react';
import Layout from './Layout';

class Login extends Component {

  render() {
    let message;
    if (this.props.message) {
      message = <p>{this.props.message}</p>;
    }

    return (
      <Layout>
        <div className='row'>
          <div className='col m6 s12 offset-m3'>
            <div className='card'>
              <div className='card-content'>
                <span className='card-title black-text'>Login</span>
                {message}
                <form action='/users/login' method='post'>
                  <div className='row'>
                    <div className='input-field col m12 s12'>
                      <input type='text' className='form-control' placeholder='Email' />
                    </div>
                    <div className='input-field col m12 s12'>
                      <input type='text' className='form-control' placeholder='Password' />
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col m6 s6'>
                      <button className='btn col m12 s12'>Login</button>
                    </div>
                    <div className='col m6 s6'>
                      <a href='/register'>
                        <button className='btn col m12 s12' type='button'>Register</button>
                      </a>
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

export default Login;
