import Navbar from "./components/Navbar";
import DarkModeToggle from "./components/DarkModeToggle";
import { ThemeProvider } from "./components/ThemeProvider"
import "./globals.css";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});


export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={cn("font-sans", geist.variable)}>
			<body>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					{children}<DarkModeToggle />
				</ThemeProvider>
			</body>
		</html>
	);
}