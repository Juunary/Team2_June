import { Navigate } from 'react-router-dom';

import { routes } from '../constants/routes';
import MainLayout from '../layout/MainLayout';
import AboutPage from '../pages/about/page';
import BoardPage from '../pages/board/page';
import HomePage from '../pages/home/page';
import MembersPage from '../pages/members/page';
import SchedulePage from '../pages/schedule/page';
import AuthPage from '../pages/admin/auth/page';
import DetailPage from '../pages/detail/page';
import AdminHomePage from '../pages/admin/home/page';

const mainRoutes = {
	path: '/',
	element: <MainLayout />,
	children: [
		{
			path: '/',
			element: <Navigate replace to={routes.home.path} />,
		},
		{
			path: routes.about.path,
			element: <AboutPage />,
		},
		{
			path: routes.board.path,
			element: <BoardPage />,
		},
		{
			path: routes.home.path,
			element: <HomePage />,
		},
		{
			path: routes.members.path,
			element: <MembersPage />,
		},
		{
			path: routes.schedule.path,
			element: <SchedulePage />,
		},
		{
			path: routes.detail.path,
			element: <DetailPage />,
		},
		{
			path: routes.admin.auth.path,
			element: <AuthPage />,
		},
		{
			path: routes.admin.home.path,
			element: <AdminHomePage />,
		},
	],
};

export default mainRoutes;
