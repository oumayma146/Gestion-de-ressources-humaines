/* eslint-disable */
import { EMPLOYEE, DELETEEMPLOYEE, EMPLOYEEINFO } from "../action/Employee";

const initialState = {
    employeeList:[],
    EmployeeInfos:null,
}
const employeeReducer = (state = initialState, action) =>{
    switch (action.type) {
        case EMPLOYEE:
            return {
                employeeList: action.payload.employeeList,

            };
         case DELETEEMPLOYEE:
                let newEmployeeList =[...state.employeeList];
                const result=newEmployeeList.filter(elem=>{
              
            return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    adsList: result,
                };
                case EMPLOYEEINFO:
                    console.log("hi",action.payload.EmployeeInfo);
                    return {
                        ...state,
                        EmployeeInfos: action.payload.EmployeeInfo,
        
                    };   
        
        default:
            return state;
    }
}


export default employeeReducer;