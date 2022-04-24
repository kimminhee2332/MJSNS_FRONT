import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { 
  TESTCALL_REQUEST, 
  TESTCALL_SUCCESS, 
  TESTCALL_FALURE,
//
  GET_LOGIN_USER_REQUEST,
  GET_LOGIN_USER_SUCCESS,
  GET_LOGIN_USER_FALURE,
//
  GET_FRIENDS_REQUEST,
  GET_FRIENDS_SUCCESS,
  GET_FRIENDS_FAILURE,
//
  GET_FEED_REQUEST,
  GET_FEED_SUCCESS,
  GET_FEED_FAILURE,

}
   from "../reducers/user";

// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************
 function testAPI() {
   return axios.get(`http://localhost:4000/api/mj/list`);
 }

 function* test() {
   try {
     const result = yield call(testAPI);

     yield put({
       type: TESTCALL_SUCCESS,
       data: result.data,
     });
   } catch (err) {
     console.error(err);
     yield put({
       type: TESTCALL_FAILURE,
       error: err.response.data,
     });
   }
 }

// ******************************************************************************************************************
// ******************************************************************************************************************
// ******************************************************************************************************************
// SAGA AREA ********************************************************************************************************
// ******************************************************************************************************************


function getLoginUserAPI(data) {
  return axios.post(`http://localhost:4000/api/mj/get/one`, data);
}

function* getLoginUser(action) { //data를 action으로 받아옴
  try {
    const result = yield call(getLoginUserAPI, action.data);

    yield put({
      type: GET_LOGIN_USER_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_LOGIN_USER_FALURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************


function getFriendsAPI(data) {
  return axios.post(`http://localhost:4000/api/mj/get/friends`, data);
}

function* getFriends(action) {
  try {
    const result = yield call(getFriendsAPI, action.data);

    yield put({
      type: GET_FRIENDS_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_FRIENDS_FAILURE,
      error: err.response.data,
    });
  }
}

// ******************************************************************************************************************



function getFeedAPI(data) {
  return axios.post(`http://localhost:4000/api/mj/get/feedle`, data);
}

function* getFeed(action) {
  try {
    const result = yield call(getFeedAPI, action.data);

    yield put({
      type: GET_FEED_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_FEED_FAILURE,
      error: err.response.data,
    });
  }
}




// ******************************************************************************************************************

function* watchTestCall() {
   yield takeLatest(TESTCALL_REQUEST, test);
 }

 
function* watchGetLoginUser() {
  yield takeLatest(GET_LOGIN_USER_REQUEST, getLoginUser);
}


function* watchGetFriends() {
  yield takeLatest(GET_FRIENDS_REQUEST, getFriends);
}


function* watchGetFeed() {
  yield takeLatest(GET_FEED_REQUEST, getFeed);
}

//////////////////////////////////////////////////////////////
export default function* testSaga() {
  yield all([
     fork(watchTestCall),
     fork(watchGetLoginUser),
     fork(watchGetFriends),
     fork(watchGetFeed),
  ]);
}
