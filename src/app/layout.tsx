import '../globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google';
// import Particles from './particles';
import Header from '@/components/Header';
// import SongController from './song';
import StartModal from '@/components/StartModal';
// import CustomMouse from '@/components/custom-mouse';

const inter = Inter({ 
	subsets: ['latin'],
	variable: '--font-inter' 
});

export const metadata: Metadata = {
	title: 'Nexusfólio',
	description: 'Hi! I\'m Nexus Prime, a Fullstack Developer!',
}

export const viewport: Viewport = {
	colorScheme: "dark",
	themeColor: "#679099"
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className={inter.variable}>
				{/* <StartModal /> */}
        		{/* <CustomMouse /> */}

				<Header />

				<main className="h-screen flex flex-col overflow-x-hidden overflow-y-hidden scroll-smooth">
					{children}
				</main>

				{/* <SongController /> */}
			</body>
		</html>
	)
}
