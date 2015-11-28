import React, {Component} from 'react';

class ScenePreview extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title black-text'>Preview</span>
          <div>
            <iframe style={{width: '100%'}} frameBorder="0" src="http://embed.molview.org/v1/?mode=balls"></iframe>
          </div>
        </div>
      </div>
    )
  }
}

export default ScenePreview;
