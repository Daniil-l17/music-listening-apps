import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.scss'

import {MainProvaderLayout} from '@/provaders/MainProvaderLayout'
import ReduxProvader from '@/provaders/ReduxProvader'
import NextTopLoader from 'nextjs-toploader'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Home music',
  icons: {
    icon: '/applitools-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={inter.className}>
        <ReduxProvader>
          <MainProvaderLayout>
            <NextTopLoader color='#475744' />
            <ToastContainer
              position='bottom-center'
              autoClose={1500}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            {children}
          </MainProvaderLayout>
        </ReduxProvader>
      </body>
    </html>
  )
}
