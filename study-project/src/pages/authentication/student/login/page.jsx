import kakakoImage from '../../../../assets/images/kakao.png';
import googleImage from '../../../../assets/images/google.png';

export default function StudentLogin() {
	return (
		<div className="flex flex-col flex-grow w-full justify-start items-center gap-4">
			<h2 className="text-2xl font-semibold mt-64">10초만에 스터디 참여하기</h2>
			<img src={kakakoImage} className="w-64" />
			<img src={googleImage} className="w-64" />
		</div>
	);
}
