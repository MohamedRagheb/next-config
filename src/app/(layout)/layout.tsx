'use client'
import { Inter } from 'next/font/google'
import NavBar from '@/components/layout/navbar'
import SideNav from '@/components/layout/SideNav'
import React from 'react'
import { SideNavContextProvider } from '@/contexts/sideNavContext'

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
  <html lang="en">
   <body style={{ margin: '0px' }}>
    <SideNavContextProvider>
     <NavBar />
     <SideNav />
     {children}
    </SideNavContextProvider>
   </body>
  </html>
 )
}
