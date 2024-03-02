import React from 'react'

export default function RootLayout({
 children,
}: {
 children: React.ReactNode
}) {
 return (
  <html>
   <body style={{ margin: '0px' }}>{children}</body>
  </html>
 )
}
