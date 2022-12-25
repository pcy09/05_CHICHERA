import React from "react";
import "./Footer.scss";
export default function Footer() {
	return (
		<footer>
			<div className="footerNav">
				<ul>
					<li>회사소개</li>
					<li>이용약관</li>
					<li>고객센터</li>
				</ul>
			</div>
			<address>
				<div className="logoWrap">
					<img src="../img/logo.png" alt="" />
				</div>
				<div className="textWrap">
					<p>
						상호명 : (주)시크헤라 ㅣ 대표자 : 김종진 ㅣ 주소 : 서울 특별시
						용산구 새창로 101 티엔티 빌딩 3층
					</p>
					<p>
						사업자등록번호 : 106-86-86649 ㅣ 통신판매업신고 :
						2012-서울용산-00659 호
					</p>
					<p>COPYRIGHT ⓒ 시크헤라. ALL RIGHTS RESERVED.</p>
				</div>
			</address>
		</footer>
	);
}
