import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getPokemonActions } from "../actions/pokemonActions";
import Loading from "./Loading";

const Pokemon = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemonActions());
	}, [dispatch]);

	const pokemon = useSelector((state) => state.pokemons.pokemon);
	const loading = useSelector((state) => state.pokemons.loading);
	const error = useSelector((state) => state.pokemons.error);

	if (loading)
		return (
			<Loading/>
		);
	if (error)
		return (
			<div className="text-white text-center font-weight-bold bg-danger py-5">
				<h2>Something went wrong, sorry...</h2>
			</div>
		);

	const { name, weight, height, sprites, types } = pokemon;
	return (
		<Fragment>
			<div
				className="col-xs-12 card shadow bg-white border border-primary d-flex justify-content-center align-items-center"
				onClick={() => dispatch(getPokemonActions())}>
				<p className="text-dark text-center mt-3 mx-4">
					click on the card to get other random Pokemon
				</p>
				<img
					className="text-center"
					src={sprites.front_default}
					alt={name}
					width="120"
				/>
				<div className="card-body text-dark">
					<h2 className="card-title text-center">{name}</h2>
					<div className="d-flex justify-content-around py-2">
						<h5>
							<span className="font-weight-bold text-primary px-2">
								Weight:
							</span>{" "}
							{weight}
						</h5>
						<h5>
							<span className="font-weight-bold text-primary px-2">
								Height:
							</span>{" "}
							{height}
						</h5>
					</div>

					<h4 className="card-title text-center text-primary">
						Types:
					</h4>
					<div className="d-flex justify-content-around text-center">
						{types.map((type, index) => (
							<h5 key={index} className="text-center">
								<span role="img" aria-labelledby="tick">
									✔️
								</span>
								{type.type.name}
							</h5>
						))}
					</div>
				</div>
			</div>
			{error && (
				<div className="col-md-6"> Something went wrong, sorry.</div>
			)}
		</Fragment>
	);
};

export default Pokemon;
