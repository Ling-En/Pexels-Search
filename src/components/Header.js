import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../img/logo-white.svg';

const Header = () => {
	return (
		<header>
			<nav className="navbar">
				<div className="container-fluid">
					<div className="navbar-brand">
						<img src={Logo} alt="Logo" />
					</div>
					<ul className="navbar-nav">
						<li><NavLink to='/'>相片</NavLink></li>
						<li><NavLink to='/video'>影片</NavLink></li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Header;
