/* eslint-disable */
import { DELETESALARY, SALARY} from "../action/salary";
const initialState = {
   salaryList:[],
 
}
const salaryReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SALARY:
            return {
                salaryList: action.payload.salaryList,

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