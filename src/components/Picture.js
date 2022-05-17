import React from 'react';

const Picture = ({data}) => {
	return (
		<div className="item">
			<div className="img-block">
				<img src={data.src.large} />
				<div className="content">
					<p>攝影師 / <a href={data.photographer_url} target="_blank">{data.photographer}</a></p>
				</div>
				<a data-fancybox href={data.src.original}>
					<div className="overlay"></div>
				</a>
			</div>
		</div>
	);
};

export default Picture;
