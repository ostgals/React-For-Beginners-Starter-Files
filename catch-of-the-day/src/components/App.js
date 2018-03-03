import React from 'react';
import base from '../base';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import FishCard from './FishCard';

import sampleFishes from '../sample-fishes';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  }
  componentDidMount() {
    const { storeId } = this.props.match.params;
    this.dataRef = base.syncState(`${storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }
  componentWillUnmount() {
    base.removeBinding(this.dataRef);
  }
  addFish = (fish) => {
    const fishes = {...this.state.fishes};
    fishes[`fish${Date.now()}`] = fish;
    this.setState({ fishes });
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  }
  addToOrder = (key) => {
    const order = {...this.state.order}
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <FishCard
                key={key}
                details={this.state.fishes[key]}
                fishId={key}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
        />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;

