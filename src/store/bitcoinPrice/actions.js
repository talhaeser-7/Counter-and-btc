import {
    GET_BITCOIN_PRICE,
    GET_BITCOIN_PRICE_SUCCESS,
    GET_BITCOIN_PRICE_FAIL,  
} from "./actionTypes";

export const getBitcoinPrice = () => ({
    type: GET_BITCOIN_PRICE,
});

export const getBitcoinPriceSuccess = (brand) => ({
    type: GET_BITCOIN_PRICE_SUCCESS,
    payload: brand,
});

export const getBitcoinPriceFail = (error) => ({ 
    type: GET_BITCOIN_PRICE_FAIL,
    payload: error,
});
