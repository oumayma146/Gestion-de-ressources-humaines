/* eslint-disable */
import { DELETEROLE, NAME, ROLE} from "../action/role";
const initialState = {
    roleList:[],
    nameList:[],
 
}
const roleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ROLE:
            return {
                ...state,
                roleList: action.payload.roleList,

            };
        case NAME:
            
             return {
                    ...state,
                    nameList: action.payload.nameList,
    
                };    
            case DELETEROLE:
                let newRoleList =[...state.roleList];
                const result=newRoleList.filter(elem=>{
              
                    return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    roleList: result,
                };
        default:
            return state;
    }
}


export default roleReducer;