import React from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

const Inventory = (props) => (
  <div className="inventory">
    <h2>Inventory</h2>
    {Object.keys(props.fishes).map(key => (
      <EditFishForm
        key={key}
        fishKey={key}
        fish={props.fishes[key]}
        updateFish={props.updateFish}
        deleteFish={props.deleteFish}
      />
    ))}
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSampleFishes}>Load Sample Fishes</button>
  </div>
);

export default Inventory;
