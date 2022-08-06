import React from 'react';
import {  NavLink } from "react-router-dom";



const Nav = () => (
	<nav className="nav nav-pills  flex-column flex-xl-row">
		
			
				<NavLink
					 className={({ isActive }) =>
            [
              "button flex-fill text-center nav-link",
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
			

			
				<NavLink
					 className={({ isActive }) =>
					 [
					   "button flex-fill text-center nav-link",
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
			

			
				<NavLink
					 className={({ isActive }) =>
					 [
					   "button flex-fill text-center nav-link",
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
			

			
				<NavLink
					 className={({ isActive }) =>
					 [
					   "button flex-fill text-center nav-link",
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
			
				<NavLink
					 className={({ isActive }) =>
					 [
					   "button flex-fill text-center nav-link",
					   isActive ? "activebutton" : null,
					 ]
					   .filter(Boolean)
					   .join(" ")
				   }
				   end // <-- prevents matching on sub-routes, similar to exact
				   to="/Resume"
				>
					Resume
				</NavLink>
		
	</nav>
);

export default Nav;
