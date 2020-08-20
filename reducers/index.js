import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import fetchhomeReducer from './fetchhomeReducer';


const fetchPersistConfig = {
  key: 'fetch',
  storage,
  stateReconciler: autoMergeLevel2,
};


const rootReducer = combineReducers({
  fetch: persistReducer(fetchPersistConfig, fetchhomeReducer),

  
});

export default rootReducer;
