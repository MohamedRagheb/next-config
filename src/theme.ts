'use client'
import { Roboto } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Roboto({
 weight: ['300', '400', '500', '700'],
 subsets: ['latin'],
 display: 'swap',
})

const theme = createTheme({
 palette: {
  mode: 'light',
  primary: {
   light: '#757ce8',
   main: '#3f50b5',
   dark: '#002884',
   contrastText: '#fff',
  },
 },
 typography: {
  fontFamily: roboto.style.fontFamily,
 },
 components: {
  MuiAlert: {
   styleOverrides: {
    root: ({ ownerState }) => ({
     ...(ownerState.severity === 'info' && {
      backgroundColor: '#60a5fa',
     }),
    }),
   },
  },
 },
})

export default theme
