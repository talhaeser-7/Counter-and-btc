import { call, put, takeEvery } from "redux-saga/effects";

// Crypto Redux States
import {GET_BITCOIN_PRICE} from "./actionTypes";
import {
    getBitcoinPriceSuccess, getBitcoinPriceFail,
 } from "./actions";


import {
    getBitcoinPrice, //API CONNECTION
}
    from "../../helpers/fakebackend_helper"; 


function* fetchBitcoinPrice() {
    try {
        const response = yield call(getBitcoinPrice)
        yield put(getBitcoinPriceSuccess(response));
    } catch (error) {
        yield put(getBitcoinPriceFail(error));
    }
}

export function* brandsSaga() {
    yield takeEvery(GET_BITCOIN_PRICE, fetchBitcoinPrice); 
}

export default brandsSaga;
