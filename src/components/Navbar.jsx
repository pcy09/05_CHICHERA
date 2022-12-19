//반응형 사이드 바 추가

import { React, useState } from "react";
import { BsPersonCircle, BsSearch } from "react-icons/bs";
import "./Navbar.scss";
import { Link, useNavigate } from "react-router-dom";
import { VscThreeBars, VscClose } from "react-icons/vsc";

export default function Navbar({ authenticate, setAuthenticate }) {
	const [sideState, setSideState] = useState("-105%");
	const navigate = useNavigate();
	const menuList = [
		"여성",
		"Divided",
		"남성",
		"신생아/",
		"아동",
		"H&M HOME",
		"스포츠",
		"Sale",
		"지속가능성",
	];

	const search = (event) => {
		if (event.key === "Enter") {
			let keyword = event.target.value; //js와 다름 event안에 value가 들어있음
			navigate(`/?q=${keyword}`);
			// 추가조건은 쿼리로 붙임, 키워드를 읽어와서 url에 넣어줌
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

	return (
		<div>
			<div className="sideMenu" style={{ left: sideState }}>
				<ul className="sideMenuList">
					{menuList.map((menu) => (
						<li>{menu}</li>
					))}
				</ul>
				<div
					className="closeBtnWrap"
					onClick={() => {
						setSideState("-105%");
					}}
				>
					<VscClose className="closeBtn" />
				</div>
			</div>
			<div className="burgerMenu hide">
				<VscThreeBars
					onClick={() => {
						setSideState("0");
					}}
				/>
			</div>
			<div className="headerWrap">
				<h1>
					<Link to="/">
						<img src="../img/logo.png" alt="chichera 로고" />
					</Link>
				</h1>
				<div className="search">
					<input
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

			<nav>
				<ul className="menuList">
					{menuList.map((menu) => (
						<li>{menu}</li>
					))}
				</ul>
			</nav>
		</div>
	);
}

//npm install react-icons --save
//yarn add sass
