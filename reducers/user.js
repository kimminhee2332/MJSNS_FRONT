import produce from "immer";

export const initState = {
  st_testCallLoading : false,
  st_testCallDone : false,
  st_testCallError : null,
  mjlist : null,
};


export const TESTCALL_REQUEST = "TESTCALL_REQUEST";
export const TESTCALL_SUCCESS = "TESTCALL_SUCCESS";
export const TESTCALL_FALURE = "TESTCALL_FALURE";

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
      draft.st_testCallError = "에러를 저장할꺼야!";
        break;
        
      default:
        break;
    }
  });

export default reducer;
