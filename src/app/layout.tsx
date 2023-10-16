import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import Particles from './particles';
import Header from '@/components/Header';
import SongController from './song';
import StartModal from '@/components/StartModal';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nexusfólio',
	description: 'Hi! I\'m Nexus Prime, a Fullstack Developer!',
	colorScheme: "only light",
	themeColor: "#679099"
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className="bg-zinc-300" style={{ ...inter.style }}>
				<StartModal />

				<Particles />
				<Header />

				<main className="h-screen flex flex-col overflow-x-hidden overflow-y-hidden scroll-smooth z-10">
					{children}
				</main>

				<SongController />
			</body>
		</html>
	)
}
