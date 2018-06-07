import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';

// Worker
function* getResponse() {
    try {
        const posts = yield call(getJSON);
        console.log(posts);

        yield put({
            type: 'API_RESPONSE',
            data: 'got header'
        });
    } catch (error) {
        yield put({
            type: 'API_ERROR'
        });
    }
}

const getJSON = () => {
    return axios
        .get('https://jsonplaceholder.typicode.com/posts')
}

// Watcher
export default function* apiWatcher() {
    yield takeLatest('API_REQUEST', getResponse);
}