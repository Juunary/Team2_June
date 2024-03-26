import { Link } from 'react-router-dom';
import CheckBox from './CheckBox';
import { routes } from '../../../../constants/routes';

export default function TermsPage() {
	return (
		<div className="flex flex-col flex-grow w-3/4 justify-start items-start gap-4 mx-auto">
			<h2 className="text-2xl font-semibold mt-48">약관에 동의가 필요해요</h2>
			<div className="flex border-red-400 w-full border px-4 py-4 rounded-lg bg-[#F8F9FB] mt-1">
				<label className="flex justify-start items-center">
					<input type="checkbox" className="w-4 h-4" />
					<span className="text-xs ml-1 font-semibold">전체 동의</span>
					<span className="text-textGrey text-xs ml-2">선택항목에 대한 동의 포함</span>
				</label>
			</div>
			<div className="flex flex-col justify-center items-start gap-5 w-full px-4">
				<CheckBox title="이용약관" more="더보기" required />
				<CheckBox title="개인정보 수집 및 이용 동의" more="더보기" required />
				<CheckBox title="만 14세 이상입니다" more="더보기" required />
				<CheckBox title="개인정보 마케팅 활용 동의" more="더보기" />
			</div>
			<button className="bg-kwRed w-full px-2 py-2 rounded-lg text-white mt-4 text-center">
				<Link to={routes.userInfo.path}>다음</Link>
			</button>
		</div>
	);
}
