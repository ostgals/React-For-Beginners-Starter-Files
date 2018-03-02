import React from 'react';
import { formatPrice } from '../helpers';

class FishCard extends React.Component {
  render() {
    const fish = this.props.details;
    const isAvailable = fish.status === 'available';
    return (
      <li className="menu-fish">
        <img src={fish.image} alt={fish.name} />
        <h3 className="fish-name">
          {fish.name}
          <span className="price">{formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button
          disabled={!isAvailable}
          onClick={() => this.props.addToOrder(this.props.fishId)}
        >{isAvailable ? 'Add To Cart' : 'Sold Out!'}</button>
      </li>
    )
  }
}

export default FishCard
