/* eslint-disable */
import { DELETESALARY, SALARY, SEARCHSALARY} from "../action/salary";
const initialState = {
   salaryList:[],
 NewSalaryList:[],
}
const salaryReducer = (state = initialState, action) =>{
    switch (action.type) {
       
        case SEARCHSALARY:
           
            let NewSalaryList =[...state.salaryList];
            const resultsalary=NewSalaryList.filter(elem=>{
                return elem.user.name.includes(action.payload.name)
            })
            return {
                ...state,
                NewSalaryList: resultsalary,
            };
        case SALARY:
            return {
                ...state,
                salaryList: action.payload.salaryList,
                NewSalaryList: action.payload.salaryList,

            };
            case DELETESALARY:
                let newSalaryList =[...state.salaryList];
                const result=newSalaryList.filter(elem=>{
              
                    return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    salaryList: result,
                };
        default:
            return state;
    }
}


export default salaryReducer;