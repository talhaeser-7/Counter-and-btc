import { all, fork } from "redux-saga/effects"

import BitcoinPriceSaga from "./bitcoinPrice/saga"

export default function* rootSaga() {
    yield all([
      fork(BitcoinPriceSaga),
    ])
  }
  