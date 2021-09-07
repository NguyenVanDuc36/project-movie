import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { CarouselReducer } from './reducers/CarouselReducer';
import { danhSachPhimReducer } from './reducers/HomeReducer';
import { HeThongRapReducer } from './reducers/QuanLyRapReducer';
const rootReducer = combineReducers({
    CarouselReducer,
    danhSachPhimReducer,
    HeThongRapReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));
//,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()