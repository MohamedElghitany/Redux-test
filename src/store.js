import {createStore,applyMiddleware} from 'redux';
import rootReducer from './reducer';
import{composeWithDevTools} from 'redux-devtools-extension';

//import { sayHiOnDispatch ,includeMeaningOfLife} from './exampleAddons/enhancers';
import { print1,print2,print3,mymiddleware ,sayHelloOnDispatch} from './exampleAddons/middleware';


let preloadedState ;

const persitedTodoString = localStorage.getItem('todos');
if (persitedTodoString) {
    preloadedState = {
        todos: JSON.parse(preloadedState)
    }
}
const composedEnhancer = composeWithDevTools(
    applyMiddleware(print1,print2,print3,mymiddleware,sayHelloOnDispatch)
);
//const composedEnhancer= compose(sayHiOnDispatch,includeMeaningOfLife);

const store = createStore(rootReducer,preloadedState,composedEnhancer);

export default store;
