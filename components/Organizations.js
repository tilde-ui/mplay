import React, {Component} from 'react';

import {Link} from 'react-router';

class Organizations extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title black-text'>Organization Management</span>

          <div className='row'>
            <table>
              <thead>
                <tr>
                    <th>Organization Name</th>
                    <th>Date Created</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Org 1</td>
                  <td>1/1/2015</td>
                  <td>
                    <button className='btn'>Edit</button>
                  </td>
                  <td>
                    <button className='btn'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Org 2</td>
                  <td>9/5/2015</td>
                  <td>
                    <button className='btn'>Edit</button>
                  </td>
                  <td>
                    <button className='btn'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Org 3</td>
                  <td>11/2/2015</td>
                  <td>
                    <button className='btn'>Edit</button>
                  </td>
                  <td>
                    <button className='btn'>Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='row'>
            <Link to='/createOrganization'>
              <button className='btn'>Create New Organization</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Organizations;
