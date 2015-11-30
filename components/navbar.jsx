import React, {Component} from 'react';

class Navbar extends Component {
  render() {
    let navOptions = [
      'Organization',
      'Installation',
      'Account',
      'Logout'
    ];
    let navList;

    if (this.props.isAuth) {
      navList = navOptions.map((item, index) => {
        return <li key={index}><a href='/users/logout'>{item}</a></li>;
      })
    } else {
      navList = <li><a href='/login'>Login</a></li>;
    }

    return (
      <nav>
        <div className="nav-wrapper indigo darken-4">
          <a href="#" className="brand-logo">Molecular Playground</a>
          <a href="#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            {navList}
          </ul>
          <ul className="side-nav" id='slide-out'>
            {navList}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;
