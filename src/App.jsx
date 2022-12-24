import { React, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./route/PrivateRoute";
import Navbar from "./components/Navbar";
import Category from "./page/Category";

/*
  1.전체상품페이지(대문페이지), 로그인, 상품 상세페이지
    1-1.네비게이션바  
  2.전체상품페이지(대문페이지) - 전체상품을 쭉 나열
    2-1.대문 상품이미지를 클릭하면 디테일 페이지가 나오게
  3.상품 검색기능
  4.로그인버튼 클릭 > 로그인 페이지 나옴
  5.상품 썸네일 클릭 >
    1)로그인이 안되어있는 경우
      로그인 페이지가 나옴
    2)로그인이 되어있는 경우MODULE_NOT_FOUND
      디테일 페이지가 나옴
  6.로그아웃 기능
    1)다시 디테일페이지x
  7.로그인,로그아웃 버튼 - 토글버튼으로 생성
  8.반응형, 사이드바
*/

function App() {
	const [authenticate, setAuthenticate] = useState(false);
	//로그인 상태 구분 (처음엔 로그인 안된 상태(false))
	useEffect(() => {
		console.log("로그인 상태는?", authenticate);
	}, [authenticate]);
	return (
		<>
			<Navbar authenticate={authenticate} setAuthenticate={setAuthenticate} />
			<Routes>
				<Route path="/" element={<ProductAll />} />
				<Route
					path="login"
					element={<Login setAuthenticate={setAuthenticate} />}
				/>
				<Route
					path="product/:id"
					element={<PrivateRoute authenticate={authenticate} />}
				/>
				<Route
					path="category/:id"
					element={<Category authenticate={authenticate} />}
				/>
			</Routes>
		</>
	);
}

export default App;

// Routes는 Route를 감싸주고, 스위치 해주는 역할
