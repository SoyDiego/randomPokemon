import {
	GET_POKEMON,
	GET_POKEMON_SUCCESS,
	GET_POKEMON_ERROR,
} from "../types";

export function getPokemonActions() {
	return async (dispatch) => {
		dispatch(getPokemon());
		
		const randomPokemon = Math.round(Math.random() * (151 - 1) + 1);
		const api = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomPokemon}`);
		const response = await api.json()
		dispatch( getPokemonSuccess(response) )

	};
}

const getPokemon = () => ({
	type: GET_POKEMON,
	payload: true,
});

const getPokemonSuccess = (pokemon) => ({
	type: GET_POKEMON_SUCCESS,
	pokemon: pokemon,
	payload: false
})
