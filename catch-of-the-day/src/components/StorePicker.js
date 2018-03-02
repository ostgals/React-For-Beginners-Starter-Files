import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

  refStoreName = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.refStoreName.value.value;
    if (storeName) {
      this.props.history.push(`/store/${storeName}`);
    }
  }

  render() {
    return (
      <form action="" className="store-selector" onSubmit={this.goToStore}>
        <h2>Enter a Store Name</h2>
        <input
          type="text"
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          ref={this.refStoreName}
        />
        <button type="submit">Visit Store ➡</button>
      </form>
    )
  }
}

export default StorePicker;

