import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider"
import Footer from "./components/Footer"
import "./globals.css";

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: '400',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head>
					<title>Minerva Defense</title>
				</head>
				<body className={montserrat.className}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<div
						style={{
							position: "relative",
							overflowX: "hidden",
								height: "100vh",
						}}>
							<div
							style={{
								position: "absolute",
								width: "100vw",
							}}>
								{children}
								<Footer />
							</div>
							<div
							style={{
								position: "relative"
							}}>
								<Navbar />
							</div>
						</div>
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}