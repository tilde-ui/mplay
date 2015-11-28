import React, {Component} from 'react';

class Installation extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title black-text'>Installation Management</span>
          <div className='row valign-wrapper'>
            <div className='col m6 s12 valign'>
              <div className='row'>
                <div className='col m12'>
                  <button className='btn' style={{width: '100%'}}>Customize Automatic Upkeep</button>
                </div>
              </div>
              <div className='row'>
                <div className='col m12'>
                  <button className='btn' style={{width: '100%'}}>Activity Logs</button>
                </div>
              </div>
              <div className='row'>
                <div className='col m12'>
                  <button className='btn' style={{width: '100%'}}>Playground Controls</button>
                </div>
              </div>
            </div>
            <div className='col m6 s12'>
              <h5>Installation Info</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in sodales sem. In a orci dolor. Aenean semper venenatis velit, eget molestie eros malesuada sed. Integer in ullamcorper nibh. Morbi luctus arcu ac auctor accumsan. In maximus mi magna, ac volutpat metus porttitor quis. Mauris tristique pulvinar ultricies. Duis mollis nibh pulvinar erat aliquet elementum. Donec eget erat quis tellus iaculis rutrum at et mauris. Nam elementum nisi id est finibus rhoncus.</p>
              <h5>Currently Playing</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in sodales sem. In a orci dolor. Aenean semper venenatis velit, eget molestie eros malesuada sed. Integer in ullamcorper nibh. Morbi luctus arcu ac auctor accumsan. In maximus mi magna, ac volutpat metus porttitor quis. Mauris tristique pulvinar ultricies. Duis mollis nibh pulvinar erat aliquet elementum. Donec eget erat quis tellus iaculis rutrum at et mauris. Nam elementum nisi id est finibus rhoncus.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Installation;
