/* eslint-disable */
import { DELETEROLE, NAME, ROLE, SEARCHROLE} from "../action/role";
const initialState = {
    roleList:[],
    nameList:[],
    NewroleList:[],
 
}
const roleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEARCHROLE:
          
            let NewroleList =[...state.roleList];
            const resultRole=NewroleList.filter(elem=>{
                return elem.name.includes(action.payload.name)
            })
            return {
                ...state,
                NewroleList: resultRole,
            };
        case ROLE:
            return {
                ...state,
                roleList: action.payload.roleList,
                NewroleList: action.payload.roleList,

            };
        case NAME:
            
             return {
                    ...state,
                    nameList: action.payload.nameList,
                    NewnameList: action.payload.nameList,
    
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