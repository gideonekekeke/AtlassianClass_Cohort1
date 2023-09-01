// import GlobalStyle from "./components/GlobalStyle";
// import Header from "./components/Header";
// import LandingPage from "./components/LandingPage";

// function App() {
// 	return (
// 		<>
// 			<GlobalStyle />
// 			<Header />
// 			<LandingPage />
// 		</>
// 	);
// }

// export default App;

import React, { useContext } from "react";
import GlobalStyles from "./comp/GlobalStyles";
import LandingPage from "./comp/LandingPage";
import { ThemeProvider } from "./comp/ThemesComp";
import { GlobalContext } from "./Global/GlobalContext";

const App = () => {
const {currentTheme} = useContext(GlobalContext)

	return (
		<ThemeProvider theme={currentTheme}>
			<GlobalStyles />
			<LandingPage />
		</ThemeProvider>
	);
};

export default App;
