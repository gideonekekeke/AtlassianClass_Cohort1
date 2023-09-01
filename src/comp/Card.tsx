import React, { useContext } from "react";
import styled from "@emotion/styled";
import { Theme } from "./ThemesComp";
import { GlobalContext } from "../Global/GlobalContext";

const Container = styled.div<{ theme: Theme }>`
	/* height: 250px; */
	width: 250px;
	background-color: ${({ theme }) => theme.bgCard};
	border-radius: 5px;
	flex-grow: 1;
	padding: 10px;
	margin: 10px;
	color: ${({ theme }) => theme.textCard};
	/* color: white; */
`;

const IconHold = styled.div`
	display: flex;
`;
const Span = styled.div`
	font-weight: bold;
`;
const Icon = styled.div`
	margin-right: 10px;
`;
const P = styled.p`
	font-size: 14px;
`;

const Card = () => {
	const { currentTheme } = useContext(GlobalContext);

	return (
		<Container theme={currentTheme}>
			<IconHold>
				<Icon>icon</Icon>
				<Span>History</Span>
			</IconHold>
			<P>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
				dolorem tempore maiores saepe voluptatum? Placeat animi quis temporibus
				corporis doloremque.
			</P>
		</Container>
	);
};

export default Card;
