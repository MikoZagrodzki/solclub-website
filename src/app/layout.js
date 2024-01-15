import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'DJ BONK',
  description: 'DJ BONK',
}

export default function RootLayout({ children }) {
  return (
    <html className='' lang="en">
      <body id='pixel_font' className={inter.className}>{children}</body>
    </html>
  )
}


// import './globals.css'; // Import the global styles

// export const metadata = {
//   title: 'ADHD',
//   description: 'Dive into our ADHD memecoin madness - where humor meets crypto and the revolution begins with you!',
// }

// export default function RootLayout({ children }) {
//   return (
//     <html className='' lang="en">
//       <body className="font-pixel">{children}</body>
//     </html>
//   );
// }