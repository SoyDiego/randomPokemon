import React, { Fragment, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getPokemonActions } from "../actions/pokemonActions";

const Pokemon = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPokemonActions());
	}, [dispatch]);

	const pokemon = useSelector((state) => state.pokemons.pokemon);
	const loading = useSelector((state) => state.pokemons.loading);

	if (loading) return <p>Loading Pokemon...</p>;

	const { name, weight, height, sprites, types } = pokemon;

	return (
		<Fragment>
			<div
				className="col-xs-12 col-sm-6 col-md-6 col-lg-4 card shadow bg-white border border-primary"
				onClick={() => dispatch(getPokemonActions())}>
				<img
					className="card-img-top"
					src={sprites.front_default}
					alt={name}
				/>
				<div className="card-body text-dark">
					<h2 className="card-title text-center">{name}</h2>
					<div className="d-flex justify-content-between py-3">
						<h5>
							<span className="font-weight-bold text-primary px-3">
								Weight:
							</span>{" "}
							{weight}
						</h5>
						<h5>
							<span className="font-weight-bold text-primary px-3">
								Height:
							</span>{" "}
							{height}
						</h5>
					</div>

					<h3 className="card-title text-center text-primary">
						Types:
					</h3>
					<div className="d-flex justify-content-around text-center">
						{types.map((type) => (
							<h5 className="text-center">
								<span role="img" aria-labelledby="tick">
									✔️
								</span>
								{type.type.name}
							</h5>
						))}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Pokemon;
