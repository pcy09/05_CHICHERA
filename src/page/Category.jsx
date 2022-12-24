import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";

export default function Category() {
	let { id } = useParams();
	const [categoryList, setCategoryList] = useState([]);
	const getList = async () => {
		let url = `https://my-json-server.typicode.com/pcy09/05_SPA01/products`;
		let response = await fetch(url);
		let data = await response.json();
		setCategoryList(data);
	};
	useEffect(() => {
		getList();
	}, []);

	let categoryItem = [];
	if (id === "NEW") {
		categoryItem = categoryList.filter((item) => item?.new === true);
	} else if (id === "BEST") {
		categoryItem = categoryList.filter((item) => item?.choice === true);
	} else {
		categoryItem = categoryList.filter((item) => item?.category === id);
	}

	return (
		<Container>
			<Row>
				<h1>{id}</h1>
				{categoryItem.map((item) => (
					<Col key={item.id} xs={6} lg={3}>
						<ProductCard item={item} />
					</Col>
				))}
			</Row>
		</Container>
	);
}
