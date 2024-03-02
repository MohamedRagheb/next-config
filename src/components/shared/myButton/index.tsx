import React from 'react'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'

interface MyButtonProps {
 variant: 'outlined' | 'contained'
 href?: string
 disabled?: boolean
 text: string
 state: boolean
 type: 'button' | 'submit' | 'reset' | undefined
}

const MyButton: React.FC<MyButtonProps> = ({
 variant = 'contained',
 href,
 disabled,
 text,
 state = false,
 type = 'button',
}) => {
 return (
  <Button type={type} variant={variant} href={href} disabled={disabled}>
   {state ? <CircularProgress size={'1.5rem'} color={'warning'} /> : text}
  </Button>
 )
}

export default MyButton
