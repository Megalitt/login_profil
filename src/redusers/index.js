import { combineReducers, createStore, applyMiddleware } from "redux";
import formReduser from "./formReduser";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const rootReduser = combineReducers({
  forms: formReduser,
});

export const store = createStore(rootReduser, composeWithDevTools(applyMiddleware(thunk)))