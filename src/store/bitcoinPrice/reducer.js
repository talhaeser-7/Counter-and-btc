import {
    GET_BITCOIN_PRICE_SUCCESS,
    GET_BITCOIN_PRICE_FAIL,

} from "./actionTypes";

const INIT_STATE = {
    data: [], 
    error: null,  
};

const BitcoinPrice = (state = INIT_STATE, action) => {
    switch (action.type) {
     
        case GET_BITCOIN_PRICE_SUCCESS:
            return {
               
                ...state,
                data: action.payload
            }
        //FAILS
        case GET_BITCOIN_PRICE_FAIL:
         return {
                ...state,
                error: action.payload.bpi
            }

        
        default:
            return state;
    }
}

export default BitcoinPrice;