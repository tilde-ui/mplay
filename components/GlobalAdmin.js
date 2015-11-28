import React, {Component} from 'react';
import Scene from './Scene';
import Playlist from './Playlist';

class GlobalAdmin extends Component {
  render() {
    return (
      <div>
        <h2>Global Administrator</h2>
        <div className='row'>
          <div className='col m5'>
            <Playlist />
          </div>
          <div className='col m7'>
            <Scene />
          </div>
        </div>
      </div>
    )
  }
}

export default GlobalAdmin;
