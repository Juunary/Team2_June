import { useRef, useState } from 'react';
import Input from './Input';

export default function UserInfoPage() {
	const [imageFile, setImageFile] = useState(null);
	const imageRef = useRef();

	const handleInputImage = () => {
		const file = imageRef.current.files[0];
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			setImageFile(reader.result);
		};
	};

	return (
		<div className="flex flex-col flex-grow w-11/12 h-full justify-start items-start gap-4 mx-auto">
			<h2 className="text-2xl font-semibold mt-2 text-textBlack">입력하신 정보는 Members에 노출돼요</h2>
			<label className="flex flex-col w-full gap-2">
				<span className="text-sm font-semibold text-textBlack">프로필 사진 *</span>
				<img
					src={imageFile ? imageFile : null}
					className="w-full border-textBlack border h-56 rounded-lg object-scale-down"
				/>
				<input className="hidden" type="file" accept="image/*" ref={imageRef} onChange={handleInputImage} />
			</label>
			<div className="w-full flex flex-col gap-5 my-4">
				<Input title="성함" />
				<Input title="태그" />
				<Input title="학과명" />
				<Input title="이메일" />
			</div>
			<button className="bg-kwRed w-full px-2 py-3 rounded-lg text-white mt-4 text-center">스터디 참여하기</button>
		</div>
	);
}
