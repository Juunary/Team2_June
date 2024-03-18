
export default function BoardPage() {


	  const Post = ({ title, content, author }) => (
		<div>
		<p className="text-xl font-semibold text-left">{title}</p>
		<p className="pt-2 text-sm text-left font-light">{content}</p>
		<div className="pt-2 flex justify-between items-center">
			<button className="bg-gray-300 text-black px-1.5 py-1.5 rounded-md text-xs">{author}</button>
			<div>
				<button className="pt-2 text-sm font-normal hover:underline pr-1">수정</button>
				<button className="pt-2 text-sm font-normal hover:underline">삭제</button>
			</div>
		</div>
		<p className="border-t border-gray-300 my-4 w-full pb-3"></p>
		</div>
	);
	return (
		
		<div className="flex flex-col items-center justify-center ">
			<div className="bg-backgroundGrey w-full">
			<div className=" flex flex-col flex-grow mx-auto w-2/5">
				<p className="pt-32 text-3xl font-medium text-center">자유 게시판</p>
				<p className="pt-2 text-sm text-center  font-light">자유로운 고민과 연구를 홍보할 수 있어요</p>

				<p className=" pt-6 text-xs font-light text-left">제목으로 검색하기</p>
				<p className="border-t border-kwRed my-4 w-full"></p>


				<div>
					<p className="text-xl font-semibold text-left">[Typescript] 오늘은 타입스크립트에 대해서 공부 했어요</p>
					<p className="pt-2 text-sm text-left  font-light">타입스크립트 어쩌구 저쩌구</p>
					<div className="pt-2 flex justify-between items-center">
						<button className="bg-gray-300 text-black px-1.5 py-1.5 rounded-md text-xs">서대원</button>
						<div>
							<button className=" pt-2 text-sm font-normal hover:underline pr-1">수정</button>
							<button className=" pt-2 text-sm font-normal hover:underline">삭제</button>
						</div>
					</div>
					<p className="border-t border-gray-300 my-4 w-full pb-3"></p>
				</div>

				<div>
					<p className="text-xl font-semibold text-left">[Typescript] 오늘은 타입스크립트에 대해서 공부 했어요</p>
					<p className="pt-2 text-sm text-left  font-light">타입스크립트 어쩌구 저쩌구</p>
					<div className="pt-2 flex justify-between items-center">
						<button className="bg-gray-300 text-black px-1.5 py-1.5 rounded-md text-xs">서대원</button>
						<div>
							<button className=" pt-2 text-sm font-normal hover:underline pr-1">수정</button>
							<button className=" pt-2 text-sm font-normal hover:underline">삭제</button>
						</div>
					</div>
					<p className="border-t border-gray-300 my-4 w-full pb-3"></p>
				</div>

				<div>
					<p className="text-xl font-semibold text-left">[Typescript] 오늘은 타입스크립트에 대해서 공부 했어요</p>
					<p className="pt-2 text-sm text-left  font-light">타입스크립트 어쩌구 저쩌구</p>
					<div className="pt-2 flex justify-between items-center">
						<button className="bg-gray-300 text-black px-1.5 py-1.5 rounded-md text-xs">서대원</button>
						<div>
							<button className=" pt-2 text-sm font-normal hover:underline pr-1">수정</button>
							<button className=" pt-2 text-sm font-normal hover:underline">삭제</button>
						</div>
					</div>
					<p className="border-t border-gray-300 my-4 w-full pb-3"></p>
				</div>

				<div>
					<p className="text-xl font-semibold text-left">[Typescript] 오늘은 타입스크립트에 대해서 공부 했어요</p>
					<p className="pt-2 text-sm text-left  font-light">타입스크립트 어쩌구 저쩌구</p>
					<div className="pt-2 flex justify-between items-center">
						<button className="bg-gray-300 text-black px-1.5 py-1.5 rounded-md text-xs">서대원</button>
						<div>
							<button className=" pt-2 text-sm font-normal hover:underline pr-1">수정</button>
							<button className=" pt-2 text-sm font-normal hover:underline">삭제</button>
						</div>
					</div>
					<p className="border-t border-gray-300 my-4 w-full pb-3"></p>
				</div>

				<div className="pt-4 flex justify-center space-x-2">
					<button className="font-semibold text-sm">&lt;&lt;</button>
					<button className="font-semibold text-sm">&lt;</button>
					<button className="font-semibold text-sm">1</button>
					<button className="font-semibold text-sm">2</button>
					<button className="font-semibold text-sm">3</button>
					<button className="font-semibold text-sm">4</button>
					<button className="font-semibold text-sm">5</button>
					<button className="font-semibold text-sm">6</button>
					<button className="font-semibold text-sm">7</button>
					<button className="font-semibold text-sm">8</button>
					<button className="font-semibold text-sm">9</button>
					<button className="font-semibold text-sm">&gt;</button>
					<button className="font-semibold text-sm">&gt;&gt;</button>
				</div>
				<div className="pt-5 pb-5 flex justify-center items-center">
					<button className=" px-12 py-3  bg-kwRed text-white font-bold py-2 px-4 focus:outline-none rounded-lg">
						00 글 작성하기
					</button>
				</div>
			

			

			</div>
			</div>

    	</div>
	);
}
