import uuid from 'uuid';

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const EDIT_CARD = 'EDIT_CARD';

export const addCard = (data) => {
    return {
        type: ADD_CARD,
        payload: {
            id: uuid(),
            data 
        }
    }
}

export const deleteCard = (cardId) => {

    return {
        type: DELETE_CARD,
        payload: cardId
    }
}

export const editCard = (cardId, data) => {
    return {
        type: EDIT_CARD,
        payload: {
            id: cardId,
            data    
        }
    }
}