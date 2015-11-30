import React, {Component} from 'react';
import Navbar from './navbar';

class Layout extends Component {
  render() {
    return (
      <html>
        <head>
          <title>Molecular Playground</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.1/css/materialize.min.css" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel='stylesheet' href='/stylesheets/style.css' />
        </head>
        <body>
          <Navbar isAuth={this.props.isAuth} />
          <div className='container'>
            {this.props.children}
          </div>
          <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.3/js/materialize.min.js"></script>
          <script src='/javascripts/initialize.js'></script>
        </body>
      </html>
    )
  }
}

export default Layout;
