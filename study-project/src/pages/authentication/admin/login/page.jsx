import Input from './input';

export default function AdminLogin() {
	return (
		<div className="flex flex-col flex-grow w-11/12 h-full justify-start items-start gap-4 mx-auto">
			<h2 className="text-5xl font-medium mt-32 text-textBlack mx-auto">Admin Login</h2>
			<h3 className="text-kwRed text-sm">KW-HCC Lab 연구실에서 발급받은 관리자 아이디로 로그인해주세요</h3>
			<div className="w-full flex flex-col gap-6 my-6">
				<Input title="아이디" />
				<Input title="비밀번호" />
			</div>
			<button className="bg-kwRed w-full px-2 py-3 rounded-lg text-white mt-4 text-center">로그인</button>
		</div>
	);
}
