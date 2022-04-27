/* eslint-disable */
import { LEAVE } from "../action/leave";
import { DELETELEAVE } from "../action/leave";

const initialState = {
  leaveList:[],
 
}
const leaveReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LEAVE:
            return {
                leaveList: action.payload.leaveList,
            };
        case DELETELEAVE:
                let newLeaveList =[...state.leaveList];
                const result=newLeaveList.filter(elem=>{
              
            return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    leaveList: result,
                };
        default:
            return state;
    }
}


export default leaveReducer;

