import React, {Component} from 'react';

class AdvancedSearch extends Component {
  render() {
    return (
      <div className='card'>
        <div className='card-content'>
          <span className='card-title black-text'>Advanced Search</span>
          <div className='row'>
            <div className='input-field col m3'>
              <input className='validate' type='text' placeholder='Keywords' />
            </div>
            <div className='input-field col m2'>
              <input className='validate' type='text' placeholder='Author' />
            </div>
            <div className='input-field col m2'>
              <select className='browser-default' defaultValue='1'>
                <option value="1">Molecule</option>
                <option value="2">Scene</option>
                <option value="3">Playlist</option>
              </select>
            </div>
            <div className='input-field col m3'>
              <input className='datepicker' type='date' />
            </div>
            <div className='input-field col m2'>
              <button className='btn' style={{width: '100%'}}>Search</button>
            </div>
          </div>
          <div className='row'>
            <table>
              <thead>
                <tr>
                    <th>Molecule</th>
                    <th>Author</th>
                    <th>Date Uploaded</th>
                    <th>Import</th>
                    <th>Delete</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Molecule 1</td>
                  <td>Steve</td>
                  <td>1/1/2015</td>
                  <td>
                    <button className='btn'>Import</button>
                  </td>
                  <td>
                    <button className='btn'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Scene 2</td>
                  <td>Sue</td>
                  <td>9/5/2015</td>
                  <td>
                    <button className='btn'>Import</button>
                  </td>
                  <td>
                    <button className='btn'>Delete</button>
                  </td>
                </tr>
                <tr>
                  <td>Playlist 1</td>
                  <td>John</td>
                  <td>11/2/2015</td>
                  <td>
                    <button className='btn'>Import</button>
                  </td>
                  <td>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default AdvancedSearch;
