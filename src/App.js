import React from 'react';
import FormPage from './pages/Form/Form'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './App.scss';
import {reducer} from "./action/actionCreators";

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

function App() {
  return (
      <Provider store={store}>
          <div className='App'>
              Hello!
              <FormPage />
          </div>
      </Provider>
  );
}

export default App;
