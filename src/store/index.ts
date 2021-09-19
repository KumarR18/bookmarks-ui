
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from "redux";
import reducers from './reducers/index';
import thunk from "redux-thunk";

const configureStore = (preloadedState: any) =>
    createStore(reducers, preloadedState, composeWithDevTools(applyMiddleware(thunk)));

export default configureStore;
