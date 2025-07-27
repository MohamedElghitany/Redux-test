import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import './api/server'
import store from './store'

// console.log('initail state',store.getState());
// const unsubscribe = store.subscribe(() => {
//   console.log('state after dispatch', store.getState());
// });

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn actions Redux' });
// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn reducers Redux' });
// store.dispatch({type:'todos/todoAdded',payload:'Learn selectors Redux'});

// store.dispatch({type:'todos/todoToggled',payload:1});
// store.dispatch({type:'todos/todoToggled',payload:5});

// store.dispatch({type:'filters/statusFilterChanged',payload:'Active'});
// store.dispatch({type:'filters/colorFilterChanged',payload:{color:'red',ChangeType:'added'}});

// unsubscribe();

// store.dispatch({ type: 'todos/todoAdded', payload: 'Learn React 22' });
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
