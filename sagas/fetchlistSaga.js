import { takeLatest, put,call } from 'redux-saga/effects';
import storage from 'redux-persist/lib/storage';

import _ from 'lodash';


import Home from '../service/home';


function* fetchlistTask(action) {
  try {
    yield put({
      type: 'FETCHLIST_LOADING',
    });
    const { payload } = action;
    //this was given in mail for hitting api 
   const authToken ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNhNDQ1ODg5LTA4MTctNGI2Yi05ZWFiLWRiZmE1ODJjNDJiMSIsImZpcnN0X25hbWUiOiJKaWdhciIsImxhc3RfbmFtZSI6Ik0iLCJsYW5ndWFnZSI6WyJFbmdsaXNoIl0sImVtYWlsIjoiZGV2LmppZ2FydkBnbWFpbC5jb20iLCJ1c2VybmFtZSI6ImRldi5qaWdhcnZAZ21haWwuY29tIiwidXNlcl9zdGF0dXMiOiJQZW5kaW5nIiwiZGV2aWNlX3R5cGUiOiJtb2JpbGUiLCJkZXZpY2VfaWQiOiJkYzI1NTBhYS0zZjYwLTRkMDgtODgyOS1hMmFkNjY3NDg1YWQiLCJpc19zZXJ2aWNlX3Byb3ZpZGVyIjpmYWxzZSwiaXNfYWNjb3VudF9tYW5hZ2VyIjpmYWxzZSwiaXNfZXhlY3V0aXZlX2FjY291bnRfbWFuYWdlciI6ZmFsc2UsImlzX3NlcnZpY2VfcHJvdmlkZXJfZW1wbG95ZWUiOmZhbHNlLCJhY3RpdmVfcm9sZSI6ImN1c3RvbWVyIiwicm9sZSI6eyJ1c2VyX3JvbGVfaWQiOiIzYTRhNmYzNi0zMzA5LTRmYTMtYWJlOC01OTg2Y2NhYzE0NGEiLCJyb2xlX25hbWUiOiJjdXN0b21lciIsInJvbGVfaWQiOiIzODQ5OWY4NC1lNGYzLTQ2ZTAtOTI3MC02NzNjNWJkZjgxMWIifSwidGVuYW50Ijp7ImlkIjpudWxsfSwiaWF0IjoxNTk1MzU4MTYwLCJleHAiOjMxOTA3MTY5MjAsImF1ZCI6ImhpcmVhc2FwLmNvbSIsImlzcyI6ImFjY291bnRzLmhpcmVhc2FwLmNvbSJ9.MMnrmnUGzeWFB7KZiBSVBibY8pZ9nPf2MQTlyw5LP4k';
    const res = yield call(Home.getHomeListing, {
      Authorization: `Bearer ${authToken}`,
    });
    //const res = yield call(Home.getHomeListing);
    if (res.status === 200) {


      yield put({
        type: 'FETCHLIST_SUCCESS',
        payload: res.data,
      });
    } else {
      yield put({
        type: 'FETCHLIST_ERROR',
        payload: res.data,
      });
    }
  } catch (e) {
    console.log(e);
    const payload = typeof e === 'string' ? { message: e } : e.data;
    yield put({
      type: 'FETCHLIST_ERROR',
      payload: e,
    });
  }
}


function* fetchlistSaga() {

   yield takeLatest('FETCH', fetchlistTask);


}

export default fetchlistSaga;
