import React, {Component, Children} from 'react';

import Navigation from './Navigation';

// import '../styles/style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      role: 'author'
    }
  }

  componentWillMount() {
    $(".button-collapse").sideNav();
  }

  changeRole(newRole) {
    this.setState({
      role: newRole
    })
  }

  render() {
    let childrenWithProps = Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {changeRole: this.changeRole.bind(this), role: this.state.role})
    })

    return (
      <div id='backdrop'>
        <Navigation />
        <div className='container' style={{marginTop: 20}}>
          {childrenWithProps}
        </div>
      </div>
    )
  }
}

export default App;
