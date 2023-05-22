import { SET_LOGIN,SET_ADMIN } from "./UserTypes"
const initialState={IsLoggedIn:false,IsAdmin:false}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_ADMIN:
            return {...state,IsAdmin:action.payload}
            break;
        case SET_LOGIN:
            return {...state, IsLoggedIn:action.payload}
            break;
        default:
            return initialState;
    }
}
export default reducer;