import { createContext, useEffect, useState } from "react";
import { Theme, darkTheme, lightTheme } from "../comp/ThemesComp";

interface Icontext {
	currentTheme: Theme;
	ChangeTheme: () => void;
}

export const GlobalContext = createContext<Icontext>({
	currentTheme: lightTheme,
	ChangeTheme: () => {},
});

export const GlobalProvider = ({ children }: React.PropsWithChildren) => {
	const [currentTheme, setCurrentTheme] = useState(lightTheme);

	const ChangeTheme = () => {
		const newTheme = currentTheme === darkTheme ? lightTheme : darkTheme;

		localStorage.setItem("theme", newTheme === lightTheme ? "light" : "dark");
		setCurrentTheme(newTheme);
	};

	useEffect(() => {
		const retrieveData = localStorage.getItem("theme");
		setCurrentTheme(retrieveData === "light" ? lightTheme : darkTheme);
	}, [currentTheme]);

	return (
		<GlobalContext.Provider
			value={{
				currentTheme,
				ChangeTheme,
			}}>
			{children}
		</GlobalContext.Provider>
	);
};
