// import { takeEvery, put, select, debounce } from 'redux-saga/effects';
// import numberValidator from '../../Logic/numberValidator'
// import * as CONSTANTS from '../../constants/_constants';
// import * as actionTypes from '../actionTypes';
// import axios from 'axios';

// function* updatePaymentsLists() {
//   yield put({ type: actionTypes.IS_REFRESHING, payload: true });

//   const payload = yield axios
//     .get(CONSTANTS.PAY_METHODS_URI)
//     .then(res => res)
//     .catch(e => {
//     console.log(e);
//     return;
//   });

//   yield put({ type: actionTypes.UPDATE_WITHDRAWALS_LIST, payload: [ ...payload.data.withdraw ] });
//   yield put({ type: actionTypes.UPDATE_INVOICES_LIST, payload: [ ...payload.data.invoice ] });
//   yield put({ type: actionTypes.IS_REFRESHING, payload: false });
// }

export default function* sagaWatcher() {
  // // eslint-disable-next-line no-unused-vars
  // const action = yield debounce(CONSTANTS.DEBOUNCE_TIMER, actionTypes.RATE_REFRESH, rateRefresh);
  // // eslint-disable-next-line no-unused-vars
  // const actionCalculate = yield takeEvery(actionTypes.CALCULATE, calculate)
  // // eslint-disable-next-line no-unused-vars
  // const actionBid = yield takeEvery(actionTypes.BID, bid)
  // yield takeEvery(actionTypes.UPDATE_PAYMENTS_LIST, updatePaymentsLists)
  // yield takeEvery(actionTypes.UPDATE_CALCULATIONS, isEmptyAmounts)
  // yield takeEvery(actionTypes.CALCULATE, isEmptyAmounts)
}