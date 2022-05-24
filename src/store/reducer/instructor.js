/* eslint-disable */
import { DELETEINSTRUCTOR, INSTRUCTOR, NAME, SEARCHINSTRUCTOR } from "../action/instructor";

const initialState = {
    instructorList:[],
    nameList:[],
    NewInstructorList:[],
}
const instructorReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEARCHINSTRUCTOR:
    
            let NewInstructorList =[...state.instructorList];
            const resultinstructor=NewInstructorList.filter(elem=>{
                return elem.nom.includes(action.payload.name)
            })
            return {
                ...state,
                NewInstructorList: resultinstructor,
            };
        case INSTRUCTOR:
            return {
                ...state,
                instructorList: action.payload.instructorList,
                NewInstructorList: action.payload.instructorList,

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