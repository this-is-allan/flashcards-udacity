import {
	DECKS_FETCH_ERROR,
	REQUEST_DECKS,
	RECEIVE_DECKS,
	DECKS_IS_FETCHING
} from './../actions/decks';

export default function decks(
	state = {
		isFetching: false,
		fetchError: false,
		decks: []
	},
	action
) {
	switch (action.type) {
		case DECKS_FETCH_ERROR:
			return Object.assign({}, state, {
				fetchError: false
			})
		case DECKS_IS_FETCHING:
			return Object.assign({}, state, {
				isFetching: true
			})
		case REQUEST_DECKS:
			return Object.assign({}, state, {
				isFetching: true,
				fetchError: false
			})
		case RECEIVE_DECKS:
			return Object.assign({}, state, {
				isFetching: false,
				fetchError: false,
				decks: action.decks.decks
			})
		default:
			return state
	}
}