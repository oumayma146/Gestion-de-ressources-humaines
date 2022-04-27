/* eslint-disable */
import { LOGIN, TOKEN } from "../action/auth";
const initialState = {
   token:null,
    role:[],
    //sidebarShow: true,
}
const authReducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN:
            return{
                token:action.payload.token,
                role:action.payload.role,
            };
            case TOKEN:
                return{
                    ...state,
                    token:action.token,
                   
                };    
        default:
            return state;
    }
}


export default authReducer;