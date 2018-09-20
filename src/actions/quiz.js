import { addQuestionForDeck } from "./../util/storageApi";

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

export function newCard(card, deckName, callback) {
  return dispatch => {
    return addQuestionForDeck(card, deckName).then(
      response => {
        callback();
        dispatch(createSuccess());
      },
      err => dispatch(createError())
    );
  };
}
