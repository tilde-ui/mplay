import React, {Component} from 'react';
import Layout from './layout';

class Error extends Component {
  redner() {
    return (
      <Layout>
        <h1>{this.props.message}</h1>
        <h2>{this.props.error.status}</h2>
      </Layout>
    )
  }
}
