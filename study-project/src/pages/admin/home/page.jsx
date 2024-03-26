export default function AdminHomePage() {
	return (
		<>
		<div className="bg-white pt-20 pb-32 mx-auto  w-7/12 ">
			<div className="flex   justify-between items-center"> 

				<div className=" flex-1  max-w-fit  ">
				<div className="flex-1 flex items-center max-w-fit">
					<h1 className="text-3xl font-semibold mb-4">환영합니다 관리자님</h1>
					<img src="/src/assets/images/setting.png" alt="설정" className="ml-2 pb-4" style={{ width: '25px' }}/>
				</div>
					<p className="mb-1 text-sm">KW-HCC Lab FE 스터디 멤버들의 공간 입니다.</p>
					<p className="mb-1 text-sm pb-20">관리 페이지를 통해 스터디 멤버를 확인하고 관리 할 수 있습니다.</p>
					
					<button style={{ width: '130px', height: '40px' }}
					className="bg-kwRed text-white font-bold py-2 px-4 focus:outline-none hover:bg-gray-200 transition-colors rounded-md">
					<p className=" text-xs ">스터디 맴버관리</p>
					</button>
				</div>
				
				<div className="flex justify-end  pt-4">
					<img src="/src/assets/images/uni.png"
					style={{ width: '210px', height:  'center' }} />
				</div>
			</div>
	  	</div>


		<div className="bg-kwRed h-50 pt-20 pb-40 flex flex-col items-center justify-center">
			<h2 className="text-white text-2xl font-semibold mb-3">About KW-HCC Lab</h2>
			<p className="text-white text-xs mb-16">연구실의 다른 활동들이 궁금하세요?</p>
		
			<div className="flex justify-center space-x-8">
				<button style={{ width: '230px', height: '150px' }}
				className="bg-[#902331] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none hover:bg-kwRed transition-colors">
				<div className="flex justify-center  mb-4">
					<img src="/src/assets/images/insta_logo.png" alt="인스타 로고" style={{ width: '20px', height: 'auto' }} />
				</div>
				<p className="text-white text-sm font-semibold">인간중심컴퓨팅 연구실</p>
				</button>

				<button style={{ width: '230px', height: '150px' }}
				className="bg-[#902331] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none hover:bg-kwRed transition-colors">
				<p className="text-white text-xs font-medium mb-3">연구실 홈페이지</p>
				<p className="text-white text-xl font-medium">KW-HCC Lab</p>
				</button>

				<button style={{ width: '230px', height: '150px' }}
				className="bg-[#902331] text-white font-bold py-2 px-4 rounded-2xl focus:outline-none hover:bg-kwRed transition-colors">
				<p className="text-white text-xs font-medium mb-3">전공 동아리</p>
				<p className="text-white text-xl font-medium">CHIC</p>
				</button>
			</div>

		</div>

		<div className="bg-[#F8F9FB]  h-50 py-20 flex flex-col items-center justify-center">
			<h2 className="text-2xl font-semibold mb-4">우리 스터디는 여기에서 진행해요</h2>
			<p className="mb-8 text-xs">누구나 편하게 자신의 FE 개발 경험담, 고민 등의 이야기를 편하게 나눠보아요</p>
			<button style={{ width: '250px', height: '150px' }}
			className="bg-white font-semibold text-xl py-2 px-4  rounded-md">
				새빛관✨
			</button>
		</div>
		</>
	);
  };