import React, { Component } from "react";
import Slider from "react-slick";
import "./SlickSlider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlickSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className="sliderWrap">
			<Slider {...settings}>
				<div>
					<img className="pcBanner" src="img/slider01.jpg" alt="" />
					<img className="mBanner" src="img/mSlider01.jpg" alt="" />
				</div>
				<div>
					<img className="pcBanner" src="img/slider02.jpg" alt="" />
					<img className="mBanner" src="img/mSlider02.jpg" alt="" />
				</div>
				<div>
					<img className="pcBanner" src="img/slider03.jpg" alt="" />
					<img className="mBanner" src="img/mSlider03.jpg" alt="" />
				</div>
			</Slider>
		</div>
	);
}
