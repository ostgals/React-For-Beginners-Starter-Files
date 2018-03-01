import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store-selector">
        <h2>Enter a Store Name</h2>
        <input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
        <button type="submit">Visit Store ➡</button>
      </form>
    )
  }
}

export default StorePicker;

