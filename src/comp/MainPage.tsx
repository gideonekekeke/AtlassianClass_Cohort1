import React from "react";
import styled from "@emotion/styled";
import Card from "./Card";

const Container = styled.div`
	padding: 10px;
`;

const Sech = styled.div`
	background-color: rgba(0, 0, 0, 0.2);
	padding: 5px 10px 10px 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 20px;
	margin-right: 10px;
	font-size: 15px;
	cursor: pointer;
	transition: all 350ms;

	:hover {
		background-color: rgba(0, 0, 0, 0.4);
	}
`;

const Hold = styled.div`
	display: flex;
`;

const CardHold = styled.div`
	margin-top: 20px;
	display: flex;
	flex-wrap: wrap;

`;

const MainPage = () => {
	return (
		<Container>
			<h3>Report Content</h3>
			<Hold>
				<Sech>Tech</Sech>
				<Sech>Priority</Sech>
				<Sech>Flagged</Sech>
				<Sech>Subject</Sech>
				<Sech>Filter</Sech>
			</Hold>

			<CardHold>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</CardHold>
		</Container>
	);
};

export default MainPage;
