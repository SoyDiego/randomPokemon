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
			console.log(error)
			dispatch(getPokemonError());
		}
	};
}

const getPokemon = () => ({
	type: GET_POKEMON,
	payload: true,
});

const getPokemonSuccess = (pokemon) => ({
	type: GET_POKEMON_SUCCESS,
	pokemon: pokemon,
	payload: false,
});

const getPokemonError = (error) => ({
	type: GET_POKEMON_ERROR,
	payload: true
})
