import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Photo from './pages/Photo';
import Video from './pages/Video';
import './styles/css/style.css';

const App = () => {
	return (
		<div className="app">
			<div className="wrapper">
				<Header />
				<Routes>
					<Route path='/' element={<Photo />} />
					<Route path='/video' element={<Video />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
