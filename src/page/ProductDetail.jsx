// useParams - 현재 경로에서 사용되는 모든 파라메터들이 저장되어있음
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Dropdown, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { BsHeart, BsHeartFill, BsBag, BsBagFill } from "react-icons/bs";

export default function ProductDetail(item) {
	const [product, setProduct] = useState(null);
	const [heart, setHeart] = useState(true);

	const likeToggle = () => {
		setHeart(!heart);
		console.log(heart);
	};

	let { id } = useParams();
	const getProductDetail = async () => {
		let url = `https://my-json-server.typicode.com/pcy09/05_SPA01/products/${id}`;
		let response = await fetch(url); //fetch - 네트워크에 요청을 보내고 프로미스 객체가 반환
		let data = await response.json(); //사용할 수 있도록 json파일로 만들기
		setProduct(data);
	};
	useEffect(() => {
		getProductDetail();
	}, []);
	return (
		<Container>
			<Row>
				<Col xs={12} sm={7}>
					<img className="detailImg" src={product?.img2} alt="" />
				</Col>
				<Col xs={12} sm={{ span: 4, offset: 1 }}>
					<div className="detailTitleWrap">
						<div className="detailTitle">{product?.title}</div>
						<span className="like" onClick={likeToggle}>
							{heart ? <BsHeart /> : <BsHeartFill className="heartFill" />}
						</span>
					</div>
					<div className="detailPrice">₩ {product?.price}</div>
					{product?.new === true ? <div className="new">신제품</div> : ""}
					{product?.choice === true ? (
						<div className="choice">Weekly Best Seller</div>
					) : (
						""
					)}
					<div>
						<Dropdown className="detailDropdown">
							<Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
								사이즈 선택
							</Dropdown.Toggle>

							<Dropdown.Menu>
								{product?.size.length > 0 &&
									product.size.map((item) => (
										<Dropdown.Item href="#">{item}</Dropdown.Item>
									))}
							</Dropdown.Menu>
						</Dropdown>
					</div>
					<Button variant="dark">
						<BsBagFill fill="#fff" />
						추가
					</Button>
				</Col>
			</Row>
			<img
				src="http://www.chichera.co.kr/design/chichera/21_pc_re/22detail_benefit_pc.jpg"
				alt="회원가입"
			/>
			<img
				src="http://ftp.chichera.img13.kr/chichera_22/main/1122/de_pc_detail.jpg"
				alt="이벤트"
			/>
		</Container>
	);
}
