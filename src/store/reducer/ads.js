/* eslint-disable */
import { ADS, DELETEADS } from "../action/ads";

const initialState = {
    adsList:[],
 
}
const adsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADS:
            return {
                adsList: action.payload.adsList,

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


export default adsReducer;