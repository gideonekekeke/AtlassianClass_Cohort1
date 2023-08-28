import React, { useState } from "react";
import styled from "@emotion/styled";
import pic1 from "../assets/Dektop_TL@2x.png";
import pic2 from "../assets/Desktop_TR-2x.png";
import pic3 from "../assets/Desktop_BL-2x.png";
import pic4 from "../assets/Desktop_BR-2x.png";
import VideonModal from "./VideonModal";

const Container = styled.div`
	height: 600px;
	background-color: #0054bb;
	color: white;
	background-image: url(${pic1}), url(${pic2}), url(${pic3}), url(${pic4});
	background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
	background-size: 500px, 450px, 300px, 300px;
	background-position: top left, top right, bottom left, bottom right;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

const First = styled.h2`
	margin: 0;
	font-size: 40px;
	font-weight: 500;
`;
const Second = styled.h2`
	margin: 0;
	font-size: 40px;
	margin-left: 150px;
	font-weight: 800;
`;

const Hero: React.FC = () => {
	const [showVideo, setShowVideo] = useState<boolean>(false);

	const toggleVideo = () => {
		setShowVideo(!showVideo);
	};

	return (
		<Container>
			<First>Impossible alone.</First>
			<Second>Possible together.</Second>
			<p>See how collaboration makes the impossible, possible.</p>

			<div>
				<div onClick={toggleVideo}>Play video</div>
			</div>

			{showVideo ? (
				<div>
					<VideonModal />
				</div>
			) : null}
		</Container>
	);
};

export default Hero;
