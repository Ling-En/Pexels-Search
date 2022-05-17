import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Picture from '../components/Picture';
import Fancybox from '../components/Fancybox';
import Masonry from 'react-masonry-css';

const Photo = () => {
	let [input, setInput] = useState('');
	let [currSearch, setCurrSearch] = useState('');
	let [page, setPage] = useState(1);
	let [data, setData] = useState(null);
	let [currData, setCurrData] = useState(null);
	let [title, setTitle] = useState('');
	const auth = '563492ad6f917000010000013fab308e3ad24c57bb579cb6e4d5503e';
	const initURL = `https://api.pexels.com/v1/curated?per_page=15&page=1`;
	const searchURL = `https://api.pexels.com/v1/search?query=${currSearch}&per_page=15&page=1`;
	const masonryCols = {
		default: 4,
		991: 3,
		575: 2
	};

	const search = async (url) => {
		setPage(2);
		setData(null);
		setCurrData(null);
		let load = document.querySelector('.search-load .spinner-border');
		let empty = document.querySelector('.empty');
		load.style.display = 'inline-block';
		empty.style.display = 'none';
		const dataFetch = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
        		Authorization: auth
			}
		});
		if (dataFetch.ok) {
			let parsedData = await dataFetch.json();
			setData(parsedData.photos);
			setCurrData(parsedData.photos.length);
			if (parsedData.photos.length === 0) {
				empty.style.display = 'block';
			}
			load.style.display = 'none';
		}
	};

	const loadMore = async () => {
		let load = document.querySelector('.more-load .spinner-border');
		load.style.display = 'inline-block';
		let newURL;
		if (currSearch === '') {
			newURL = `https://api.pexels.com/v1/curated?per_page=15&page=${page}`;
		} else {
			newURL = `https://api.pexels.com/v1/search?query=${currSearch}&per_page=15&page=${page}`;
		}
		setPage(page + 1);
		const dataFetch = await fetch(newURL, {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				Authorization: auth
			}
		});
		if (dataFetch.ok) {
			let parsedData = await dataFetch.json();
			setData(data.concat(parsedData.photos));
			setCurrData(parsedData.photos.length);
			load.style.display = 'none';
		}
	};

	useEffect(() => {
		setTitle('精選相片');
		search(initURL);
	}, []);

	useEffect(() => {
		if (currSearch === '') {
			setTitle('精選相片');
			search(initURL);
		} else {
			setTitle(`搜尋關鍵字：${currSearch}`);
			search(searchURL);
		}
	}, [currSearch]);

	return (
		<main className="photo">
			<Search search={() => {setCurrSearch(input)}} setInput={setInput} />
			<section className="list">
				<div className="container-fluid">
					<h5>{title}</h5>
					<h4 className="empty">{`找不到任何內容`}</h4>
					<div className="search-load">
						<span className="spinner-border"></span>
					</div>
					<Fancybox>
						<Masonry breakpointCols={masonryCols} className="masonry-grid" columnClassName="masonry-column">
							{data && data.map((e) => {return <Picture key={e.id} data={e} />;})}
						</Masonry>
					</Fancybox>
					{currData === 15 &&
						<div className="more-load">
							<button onClick={loadMore}><span className="spinner-border spinner-border-sm"></span>LOAD MORE</button>
						</div>
					}
				</div>
			</section>
		</main>
	);
};

export default Photo;
