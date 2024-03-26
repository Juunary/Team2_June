import LoginLayout from '../layout/LoginLayout';

import { routes } from '../constants/routes';

import StudentLogin from '../pages/authentication/student/login/page';
import AdminLogin from '../pages/authentication/admin/login/page';
import TermsPage from '../pages/authentication/student/terms/page';
import UserInfoPage from '../pages/authentication/student/info/page';

const loginRoutes = {
	path: '/',
	element: <LoginLayout />,
	children: [
		{
			path: routes.admin.login.path,
			element: <AdminLogin />,
		},
		{
			path: routes.login.path,
			element: <StudentLogin />,
		},
		{
			path: routes.terms.path,
			element: <TermsPage />,
		},
		{
			path: routes.userInfo.path,
			element: <UserInfoPage />,
		},
	],
};

export default loginRoutes;
