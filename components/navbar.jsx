import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    let navList;

    if (this.props.isAuth) {
      navList = (
        <li><a href='/users/logout'>Logout</a></li>
      )
    } else {
      navList = (
        <li><a href='/login'>Login</a></li>
      )
    }

    return (
      <nav>
        <div className="nav-wrapper indigo darken-4">
          <a href="#" className="brand-logo">Molecular Playground</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            {navList}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
