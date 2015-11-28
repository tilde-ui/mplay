import React, {Component} from 'react';

import {Link} from 'react-router';

import ScenePreview from './ScenePreview';

class Scene extends Component {
  constructor() {
    super();

    this.state = {
      previewOpen: false
    }
  }

  togglePreview() {
    this.setState({
      previewOpen: !this.state.previewOpen
    })
  }

  render() {
    let content;
    if (this.state.previewOpen) {
      content = <ScenePreview />
    } else {
      content = (
        <ul className='collection' style={{height: 300}}>
          <li className='collection-item'>Scene 1</li>
          <li className='collection-item'>Scene 2</li>
          <li className='collection-item'>Scene 3</li>
          <li className='collection-item'>Scene 4</li>
          <li className='collection-item'>Scene 5</li>
          <li className='collection-item'>Scene 6</li>
          <li className='collection-item'>Scene 7</li>
          <li className='collection-item'>Scene 8</li>
        </ul>
      )
    }

    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title black-text'>My Scenes</span>
          {content}
          <div className='row'>
            <div className='col m12'>
              <button className='btn col m12' onClick={this.togglePreview.bind(this)}>Preview</button>
            </div>
          </div>
          <div className='row'>
            <div className='col m12'>
              <Link to='/upload'>
                <button className='btn col m12'>Upload</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Scene;
