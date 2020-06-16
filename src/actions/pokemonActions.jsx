import { GET_POKEMON, GET_POKEMON_SUCCESS, GET_POKEMON_ERROR } from "../types";

export function getPokemonActions() {
	return async (dispatch) => {
		try {
			dispatch(getPokemon());

			const randomPokemon = Math.round(Math.random() * (151 - 1) + 1);
			const api = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`
			);
			const response = await api.json();
			dispatch(getPokemonSuccess(response));
		} catch (error) {
			dispatch(getPokemonError());
		}
	};
}

const getPokemon = () => ({
	type: GET_POKEMON,
});

const getPokemonSuccess = (pokemon) => ({
	type: GET_POKEMON_SUCCESS,
	payload: pokemon,
});

const getPokemonError = () => ({
	type: GET_POKEMON_ERROR,
});
