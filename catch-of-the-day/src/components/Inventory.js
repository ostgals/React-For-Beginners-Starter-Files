import React from 'react';
import FishForm from './FishForm';

const Inventory = (props) => (
  <div className="inventory">
    <h2>Inventory</h2>
    <FishForm addFish={props.addFish} />
  </div>
);

export default Inventory;
