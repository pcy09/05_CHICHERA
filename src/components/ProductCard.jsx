// 상품을 눌렀을 때 그 상품에 해당하는 ProductDetail페이지로 넘어가게
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

export default function ProductCard({ item }) {
	const navigate = useNavigate();
	const showDetail = () => {
		navigate(`/product/${item.id}`);
	};
	return (
		<div className="ProductCard">
			<div className="imgContainer" onClick={showDetail}>
				<img src={item?.img} alt="" />
				<div className="itemBox">
					{item?.choice === true ? <div className="event">Best</div> : ""}
					{item?.new === true ? <div className="new">new</div> : ""}
				</div>
			</div>
			<div className="title">{item?.title}</div>
			<div className="price">{item?.price}</div>
		</div>
	);
}
