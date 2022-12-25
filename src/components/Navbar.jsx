//반응형 사이드 바 추가

import { React, useState } from "react";
import { BsPersonCircle, BsSearch } from "react-icons/bs";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { VscThreeBars, VscClose } from "react-icons/vsc";
import { useEffect } from "react";

export default function Navbar({ authenticate, setAuthenticate }) {
	const [sideState, setSideState] = useState("-105%");
	const navigate = useNavigate();
	const menuList = [
		{
			id: 0,
			title: "NEW",
		},
		{
			id: 1,
			title: "BEST",
		},
		{
			id: 2,
			title: "TOP",
		},
		{
			id: 3,
			title: "BOTTOM",
		},
		{
			id: 4,
			title: "원피스",
		},
	];
	const search = (event) => {
		if (event.key === "Enter") {
			let keyword = event.target.value; //js와 다름 event안에 value가 들어있음
			navigate(`/?q=${keyword}`);
			// 추가조건은 쿼리로 붙임, 키워드를 읽어와서 url에 넣어줌
			setSideState("-105%");
			event.target.value = "";
		}
	};
	const gotoLogin = () => {
		navigate(`/login`);
	};

	const gotoLogout = () => {
		if (window.confirm("로그아웃 하시겠습니까")) {
			setAuthenticate(false);
		}
	};
	const [scrollY, setScrollY] = useState(0);
	const [scrollActive, setScrollActive] = useState(false);
	function handleScroll() {
		if (scrollY > 160) {
			setScrollY(window.pageYOffset);
			setScrollActive(true);
		} else {
			setScrollY(window.pageYOffset);
			setScrollActive(false);
		}
	}
	useEffect(() => {
		function scrollListener() {
			window.addEventListener("scroll", handleScroll);
		} //  window 에서 스크롤을 감시 시작
		scrollListener(); // window 에서 스크롤을 감시
		return () => {
			window.removeEventListener("scroll", handleScroll);
		}; //  window 에서 스크롤을 감시를 종료
	});

	return (
		<div>
			<div className="sideMenu" style={{ left: sideState }}>
				<div className="sideMenuList">
					<ul>
						{menuList.map((menu) => (
							<Link to={`/category/${menu.title}`}>
								<li key={menu.id}>{menu.title}</li>
							</Link>
						))}
					</ul>
					<div className="mSearch">
						<input
							type="text"
							onKeyPress={(event) => {
								search(event);
							}}
						/>
						<BsSearch />
					</div>
				</div>
				<div
					className="closeBtnWrap"
					onClick={() => {
						setSideState("-105%");
					}}
				>
					<VscClose className="closeBtn" />
				</div>
			</div>
			<div className="topBanner">
				<div className="textWrap">
					<p>따뜻함과 스타일을 동시에</p>
					<h2>WINTER SALE</h2>
				</div>
				<img src="../img/topBanner.jpg" alt="상단배너" />
			</div>
			<div className={scrollActive ? "headerWrap fixedPadding" : "headerWrap"}>
				<div className="burgerMenu hide">
					<VscThreeBars
						onClick={() => {
							setSideState("0");
						}}
					/>
				</div>
				<h1>
					<Link to="/">CHICHERA</Link>
				</h1>
				<div className="search">
					<input
						placeholder="지금 '윈터세일'을 검색하세요"
						type="text"
						onKeyPress={(event) => {
							search(event);
						}}
					/>
					<BsSearch />
				</div>
				<div className="login_btnWrap">
					{authenticate ? (
						<div className="login_btn" onClick={gotoLogout}>
							<BsPersonCircle />
							<span>LOGOUT</span>
						</div>
					) : (
						<div className="login_btn" onClick={gotoLogin}>
							<BsPersonCircle />
							<span>LOGIN</span>
						</div>
					)}
				</div>
			</div>

			<nav className={scrollActive ? "fixed" : ""}>
				<div className="imgWrap">
					<Link to="/">
						<img src="img/logo_white.png" alt="" />
					</Link>
				</div>
				<ul className="menuList">
					{menuList.map((menu) => (
						<Link to={`/category/${menu.title}`}>
							<li key={menu.id}>{menu.title}</li>
						</Link>
					))}
				</ul>
			</nav>
		</div>
	);
}

//npm install react-icons --save
//yarn add sass
