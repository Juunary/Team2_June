// NOTE: 라우터 경로를 정의하는 파일
export const routes = {
	home: {
		path: '/home',
		title: 'Home',
	},
	board: {
		path: '/board',
		title: 'BOARD',
	},
	detail: {
		path: '/detail',
		title: 'DETAIL',
	},
	members: {
		path: '/members',
		title: 'MEMBERS',
	},
	schedule: {
		path: '/schedule',
		title: 'SCHEDULE',
	},
	about: {
		path: '/about',
		title: 'ABOUT US',
	},
	login: {
		path: '/login',
		title: 'SIGN UP',
	},
	terms: {
		path: '/terms-agreement',
		title: 'TERMS AGREEMENT',
	},
	userInfo: {
		path: '/user-info',
		title: 'USER INFO',
	},
	admin: {
		// TODO: 다른 관리자 페이지가 있다면 추가
		auth: {
			path: '/admin/auth',
			title: 'AUTH',
		},
		login: {
			path: '/admin/login',
			title: 'ADMIN LOGIN',
		},
		home: {
			path: '/admin/home',
			title: 'ADMIN HOME',
		},
	},
};
