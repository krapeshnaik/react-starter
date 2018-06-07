import { fork } from 'redux-saga/effects';
import apiWatcher from './components/Header/header.sagas';

export default function* startHeader() {
    // array and yield them at once if we have more than one
    yield fork(apiWatcher);
}