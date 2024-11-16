import { createStore } from "redux";
import rootReducer from "./reducer/rootReducer";

let store = createStore(rootReducer);

export default store;
