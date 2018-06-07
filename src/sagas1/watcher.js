import { takeLatest } from 'redux-saga/effects';
import mySaga from './mysaga';

export default function* watchHeader() {
    yield takeLatest('GET_HEADER', mySaga);
}