import {
    addQuestionForDeck,
} from './../util/storageApi';

// Create Deck
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export function createSuccess(bool) {
    return {
        type: CREATE_SUCCESS,
        created: bool
    };
}

export const CREATE_ERROR = "CREATE_ERROR";
export function createError(bool) {
    return {
        type: CREATE_ERROR,
        error: bool
    };
}

export function newCard(card, deckName, callback) {
    return dispatch => {
        return addQuestionForDeck(card, deckName).then(
            response => {
                callback()
                dispatch(createSuccess(true))
            },
            err => dispatch(createError(true))
        )
    }
}