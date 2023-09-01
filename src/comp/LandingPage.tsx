import React from "react";
import SideBar from "./SideBar";
import MainPage from "./MainPage";
import styled from "@emotion/styled";

const Container = styled.div`
	display: flex;
`;





const LandingPage = () => {
	return (
		<Container>
			<SideBar  />
			<MainPage  />
		</Container>
	);
};

export default LandingPage;
