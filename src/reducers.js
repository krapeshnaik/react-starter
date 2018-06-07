import { combineReducers } from 'redux';

import HeaderReducer from './components/Header/header.reducer';

export default combineReducers({
    header: HeaderReducer
});