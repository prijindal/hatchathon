import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import reducer from './reducers';

export default function configureStore(onCompletion:()=>void):any {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(
    autoRehydrate(),
  );

  const store = createStore(reducer, enhancer);
  persistStore(store, {blacklist: ['tutorials']}, onCompletion);

  return store;
}
