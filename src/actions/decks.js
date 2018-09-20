import {
  getDeck,
  fetchDecks,
  createDeck,
  deleteDeck
} from "./../util/storageApi";

// Fetch Deck
export const RECEIVE_DECK = "RECEIVE_DECK";
export function receiveDeck(deck) {
  return {
    type: RECEIVE_DECK,
    payload: deck
  };
}

export function deckFetch(key) {
  return dispatch => {
    return getDeck(key).then(response => dispatch(receiveDeck(response)));
  };
}

// Decks List
export const REQUEST_DECKS = "REQUEST_DECKS";

export const DECKS_FETCH_ERROR = "DECKS_FETCH_ERROR";
export function DecksFetchError() {
  return {
    type: DECKS_FETCH_ERROR,
    payload: new Error(),
    error: true
  };
}

export const DECKS_IS_FETCHING = "DECKS_IS_FETCHING";
export function decksIsFetching() {
  return {
    type: DECKS_IS_FETCHING,
    payload: true
  };
}

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    payload: decks
  };
}

export function decksFetch() {
  return dispatch => {
    dispatch(decksIsFetching());
    return fetchDecks().then(
      response => dispatch(receiveDecks(response)),
      err => dispatch(decksFetchError())
    );
  };
}

// Create Deck
export const CREATE_SUCCESS = "CREATE_SUCCESS";
export function createSuccess() {
  return {
    type: CREATE_SUCCESS,
    payload: true
  };
}

export const CREATE_ERROR = "CREATE_ERROR";
export function createError() {
  return {
    type: CREATE_ERROR,
    payload: new Error(),
    error: true
  };
}

export function newDeck(deck, callback) {
  return dispatch => {
    return createDeck(deck).then(
      response => {
        callback();
        dispatch(createSuccess());
      },
      err => dispatch(createError())
    );
  };
}

// Delete deck
export const DELETE_DECK = "DELETE_DECK";
export function removeDeck(deck, callback) {
  return dispatch => {
    return deleteDeck(deck).then(response => callback());
  };
}
