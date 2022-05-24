/* eslint-disable */
import { ADS, DELETEADS, SEARCHADS } from "../action/ads";

const initialState = {
    adsList:[],
    NewadsList:[],
 
}
const adsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case SEARCHADS:
         
            let NewadsList =[...state.adsList];
            const resultAds=NewadsList.filter(elem=>{
                return elem.titre.includes(action.payload.name)
            })
            return {
                ...state,
                NewadsList: resultAds,
            };
        case ADS:
            return {
                adsList: action.payload.adsList,
                NewadsList: action.payload.adsList,

            };
         case DELETEADS:
                let newAdsList =[...state.adsList];
                const result=newAdsList.filter(elem=>{
              
            return elem.id!=action.payload.id
                })
       
                return {
                    ...state,
                    NewadsList: result,
                };
        
        default:
            return state;
    }
}


export default adsReducer;