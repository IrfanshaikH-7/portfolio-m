
import Cursor from '@/components/cursor'
import './globals.css'
import type { Metadata } from 'next'
import { Tilt_Neon } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { ClerkProvider } from '@clerk/nextjs'
import Social from '@/components/utility/Social'

const tilt_neon = Tilt_Neon({ subsets: ['latin'], weight: ['400'] })


export const metadata: Metadata = {
  title: 'Irfan-Portfolio',
  description: 'My portfolio website to showcase my skills and connect with like minded people and potential employers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className='no-scrollbar scroll-pt-72 scroll-smooth' suppressHydrationWarning>
        {/* <head>
          <script type="text/javascript">
            (function(c,l,a,r,i,t,y){
              c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) }
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "je2g0npf1i");
          </script>
        </head> */}
        <body className={`${tilt_neon.className} relative`}>

          <ThemeProvider
            attribute='class'
            defaultTheme='dark'
            enableSystem
            storageKey='portfolio-m'
          >
            <Cursor />

            <div className='  h-full lg:h-screen w-full no-scrollbar'>
              {children}


            </div>

          </ThemeProvider>

        </body>
      </html>
    </ClerkProvider>
  )
}
