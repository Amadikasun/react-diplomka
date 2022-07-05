import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
	<nav className="">
		<ul className="nav">
			<li className="nav-item">
				<NavLink
					activeClassName="borber border-white text-white text-decoration-none"
					className="nav-link "
					exact
					to="/"
				>
					Home{' '}
				</NavLink>
			</li>

			<li className="nav-item">
				<NavLink
					activeClassName="borber border-white text-white text-decoration-none"
					className="nav-link color-purple"
					exact
					to="/Gallery"
				>
					Gallery{' '}
				</NavLink>
			</li>

			<li className="nav-item">
				<NavLink
					activeClassName="borber border-white text-white text-decoration-none"
					className="nav-link "
					exact
					to="/MiniGame"
				>
					MiniGame{' '}
				</NavLink>
			</li>

			<li className="nav-item">
				<NavLink
					activeClassName="borber border-white text-white text-decoration-none"
					className="nav-link "
					exact
					to="/Recipes"
				>
					Recipes
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Nav;
