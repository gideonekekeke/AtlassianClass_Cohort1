import React from "react";
import styled from "@emotion/styled";

interface Iprops {
	bg: string;
	cl: string;
	title: string;
}

const But = styled.button<{ bg: string; cl: string }>`
	background-color: ${(props) => props.bg};
	color: ${(props) => props.cl};
	padding: 8px 15px 8px 15px;
	border: none;
	border-radius: 3px;
	transition: all 350ms;
	cursor: pointer;
	font-family: "Montserrat", sans-serif;
	:hover {
		background-color: #c7c7c7;
	}
`;

const Button: React.FC<Iprops> = ({ bg, cl, title }) => {
	return (
		<But cl={cl} bg={bg}>
			{title}
		</But>
	);
};

export default Button;
