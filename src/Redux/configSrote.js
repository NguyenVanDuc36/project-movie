import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
const rootReducer = combineReducers({
    // state ứng dụng
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()