import Navbar from "./components/Navbar";
import { ThemeProvider } from "./components/ThemeProvider"
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

export default function RootLayout({ children }: RootLayoutProps) {
  return (
		<>
			<html lang="en" suppressHydrationWarning>
				<head />
				<body>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Navbar />
						{children}
					</ThemeProvider>
				</body>
			</html>
		</>
	);
}