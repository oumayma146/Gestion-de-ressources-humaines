/* eslint-disable */
import { PERMISSION } from "../action/permission";
const initialState = {
   permissions:[],
}
const permissionReducer = (state = initialState, action) =>{
    switch (action.type) {
        case PERMISSION:
            return {
                permissions: action.payload.permission,
            };
        default:
            return state;
    }
}


export default  permissionReducer;