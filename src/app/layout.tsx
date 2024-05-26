import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

import { inter } from "../utils/fontHelper";

export const metadata: Metadata = {
	title: "PGAGI",
	description: "",
	icons: "favicon.ico",
	
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
