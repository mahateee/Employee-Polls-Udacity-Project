import { legacy_createStore as createStore } from "redux";
import { rootReducer } from "./reducers/index";
import middleware from "./middleware";

export const store = createStore(rootReducer, middleware);
