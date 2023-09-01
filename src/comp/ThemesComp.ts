import styled from "@emotion/styled";

export interface Theme {
	background: string;
	text: string;
	textCard: string;
	bgCard: string;
}

export const lightTheme = {
	background: "#f1f1f1",
	text: "#000",
	bgCard: "#fff",
	textCard: "#000",
};

export const darkTheme = {
	background: "#1f1f1f",
	text: "#fff",
	bgCard: "rgba(0,0,0,0.1)",
	textCard: "#fff",
};

export const ThemeProvider = styled.div<{ theme: Theme }>`
	background-color: ${({ theme }) => theme.background};
	color: ${({ theme }) => theme.text};
`;
