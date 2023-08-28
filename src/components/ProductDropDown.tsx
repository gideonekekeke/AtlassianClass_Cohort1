import React from "react";
import styled from "@emotion/styled";

interface Iprops {
	changeProductShow: () => void;
}

const Container = styled.div`
	position: fixed;
	background-color: rgba(0, 0, 0, 0.3);
	/* backdrop-filter: blur(3px); */
	width: 100%;
	height: calc(100vh - 70px);
	right: 0;
	left: 0;
	bottom: 0%;

	top: 70px;
	overflow: hidden;
	z-index: 2;
`;

const Card = styled.div`
	height: 500px;
	width: 100%;
	background-color: white;
`;

const ProductDropDown: React.FC<Iprops> = ({ changeProductShow }) => {
	return (
		<Container onClick={changeProductShow}>
			<Card></Card>
		</Container>
	);
};

export default ProductDropDown;
