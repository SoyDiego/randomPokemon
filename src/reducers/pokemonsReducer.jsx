import {
	GET_POKEMON,
	GET_POKEMON_SUCCESS,
	GET_POKEMON_ERROR,
} from "../types";

//Cada reducer tiene su propio state

const initialState = {
    pokemon: {},
	loading: true,
	error: false,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_POKEMON:
			return {
				...state,
				loading: true,
				error: false
			}
		case GET_POKEMON_SUCCESS:
			return {
				...state,
				pokemon: action.payload,
				loading: false
			}
		case GET_POKEMON_ERROR:
			return {
				...state,
				loading: false,
				error: true
			}
		default:
			return state;
	}
}
