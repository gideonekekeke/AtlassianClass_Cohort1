import styled from "@emotion/styled";
import { useContext } from "react";
import { GlobalContext } from "../Global/GlobalContext";

const Container = styled.div`
	width: 100px;
	border: 1px solid black;
	height: 95vh;
	/* position: fixed; */
`;

const SideBar = () => {
	const { ChangeTheme } = useContext(GlobalContext);

	return (
		<Container>
			<button onClick={ChangeTheme}>ChangeTheme</button>
		</Container>
	);
};

export default SideBar;
