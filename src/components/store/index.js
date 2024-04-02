import {createStore} from 'redux';

const redux = require('redux');

const counterRedux = (state = { counter: 0 }, action) => {

  if (action.type === 'incremen'){
    return{
      couner: state.counter + 1
    }
  }

  if (action.type === 'decremen'){
    return{
      couner: state.counter - 1
    }
  }
  return state;
}

const store = createStore(counterRedux);

export default store;

// store.dispatch('increment')
// store.dispatch('decrement')