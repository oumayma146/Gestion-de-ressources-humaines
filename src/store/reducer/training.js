/* eslint-disable */
import { DELETETRAINING, INSTRUCTORINFO, SEARCHTRAINING, TRAINING } from "../action/training";
const initialState = {
    trainingList:[],
    InstructorInfo:[],
    NewtrainingList:[],
}
const trainingReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEARCHTRAINING:
   
            let NewtrainingList =[...state.trainingList];
            const resultTrainig=NewtrainingList.filter(elem=>{
                return elem.titre.includes(action.payload.name)
            })
            return {
                ...state,
                NewtrainingList: resultTrainig,
            };
        case TRAINING:
            return {
                ...state,
                trainingList: action.payload.trainingList,
                NewtrainingList: action.payload.trainingList,

            };
         case DELETETRAINING:
                let newTrainingList =[...state.trainingList];
                const result=newTrainingList.filter(elem=>{
              
            return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    trainingList: result,
                    NewtrainingList: result,
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