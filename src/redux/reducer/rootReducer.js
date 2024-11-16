import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const rootReducer = combineReducers({
CartReducer, // Assigning a key to CartReducer
});

export default rootReducer;
