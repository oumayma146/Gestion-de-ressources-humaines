/* eslint-disable */
import { DELETETRAINING, INSTRUCTORINFO, TRAINING } from "../action/training";
const initialState = {
    trainingList:[],
    InstructorInfo:[],
}
const trainingReducer = (state = initialState, action) =>{
    switch (action.type) {
        case TRAINING:
            return {
                ...state,
                trainingList: action.payload.trainingList,

            };
         case DELETETRAINING:
                let newTrainingList =[...state.trainingList];
                const result=newTrainingList.filter(elem=>{
              
            return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    trainingList: result,
                };
        case INSTRUCTORINFO:
            return {
             
                ...state,
                InstructorInfo: action.payload.InstructorInfoo,

            };
        default:
            return state;
    }
}


export default trainingReducer;