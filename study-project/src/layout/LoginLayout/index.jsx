import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function LoginLayout() {
	return (
		<div className="flex min-h-screen w-screen flex-col ">
			<Header />
			<div className="flex flex-col flex-grow mx-auto w-1/4">
				<Outlet />
			</div>
		</div>
	);
}
