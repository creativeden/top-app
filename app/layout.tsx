import { Metadata } from 'next'
import './globals.css'
import { Noto_Sans } from 'next/font/google'

const noto_sans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
    <html lang="en">
        <body className={noto_sans.className}>
            {children}
        </body>
    </html>
    )
}
