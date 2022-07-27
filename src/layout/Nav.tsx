import React from 'react';
import {  NavLink } from "react-router-dom";



const Nav = () => (
	<nav className="">
		<ul className="nav nav-pills flex-column flex-lg-row">
			<li className="button flex-fill  text-center ">
				<NavLink
					 className={({ isActive }) =>
            [
              " text-white text-decoration-none bg-transparent",
              isActive ? "activebutton" : null,
            ]
              .filter(Boolean)
              .join(" ")
          }
          end // <-- prevents matching on sub-routes, similar to exact
          to="/"
					
				>
					Home{' '}
				</NavLink>
			</li>

			<li className="button flex-fill text-center ">
				<NavLink
					 className={({ isActive }) =>
					 [
					   "text-white text-decoration-none bg-transparent",
					   isActive ? "activebutton" : null,
					 ]
					   .filter(Boolean)
					   .join(" ")
				   }
				   end // <-- prevents matching on sub-routes, similar to exact
				   to="/Gallery"
				>
					Gallery{' '}
				</NavLink>
			</li>

			<li className="button flex-fill text-center ">
				<NavLink
					 className={({ isActive }) =>
					 [
					   "text-white text-decoration-none bg-transparent",
					   isActive ? "activebutton" : null,
					 ]
					   .filter(Boolean)
					   .join(" ")
				   }
				   end // <-- prevents matching on sub-routes, similar to exact
				   to="/MiniGame"
				>
					MiniGame{' '}
				</NavLink>
			</li>

			<li className="button flex-fill  text-center ">
				<NavLink
					 className={({ isActive }) =>
					 [
					   "text-white text-decoration-none bg-transparent",
					   isActive ? "activebutton" : null,
					 ]
					   .filter(Boolean)
					   .join(" ")
				   }
				   end // <-- prevents matching on sub-routes, similar to exact
				   to="/Recipes"
				>
					Recipes
				</NavLink>
			</li>
		</ul>
	</nav>
);

export default Nav;
