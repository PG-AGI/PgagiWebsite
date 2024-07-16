import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import { inter } from "../utils/fontHelper";

export const metadata: Metadata = {
	title: "PGAGI",
	description: "Your Go-To AI Consultancy For AI Research, AI Products, AI Solutions, AI MVP Design, Idea Validation",
	icons: "icon.svg",

};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={inter.variable}>
			<body>{children}</body>
		</html>
	);
}
