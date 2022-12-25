// 리액트 부트스트랩을 이용해서 로그인 form 제작
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "./Login.scss";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuthenticate }) {
	const navigate = useNavigate();

	useEffect(() => {
		window.scrollTo(0, 1);
	}, []);

	const loginUser = (e) => {
		e.preventDefault();
		setAuthenticate(true); //로그인이 되게 바꿔줌
		navigate(`/`);
	};
	return (
		<div className="container loginArea">
			<div className="loginGuide">
				<p>로그인 버튼을 눌러주세요!</p>
			</div>
			<h2>LOGIN</h2>
			<Form className="loginForm" onSubmit={loginUser}>
				<div className="formWrap">
					<Form.Group className="emailForm" controlId="formBasicEmail">
						<Form.Label>이메일</Form.Label>
						<Form.Control type="email" placeholder="이메일" />
					</Form.Group>

					<Form.Group className="passwordForm" controlId="formBasicPassword">
						<Form.Label>비밀번호</Form.Label>
						<Form.Control type="password" placeholder="비밀번호" />
					</Form.Group>
					<div className="checkWrap" key="checkbox">
						<Form.Check type="checkbox" id="check-api-checkbox">
							<Form.Check.Input type="checkbox" isValid />
							<Form.Check.Label>아이디 저장</Form.Check.Label>
						</Form.Check>
					</div>
				</div>

				<div className="loginBtnWrap">
					<Button className="loginBtn" variant="danger" type="submit">
						로그인
					</Button>
					<div className="textWrap">
						<p>아이디 찾기</p>
						<p>비밀번호 찾기</p>
					</div>
				</div>
			</Form>
		</div>
	);
}
