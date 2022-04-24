import produce from "immer";

export const initState = {
  userList: [],
  me: null,
  friends: [],
  feed : [],

  st_testCallLoading : false,
  st_testCallDone : false,
  st_testCallError : null,
  
  getLoginUserLoading : false,
  getLoginUserSuccess : false,
  getLoginUserFalure : null,
  
  st_getFriendsLoading: false,
  st_getFriendsDone: false,
  st_getFriendsError: null,
  
  st_getFeedLoading: false,
  st_getFeedDone: false,
  st_getFeedError: null,
  mjlist : null,
};


export const TESTCALL_REQUEST = "TESTCALL_REQUEST";
export const TESTCALL_SUCCESS = "TESTCALL_SUCCESS";
export const TESTCALL_FALURE = "TESTCALL_FALURE";

export const GET_LOGIN_USER_REQUEST = "GET_LOGIN_USER_REQUEST";
export const GET_LOGIN_USER_SUCCESS = "GET_LOGIN_USER_SUCCESS";
export const GET_LOGIN_USER_FALURE = "GET_LOGIN_USER_FALURE";

export const GET_FRIENDS_REQUEST = "GET_FRIENDS_REQUEST";
export const GET_FRIENDS_SUCCESS = "GET_FRIENDS_SUCCESS";
export const GET_FRIENDS_FAILURE = "GET_FRIENDS_FAILURE";

export const GET_FEED_REQUEST = "GET_FEED_REQUEST";
export const GET_FEED_SUCCESS = "GET_FEED_SUCCESS";
export const GET_FEED_FAILURE = "GET_FEED_FAILURE";

const reducer = (state = initState, action) =>
  produce(state, (draft) => {
    switch (action.type) {

      case TESTCALL_REQUEST: 
        draft.st_testCallLoading = true;
        draft.st_testCallDone = false;
        draft.st_testCallError = null;
        break;
        
      case TESTCALL_SUCCESS: 
      draft.st_testCallLoading = false;
      draft.st_testCallDone = true;
      draft.st_testCallError = null;
      draft.mjlist = action.data;
      break;
      
      case TESTCALL_FALURE: 
      draft.st_testCallLoading = false;
      draft.st_testCallDone = false;
      draft.st_testCallError = "에러를 저장할꺼야!"; //action.error
        break;
        
      //////////////////////////////////////////////////////


      case GET_LOGIN_USER_REQUEST: 
        draft.getLoginUserLoading = true;
        draft.getLoginUserDone = false;
        draft.getLoginUserError = null;
        break;
        
      case GET_LOGIN_USER_SUCCESS: 
      draft.getLoginUserLoading = false;
      draft.getLoginUserDone = true;
      draft.getLoginUserError = null;
      draft.me = action.data;
      break;
      
      case GET_LOGIN_USER_FALURE: 
      draft.getLoginUserLoading = false;
      draft.getLoginUserDone = false;
      draft.getLoginUserError = "에러를 저장할꺼야!"; //action.error
        break;
        
      //////////////////////////////////////////////////////
      
    
      case GET_FRIENDS_REQUEST: 
        draft.st_testCallLoading = true;
        draft.st_testCallDone = false;
        draft.st_testCallError = null;
        break;
        
      case GET_FRIENDS_SUCCESS: 
        draft.st_testCallLoading = false;
        draft.st_testCallDone = true;
        draft.st_testCallError = null;
        draft.friends = action.data;
        break;
      
      case GET_FRIENDS_FAILURE: 
        draft.st_testCallLoading = false;
        draft.st_testCallDone = false;
        draft.st_testCallError = "에러를 저장할꺼야!"; //action.error
        break;
      ////////////////////////////////////////////////////////////////////


      case GET_FEED_REQUEST: 
        draft.st_getFeedLoading = true;
        draft.st_getFeedDone = false;
        draft.st_getFeedError = null;
        break;
      
      case GET_FEED_SUCCESS: 
        draft.st_getFeedLoading = false;
        draft.st_getFeedDone = true;
        draft.st_getFeedError = null;
        draft.feed = action.data;
        break;
      
      case GET_FEED_FAILURE: 
        draft.st_getFeedLoading = false;
        draft.st_getFeedDone = false;
        draft.st_getFeedError = "에러를 저장할꺼야!"; //action.error
        break;
    ////////////////////////////////////////////////////////////////////

      default:
        break;
    }
  });

export default reducer;
