// 리액트 부트스트랩을 이용해서 로그인 form 제작
import React from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuthenticate }) {
	const navigate = useNavigate();

	const loginUser = (e) => {
		e.preventDefault();
		setAuthenticate(true); //로그인이 되게 바꿔줌
		navigate(`/`);
	};
	return (
		<div className="container loginArea">
			<Form onSubmit={loginUser}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>이메일</Form.Label>
					<Form.Control type="email" placeholder="로그인 버튼을 눌러주세요!" />
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>비밀번호</Form.Label>
					<Form.Control
						type="password"
						placeholder="로그인 버튼을 눌러주세요!"
					/>
				</Form.Group>

				<Button variant="danger" type="submit">
					로그인
				</Button>
			</Form>
		</div>
	);
}
