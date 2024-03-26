import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import { routes } from '../../../constants/routes';

export default function Header() {
	return (
		<header className="h-20 flex items-center justify-start w-full sticky top-0 px-4">
			<Link to={routes.home.path}>
				<img src={logo} alt="hcclab 로고 이미지" className="w-34 h-14" />
			</Link>
		</header>
	);
}
