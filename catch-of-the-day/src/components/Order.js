import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {

  renderOrderRow = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
    if (!fish) return;
    if (!isAvailable) {
      return (
        <li key={key}>Sorry {fish.name || 'fish'} is not longer available!</li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {formatPrice(count * fish.price)}
      </li>
    );
  }

  render() {

    const orderKeys = Object.keys(this.props.order);

    const total = orderKeys.reduce((total, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      return isAvailable ? (total + fish.price * count) : total;
    }, 0);

    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderKeys.map(this.renderOrderRow)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );

  }

}

export default Order;
