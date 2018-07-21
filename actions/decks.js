import { fetchDecks } from './../util/storageApi';

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