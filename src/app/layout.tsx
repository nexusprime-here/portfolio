import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google';

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
			<body className="h-screen flex flex-col overflow-x-hidden bg-zinc-300" style={{
				...inter.style,
			}}>
				{children}
			</body>
		</html>
	)
}
