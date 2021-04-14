import React from 'react';
import PropTypes from 'prop-types';
import redSignal from './images/redSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import myContext from './contextApi';

const renderSignal = (signalColor) => {
  if (signalColor === 'red') return redSignal;
  if (signalColor === 'yellow') return yellowSignal;
  if (signalColor === 'green') return greenSignal;
  return null;
};

const TrafficSignal = () => {
  const { Consumer } = myContext;
  return (
    <Consumer>
      { (stateContext) => {
        const { signalColor, changeSignal } = stateContext;
        return (
          <div>
            <div className="button-container">
              <button onClick={() => changeSignal('red')} type="button">
                Red
              </button>
              <button onClick={() => changeSignal('yellow')} type="button">
                Yellow
              </button>
              <button onClick={() => changeSignal('green')} type="button">
                Green
              </button>
            </div>
            <img className="signal" src={renderSignal(signalColor)} alt="" />
          </div>
        );
      }}
    </Consumer>
  );
};

TrafficSignal.propTypes = {
  changeSignal: PropTypes.func.isRequired,
  signalColor: PropTypes.string.isRequired,
};

export default TrafficSignal;
