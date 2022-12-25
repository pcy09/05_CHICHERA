// useParams - 현재 경로에서 사용되는 모든 파라메터들이 저장되어있음
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";
import { BsHeart, BsHeartFill } from "react-icons/bs";

export default function ProductDetail(item) {
	const [product, setProduct] = useState(null);
	const [heart, setHeart] = useState(true);

	const likeToggle = () => {
		setHeart(!heart);
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
		<>
			<Container>
				<p className="categoryMap">HOME > {product?.category}</p>
				<Row>
					<Col md={12} lg={7}>
						<div className="detailImgWrap">
							<img className="detailImg" src={product?.img2} alt="" />
							<div className="tagWrap">
								{product?.new === true ? <div className="new">NEW</div> : ""}
								{product?.choice === true ? (
									<div className="choice">BEST</div>
								) : (
									""
								)}
							</div>
						</div>
					</Col>
					<Col md={12} lg={5}>
						<div className="detailTitleWrap">
							<div className="detailTitle">{product?.title}</div>
							<span className="like" onClick={likeToggle}>
								{heart ? <BsHeart /> : <BsHeartFill className="heartFill" />}
							</span>
						</div>
						<div className="detailPrice">{product?.price}원</div>
						<div className="detailComment">
							<p>배송비</p>
							<p>3,000원 (50,000원 이상 무료배송)</p>
						</div>
						<div className="detailOption">
							<div className="detailOptionGroup">
								<p>컬러</p>
								<Form.Select
									className="detailDropdown"
									aria-label="Default select example"
								>
									<option>옵션 선택</option>
									{product?.color.length > 0 &&
										product.color.map((item) => (
											<option value={product?.color.indexOf(item)}>
												{item}
											</option>
										))}
								</Form.Select>
							</div>
							<div className="detailOptionGroup">
								<p>사이즈</p>
								<Form.Select
									className="detailDropdown"
									aria-label="Default select example"
								>
									<option>옵션 선택</option>
									{product?.size.length > 0 &&
										product.size.map((item) => (
											<option value={product?.size.indexOf(item)}>
												{item}
											</option>
										))}
								</Form.Select>
							</div>
						</div>
						<div className="detailTotalPrice">
							<p>총 상품 금액</p>
							<p>{product?.price}</p>
						</div>
						<div className="detailPurchase">
							<div className="buy">구매하기</div>
							<div className="basket">
								<div>장바구니</div>
								<div>관심상품</div>
							</div>
						</div>
					</Col>
				</Row>
				<div className="detailPage">
					<div className="pcDetail">
						<img
							src="http://www.chichera.co.kr/design/chichera/21_pc_re/22detail_benefit_pc.jpg"
							alt="회원가입"
						/>
						<img
							src="http://ftp.chichera.img13.kr/chichera_22/main/1122/de_pc_detail.jpg"
							alt="이벤트"
						/>
					</div>
					<div className="mobileDetail">
						<img
							src="http://www.chichera.co.kr/design/chichera/21_pc_re/22detail_benefit_m.jpg"
							alt="회원가입"
						/>
						<img
							src="http://ftp.chichera.img13.kr/chichera_22/main/1122/de_m_detail.jpg"
							alt="이벤트"
						/>
					</div>
					<img src={`../img/detailPage${id}.jpg`} alt="상세페이지" />
				</div>
			</Container>
		</>
	);
}
