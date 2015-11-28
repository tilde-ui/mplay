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
        </head>
        <body>
          <Navbar />
          {this.props.children}
        </body>
      </html>
    )
  }
}

export default Layout;
