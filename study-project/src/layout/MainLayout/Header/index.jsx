import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { routes } from '../../../constants/routes';

import logo from '../../../assets/images/logo.png';

const headerContents = [
	{
		title: 'HOME',
		path: '/home',
	},
	{
		title: 'BOARD',
		path: '/board',
	},
	{
		title: 'MEMBERS',
		path: '/members',
	},
	{
		title: 'SCHEDULE',
		path: '/schedule',
	},
	{
		title: 'ABOUT US',
		path: '/about',
	},
	{
		title: 'SIGN UP',
		path: '/login',
	},
];

export default function Header() {
	const location = useLocation();

	const [currentURL, setCurrentURL] = useState(location.pathname);

	const isActive = (path) => {
		return currentURL === path;
	};

	useEffect(() => {
		setCurrentURL(location.pathname);
	}, [location]);

	return (
		<>
			<header className="h-20 sticky top-0 w-full z-50 bg-white">
				<div className="flex justify-between items-center h-20">
					<Link to={routes.home.path} className="flex items-center">
						<img src={logo} alt="HCC Lab Logo" className="object-contain w-34 h-14 mx-4" />
					</Link>
					<div className="flex justify-end items-center">
						<ul className="mx-6">
							{headerContents.map((content, index) => {
								return (
									<Link
										key={index}
										to={content.path}
										className={`px-6  hover:text-black transition duration-300 ${
											isActive(content.path) ? 'text-black underline underline-offset-2' : 'text-textGrey'
										}`}>
										{content.title}
									</Link>
								);
							})}
						</ul>
					</div>
				</div>
			</header>
		</>
	);
}
