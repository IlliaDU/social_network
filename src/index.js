import './index.css';
import store from './redux/redux-store'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';




/* let rerender = (state) => { */

   ReactDOM.render(
      <browserRouter>
      <Provider store={store}>
         <App /* state={state} dispatch={store.dispatch.bind(store)} store={store} *//>
      </Provider>
      </browserRouter>,
      document.getElementById('root')
   )
   
/* rerender(store.getState( ))

store.subscribe(() => {
   let state = store.getState();
   rerender(state);
}) */

