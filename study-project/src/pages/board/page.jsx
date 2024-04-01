import React, { useState } from 'react';

const Modal = ({ show, onClose, title, content }) => {
if (!show) return null;
	return (
		<div className="pt-20 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
		<div className="bg-white w-1/2 h-4/5 p-4 relative flex flex-col">
			<button onClick={onClose} className="absolute top-2 right-2 m-2 text-2xl">X</button>
			
			<div className="flex-grow">
			<h2 className="pl-2 pt-6 text-2xl font-semibold text-left">{title}</h2>
			<div className="pt-2 py-2 text-left">
				<span className="pl-2 bg-gray-200 text-xs font-light px-4 py-2 rounded-3xl">#해시태그1</span>
			</div>
			<p className="border-t border-gray-300 my-4 w-full "></p>
			<p className="pl-2 pt-2 text-sm text-left font-light">{content}</p>
			</div>

			<div className="px-60">
				<button className="px-2 py-3 bg-kwRed text-white font-bold focus:outline-none rounded-lg w-full">
					글 수정하기
				</button>
			</div>
		</div>
		</div>
	);
};


const Post = ({ title, content, author, onPostClick, postData }) => (
	<div onClick={() => onPostClick(postData)}>
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

export default function BoardPage() {

	const [modalShow, setModalShow] = useState(false);
	const [selectedPost, setSelectedPost] = useState(null);
	const openModal = (postData) => {
		setModalShow(true);
		setSelectedPost(postData);
	};

	const closeModal = () => {
		setModalShow(false);
		setSelectedPost(null);
	};

	const [currentPage, setCurrentPage] = useState(1);
	
	const postsPerPage = 4;

	const posts = [
		{
		title: '[React] 리액트에 대해 알아보자',
		content: '리액트 어쩌구 저쩌구',
		author: '김코딩',
		},
		{
		title: '[JavaScript] 에 대해 알아보자',
		content: '자바스크립트에서 어쩌구 저쩌구',
		author: '이코드',
		},
		{
		title: '[CSS] 반응형 웹 디자인에 대해 알아보자',
		content: '디자인  어쩌구 저쩌구',
		author: '박디자인',
		},
		{
		title: '[Node.js] 서버 에 대해 알아보자',
		content: 'Node.js 어쩌구 저쩌구',
		author: '최백엔드',
		},
		{
		title: '[Git] Git에 대해 알아보자',
		content: 'Git 어쩌구 저쩌구',
		author: '강개발자',
		},
	];
	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	
	return (
		
		<div className="flex flex-col items-center justify-center ">
			<div className="bg-backgroundGrey w-full">
			<div className=" flex flex-col flex-grow mx-auto w-2/5">
				<p className="pt-32 text-3xl font-medium text-center">자유 게시판</p>
				<p className="pt-2 text-sm text-center  font-light">자유로운 고민과 연구를 홍보할 수 있어요</p>
				<p className=" pt-6 text-xs font-light text-left">제목으로 검색하기</p>
				<p className="border-t border-kwRed my-4 w-full"></p>
				
				{currentPosts.map((post, index) => (
					<div key={index}>
					<Post
						title={post.title}
						content={post.content}
						author={post.author}
						onPostClick={openModal}
						postData={post}
					/>
					</div>
				))}
				{selectedPost && (
					<Modal
					show={modalShow}
					onClose={closeModal}
					title={selectedPost.title}
					content={selectedPost.content}
					/>
				)}

				

				<div className=' = "pt-4 flex justify-center space-x-2'>
					<button 
					className='font-semibold text-sm'
					onClick={()=>paginate(currentPage-1)}
					disabled = {currentPage === 1}>
						&lt;&lt;
					</button>
					{Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, i) => (
						<button
							key={i + 1}
							className="font-semibold text-sm"
							onClick={() => paginate(i + 1)}
							style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
						>
							{i + 1}
						</button>
					))}
					<button
						className="font-semibold text-sm"
						onClick={() => paginate(currentPage + 1)}
						disabled={currentPage === Math.ceil(posts.length / postsPerPage)}
						>
						&gt;&gt;
					</button>
				</div>
				<div className="pt-5 pb-5 flex justify-center items-center">
					<button className=" bg-kwRed text-white font-bold py-2 px-4 focus:outline-none rounded-3xl">
						00 글 작성하기
					</button>
				</div>
			</div>
			</div>
    	</div>
	);
}
