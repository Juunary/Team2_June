import { dummy } from './_data/mock';
import ToggleBtn from './_components/toggleBtn/ToggleBtn';

// TODO: Table 컴포넌트화, 권한 부여 토글 구현

export default function AuthPage() {
	return (
		<main>
			<div className="flex flex-col w-full h-screen items-center bg-backgroundGrey p-20">
				<div className="flex flex-col items-center mx-auto">
					<h1 className="text-4xl font-medium mb-6">스터디 멤버 관리</h1>
					<p className="text-textGrey font-light">토글 버튼을 통해 권한을 설정할 수 있습니다.</p>
				</div>
				<div className="h-100 mx-auto overflow-auto mt-16 relative">
					<table className="table-auto w-full">
						<thead>
							<tr className="sticky top-0 left-0 bg-backgroundGrey border-b z-50">
								<th className="px-12 py-5">No</th>
								<th className="px-12 py-2">이름</th>
								<th className="px-12 py-2">학과</th>
								<th className="px-12 py-2">이메일</th>
								<th className="px-12 py-2">구분</th>
								<th className="px-12 py-2">가입일</th>
							</tr>
						</thead>
						<tbody>
							{dummy.map((data, index) => {
								return (
									<tr key={index} className="border-t font-light">
										<td className="px-12 py-3">{data.id}</td>
										<td className="px-12 py-3">{data.name}</td>
										<td className="px-12 py-3">{data.department}</td>
										<td className="px-12 py-3">{data.email}</td>
										<td className="px-12 py-3">
											<ToggleBtn />
										</td>
										<td className="px-12 py-3">{data.signinData}</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				</div>
			</div>
		</main>
	);
}
