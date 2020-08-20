import { fork } from 'redux-saga/effects';
import fetchlistSaga from './fetchlistSaga';


function* rootSaga() {
  yield fork(fetchlistSaga);

}

export default rootSaga;
