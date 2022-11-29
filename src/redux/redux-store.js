import { configureStore } from "@reduxjs/toolkit";
import { applyMiddleware, combineReducers, createStore } from 'redux';
import authReducer from "./auth-reducer";
import contentReducer from "./content-reducer";
import dialogReducer from "./dialog-reducer";
import usersReducer from "./users-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
    contentPage: contentReducer,
    dialogPage: dialogReducer,
    usersPage: usersReducer,
    auth: authReducer
});



let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store; 


