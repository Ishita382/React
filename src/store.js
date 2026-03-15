import counterReducer from "./redux/reducer";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  counterReducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
