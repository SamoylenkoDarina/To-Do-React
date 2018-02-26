import { combineReducers } from 'redux';

import cardReducer from './list';

export default combineReducers ({
    cards: cardReducer,
})

