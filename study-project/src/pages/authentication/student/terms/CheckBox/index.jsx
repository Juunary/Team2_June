export default function CheckBox({ title, required }) {
	return (
		<label className="flex justify-start items-center">
			<input type="checkbox" className="w-4 h-4 border-textGrey rounded-lg" />
			<span className="text-xs ml-1 font-semibold">{`${required ? '(필수)' : '(선택)'} ${title}`}</span>
			{/* TODO: '더보기' 기능 구현 필요. 현재는 정적 텍스트만 표시됨. */}
			<span className="text-textGrey text-xs ml-2 border-b">더보기</span>
		</label>
	);
}
