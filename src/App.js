import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import myContext from './contextApi';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.moveCar = this.moveCar.bind(this);
    this.changeSignal = this.changeSignal.bind(this);
    this.state = {
      cars: {
        redCar: false,
        blueCar: false,
        yellowCar: false,
      },
      signalColor: 'red',
    };
  }

  moveCar(carColor, status) {
    this.setState((state) => ({ ...state, cars: { ...state.cars, [`${carColor}Car`]: status } }));
  }

  changeSignal(color) {
    this.setState((state) => ({ ...state, signalColor: color }));
  }

  render() {
    const { Provider } = myContext;
    return (
      <Provider value={ { ...this.state, moveCar: this.moveCar, changeSignal: this.changeSignal } }>
        <div className="container">
          <Cars />
          <TrafficSignal />
        </div>
      </Provider>
    );
  }
}

export default App;
