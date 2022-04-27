/* eslint-disable */
import { ADS, DELETEADS } from "../action/ads";
import { LANG, SKILL } from "../action/configuration";

const initialState = {
    langugeList:[],
    skillList:[],
}
const ConfigurationReducer = (state = initialState, action) =>{
    switch (action.type) {
        case LANG:
            return {
                ...state,
                langugeList: action.payload.langugeList,

            };
         case SKILL:
            return {
                ...state,
                skillList: action.payload.skillList,
    
                };    
         case DELETEADS:
                let newAdsList =[...state.adsList];
                const result=newAdsList.filter(elem=>{
              
            return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    adsList: result,
                };
        
        default:
            return state;
    }
}


export default ConfigurationReducer;