import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";
import { 
  TESTCALL_REQUEST, 
  TESTCALL_SUCCESS, 
  TESTCALL_FALURE }
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

function* watchTestCall() {
   yield takeLatest(TESTCALL_REQUEST, test);
 }

//////////////////////////////////////////////////////////////
export default function* userSaga() {
  yield all([
     fork(watchTestCall),
    
  ]);
}
