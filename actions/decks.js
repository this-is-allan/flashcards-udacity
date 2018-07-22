import { fetchDecks, createDeck } from './../util/storageApi';

// Decks List
export const REQUEST_DECKS = "REQUEST_DECKS";

export const DECKS_FETCH_ERROR = "DECKS_FETCH_ERROR";
export function DecksFetchError(bool) {
    return {
        type: DECKS_FETCH_ERROR,
        hasError: bool
    };
}

export const DECKS_IS_FETCHING = "DECKS_IS_FETCHING";
export function decksIsFetching(bool) {
    return {
        type: DECKS_IS_FETCHING,
        isFetching: bool
    };
}

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    };
}

export function decksFetch() {
    return dispatch => {
        dispatch(decksIsFetching(true));
        return fetchDecks().then(
            response => dispatch(receiveDecks(response)),
            err => dispatch(decksFetchError(true))
        );
    };
}

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

export function newDeck(deck, callback) {
    return dispatch => {
        return createDeck(deck).then(
            response => {
                callback()
                dispatch(createSuccess(true))
            },
            err => dispatch(createError(true))
        )
    }
}