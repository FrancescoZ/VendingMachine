import React from 'react';
import { Provider } from 'react-redux';
import Machine from './machine/machine';
import './styles.scss'

function Root({ store }) {
  return (
    <div className='vending-root'>
      <Provider store={ store }>
        <Machine/>
      </Provider>
    </div>
  );
}

Root.propTypes = {
  store: React.PropTypes.object.isRequired
};

export default Root;
