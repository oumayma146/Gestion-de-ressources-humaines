/* eslint-disable */
import { DELETEINSTRUCTOR, INSTRUCTOR, NAME } from "../action/instructor";

const initialState = {
    instructorList:[],
    nameList:[],
}
const instructorReducer = (state = initialState, action) =>{
    switch (action.type) {
        case INSTRUCTOR:
            return {
                instructorList: action.payload.instructorList,

            };
        case NAME:
            
                return {
                       ...state,
                       nameList: action.payload.nameList,
       
                   };     

        case DELETEINSTRUCTOR:
                let newInstructorList =[...state.instructorList];
                const result=newInstructorList.filter(elem=>{
              
            return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    instructorList: result,
                };
        default:
            return state;
    }
}


export default instructorReducer;