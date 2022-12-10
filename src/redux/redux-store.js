import {combineReducers, legacy_createStore as createStore} from "redux";
import salesReducer from "./sales-reduce";

const rootReducer = combineReducers({
    reducer: salesReducer
});

const store = createStore(rootReducer);

export default store;