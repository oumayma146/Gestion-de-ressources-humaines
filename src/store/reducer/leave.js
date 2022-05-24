/* eslint-disable */
import { LEAVE, SEARCHLEAVE } from "../action/leave";
import { DELETELEAVE } from "../action/leave";

const initialState = {
  leaveList:[],
 NewLeaveList:[],
}
const leaveReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEARCHLEAVE:
            let NewLeaveList =[...state.leaveList];
            const resultLeave=NewLeaveList.filter(elem=>{
                return elem.user.name.includes(action.payload.name)
            })
            return {
                ...state,
                NewLeaveList: resultLeave,
            };
            
        case LEAVE:
            return {
                leaveList: action.payload.leaveList,
                NewLeaveList: action.payload.leaveList,
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

