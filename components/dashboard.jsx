import React, {Component} from 'react';
import Layout from './Layout';

class Dashboard extends Component {
  render() {
    let thumbnails = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => {
      return <img src='/images/caffeine.jpg' key={index} className='thumbnail' />
    })

    return (
      <Layout isAuth={this.props.isAuth}>
        <div className='row'>
          <div className='col m12 s12'>
            <div className='card'>
              <div className='card-content'>
                <span className='card-title black-text'>Submissions</span>
                <div className='row'>
                  <div className='col m5 s12'>
                    <form action='/molecules/upload_mol' method='post' enctype='multipart/form-data'>
                      <div className='row'>
                        <div className='input-field col m12 s12'>
                          <input name='title' type='text' placeholder='Title' />
                        </div>
                        <div className='input-field col m12 s12'>
                          <input name='category' type='text' placeholder='Category' />
                        </div>
                        <div className='input-field col m12 s12'>
                          <textarea name='description' type='text' style={{height: 100}} placeholder='Description' />
                        </div>
                        <div className="file-field input-field col m12 s12">
                          <div className="btn">
                            <span>Browse</span>
                            <input name='molecule' type='file' />
                          </div>
                          <div className="file-path-wrapper">
                            <input className="file-path validate" type="text" />
                          </div>
                        </div>
                        <div className='input-field col m12 s12'>
                          <button className='btn col m12 s12'>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className='scenes col m7 s12'>
                    {thumbnails}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Dashboard;
