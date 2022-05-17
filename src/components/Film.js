import React from 'react';

const Film = ({data}) => {
	let videoLink;
	for (let i = 0; i < data.video_files.length; i++) {
		if (data.video_files[i].quality === 'hd') {
			videoLink = data.video_files[i].link;
			break;
		}
	}

	return (
		<div className="item">
			<div className="img-block">
				<img src={data.image} />
				<div className="content">
					<p>攝影師 / <a href={data.user.url} target="_blank" rel="noopener noreferrer">{data.user.name}</a></p>
				</div>
				<a data-fancybox href={videoLink}>
					<div className="overlay"></div>
				</a>
			</div>
		</div>
	);
};

export default Film;
