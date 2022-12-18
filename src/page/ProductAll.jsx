/*
  검색기능 추가
  useSearchParams - 현재 위치에 대한 URL의 쿼리 문자열을 읽고 수정하는 데 사용
  주소 뒤에 /?q=파라메터
*/

import React from "react";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function ProductAll() {
	let [query, setQuery] = useSearchParams();
	//주소 뒤 파라메터
	const [productList, setProductList] = useState([]);
	const getProducts = async () => {
		let keyword = query.get("q") || "";
		// 쿼리값을 읽어 온다 / q의 밸류(아이템을 가져온다) / 없을땐 빈 스트링
		let url = `https://my-json-server.typicode.com/pcy09/05_SPA01/products?q=${keyword}`;
		let response = await fetch(url); //fetch - 네트워크에 요청을 보내고 프로미스 객체가 반환
		let data = await response.json(); //사용할 수 있도록 json파일로 만들기
		setProductList(data);
	};
	useEffect(() => {
		getProducts();
	}, [query]); //키워드를 입력했을 때마다 getProducts 함수 실행
	return (
		<Container>
			<Row>
				{productList.map((item) => (
					<Col xs={6} lg={3}>
						<ProductCard item={item} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

// json 대체 서버이용
// https://www.npmjs.com/package/json-server
// npm install -g json-server
// json-server --watch db.json --port 5000

// 리액트-부트스트랩 설치
// https://react-bootstrap.github.io/getting-started/introduction
// npm install react-bootstrap bootstrap
