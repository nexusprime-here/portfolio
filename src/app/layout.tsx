import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import ParticlesContainer from './particles';
import Header from '@/components/Header';
import SongController from './song';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nexusfólio',
	description: 'Portfólio de nexus_prime',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<body className="bg-zinc-300" style={{ ...inter.style }}>
				<ParticlesContainer />

				<Header />

				<main className="h-screen flex flex-col overflow-x-hidden overflow-y-hidden scroll-smooth z-10">
					{children}
				</main>

				<SongController />
			</body>
		</html>
	)
}
