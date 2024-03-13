import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from './providers'
import './globals.css'
import AppBgImg from './AppImage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Papalote Museo del Niño',
  description: 'Módulo de Ciencia de Datos',
}

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Layout UI */}
//         <main className={inter.className}>{children}</main>
//       </body>
//     </html>
//   )
// }
export default function RootLayout({children}: { children: React.ReactNode }) {
  return (
    <html lang="en" className='dark'>
      <body>
      {/* <AppBgImg/> */}
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
