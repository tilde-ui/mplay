import React, {Component} from 'react';

class Playlist extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title black-text'>My Playlists</span>
          <ul className='collection' style={{height: 300}}>
            <li className='collection-item'>Playlist</li>
            <li className='collection-item'>Playlist</li>
            <li className='collection-item'>Playlist</li>
            <li className='collection-item'>Playlist</li>
            <li className='collection-item'>Playlist</li>
            <li className='collection-item'>Playlist</li>
            <li className='collection-item'>Playlist</li>
            <li className='collection-item'>Playlist</li>
          </ul>
          <div className='row'>
            <div className='col m6'>
              <button className='btn col m12'>Edit</button>
            </div>
            <div className='col m6'>
              <button className='btn col m12'>Preview</button>
            </div>
          </div>
          <div className='row'>
            <div className='col m12'>
              <button className='btn col m12'>Create New</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Playlist;
