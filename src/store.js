import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {offline} from '@redux-offline/redux-offline';
import offlineConfig from '@redux-offline/redux-offline/lib/defaults';
import reducers from './reducers';

let storeInstance;

export default function() {
  if (storeInstance) {
    return storeInstance;
  }

  const configOffline = {
    ...offlineConfig,
    rehydrate: true,
    persistOptions: {
      whitelist: [],
    },
  };

  storeInstance = createStore(
    reducers,
    {},
    compose(
      applyMiddleware(thunkMiddleware),
      offline(configOffline),
    ),
  );

  return storeInstance;
}
