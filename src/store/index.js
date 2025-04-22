import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "./reducer/index";

// Create the store and persistor
const store = createStore(rootReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

// Assign to a named object before exporting (ESLint fix)
const reduxSetup = { store, persistor };
export default reduxSetup;

// Optionally, also export them individually
export { store, persistor };
