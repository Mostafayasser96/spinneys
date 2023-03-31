import { useEffect } from 'react';
import "../stories/stories-styles.css";
import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';
import 'bootstrap/dist/css/bootstrap.css';


const MyStories = () => {
	const stories = [
		{
			key: 1,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/NEWNESS-Tile-Feb20-EN.2e16d0ba.fill-350x350.jpg",
			caption: 'Power Plants Story'
		},
		{
			key: 2,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/magazine-Tiles_2023.2e16d0ba.fill-350x350.jpg",
			caption: 'The Big Grill Story'
		},
		{
			key: 3,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/Ramadan-Tiles_2023-2_nL0zwWn.2e16d0ba.fill-350x350.jpg",
			caption: 'Podcast Tiles Story'
		},
		{
			key: 4,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/Easter-Tiles_2023-resized_DUSKpyu.2e16d0ba.fill-350x350.jpg",
			caption: 'Farm To The Table Story'
		},
		{
			key: 5,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/PowerofPlants-EN.2e16d0ba.fill-350x350.jpg",
			caption: 'Ramadan Tiles Story'
		},
		{
			key: 6,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/TheBigGrill_EN.2e16d0ba.fill-350x350.jpg",
			caption: 'Easter Tiles Story'
		},
		{
			key: 7,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/Farm_to_Table.2e16d0ba.fill-350x350.jpg",
			caption: 'Mothers Day Tiles Story'
		},
		{
			key: 8,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/Latest_Recipes.2e16d0ba.fill-350x350.jpg",
			caption: 'Mothers Day Tiles Story'
		},
		{
			key: 9,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/Flower-Tile-en.2e16d0ba.fill-350x350.jpg",
			caption: 'Mothers Day Tiles Story'
		},
		{
			key: 10,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/The_Producers.2e16d0ba.fill-350x350.jpg",
			caption: 'Mothers Day Tiles Story'
		},
		{
			key: 11,
			path: '/',
			source: "https://prod-spinneys-cdn.azureedge.net/media/images/Our_Magazine.2e16d0ba.fill-350x350.jpg",
			caption: 'Mothers Day Tiles Story'
		}
	]


	useEffect(() => {
		var splide = new Splide('.splide', {
			perPage: 4,
			perMove: 1,
			gap: '2rem',
			pagination: false,
			breakpoints: {
				500: {
					perPage: 1,
					pagination: false,
					gap: '.7rem',
					height: '20rem',

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
		<div className="splide visibility-visible" aria-label="Splide Basic HTML Example">
			<div className="splide__arrows">
				<button className="splide__arrow splide__arrow--prev">
					<img className='left' alt='splide left arrow' src='https://prod-spinneys-cdn.azureedge.net/static/spinneys/svg/arrow-left-slider-w.485c4677b0d0.svg' />
				</button>
				<button className="splide__arrow splide__arrow--next">
					<img className='right' alt='splide right arrow' src='https://prod-spinneys-cdn.azureedge.net/static/spinneys/svg/arrow-right-slider-w.4877da06b9df.svg' />
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
	)
}
export default MyStories;