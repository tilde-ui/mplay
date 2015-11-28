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
                  <div className='input-field'>
                    <input ref={(ref) => this.username = ref} type='text' className='form-control' placeholder='Email' />
                  </div>
                  <div className='input-field'>
                    <input type='text' className='form-control' placeholder='Password' />
                  </div>
                  <div className='row'>
                    <button
                      className='btn col m12'>
                      Login</button>
                  </div>
                </form>
                <div className='row'>
                  <a href='/register'>
                    <button
                      className='btn col m12'>
                      Create New Account</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Login;
