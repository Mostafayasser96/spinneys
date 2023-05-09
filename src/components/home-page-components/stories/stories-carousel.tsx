import { useEffect } from 'react';
import "../stories/stories-styles.css";
import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';
import 'bootstrap/dist/css/bootstrap.css';
import '@splidejs/splide/css/core';

const MyStories = () => {
	const stories = [
		{
			key: 1,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/magazine-Tiles_2023.2e16d0ba.fill-350x350.jpg",
			caption: 'March/April issues Story'
		},
		{
			key: 2,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/Ramadan-Tiles_2023-2_nL0zwWn.2e16d0ba.fill-350x350.jpg",
			caption: 'Ramadan Kareem Story'
		},
		{
			key: 3,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/PowerofPlants-EN.2e16d0ba.fill-350x350.jpg",
			caption: 'Eat well live well Story'
		},
		{
			key: 4,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/TheBigGrill_EN.2e16d0ba.fill-350x350.jpg",
			caption: 'The big grill Story'
		},
		{
			key: 5,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/Podcast-Tiles-EN.2e16d0ba.fill-350x350.jpg",
			caption: 'Podcast Tiles Story'
		},
		{
			key: 6,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/Latest_Recipes.2e16d0ba.fill-350x350.jpg",
			caption: 'Latest Recipes Story'
		},
		{
			key: 7,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/Flower-Tile-en.2e16d0ba.fill-350x350.jpg",
			caption: 'Flower Tiles Story'
		},
		{
			key: 8,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/The_Producers.2e16d0ba.fill-350x350.jpg",
			caption: 'The Producers Story'
		},
		{
			key: 9,
			path: '/',
			source: "https://prod-spinneys-cdn-new.azureedge.net/media/images/Our_Magazine.2e16d0ba.fill-350x350.jpg",
			caption: 'Our Magazine Story'
		}
	]


	useEffect(() => {
		const splide = new Splide('.splide', {
			perPage: 4,
			perMove: 1,
			gap: '2rem',
			pagination: false,
			breakpoints: {
				500: {
					perPage: 1,
					pagination: false,
					gap: '.7rem',
					height: '20rem'
				},
				900: {
					perPage: 2,
					gap: '2rem',
					pagination: false,
					height: '10rem'
				},

			},
		});

		splide.mount();

	}, []);


	return (
		<div className='stories'>
			<div className="splide visibility-visible" aria-label="Splide Basic HTML Example">
				<div className="splide__arrows">
					<button className="splide__arrow splide__arrow--prev">
						<svg className='story-arrow-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false">
							<path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
						</svg>
					</button>
					<button className="splide__arrow splide__arrow--next">
						<svg className='story-arrow-svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="10" focusable="false">
							<path d="m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z"></path>
						</svg>
					</button>
				</div>
				<div className="splide__track">
					<ul className="splide__list">
						{stories.map((story) => (
							<li className="splide__slide" key={story.key}>
								<a href={story.path}>
									<img className='story img-fluid cursor-pointer' alt={story.caption} src={story.source} />
								</a>
							</li>
						))}
					</ul>
				</div>

			</div>
		</div>

	)
}
export default MyStories;