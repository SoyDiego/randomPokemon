import {
	GET_POKEMON,
	GET_POKEMON_SUCCESS,
	GET_POKEMON_ERROR,
} from "../types";

//Cada reducer tiene su propio state

const initialState = {
    pokemon: {},
    loading: true,
};

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_POKEMON:
			return {
				...state,
				loading: action.payload
			}
		case GET_POKEMON_SUCCESS:
			return {
				...state,
				pokemon: action.pokemon,
				loading: action.payload
			}
		default:
			return state;
	}
}
