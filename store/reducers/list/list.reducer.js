import { ADD_CARD, DELETE_CARD, EDIT_CARD } from '../../actions'

export default function (state = [], action) {
    switch (action.type) {
        case ADD_CARD:
            return [...state, action.payload];
        case DELETE_CARD: 
            return state.filter((item) => item.id !== action.payload);
        case EDIT_CARD:
            return state.map((item) => item.id === action.payload.id ? action.payload : item)
        default: 
            return state;
    }
}