import { SET_ADMIN,SET_LOGIN } from "./UserTypes"
 export const checkAdmin=(value)=>{
    return {
        type:SET_ADMIN,
        payload:value
    }
}
export const checkLogIn=(value)=>{
    return{
        type:SET_LOGIN,
        payload:value
    }
}
