'use client'
import React from 'react'
import { Button, Typography } from '@mui/material'
import { Grid } from '@mui/material'
import useLogin from '@/hooks/useLogin'
import TextFeildInput from '@/components/shared/TextFeildInput'
import MyButton from '@/components/shared/myButton'
const Login: React.FC = (): any => {
 const { actions, states, data } = useLogin()

 return (
  <form onSubmit={actions?.handleSubmit(actions.onSubmit)}>
   <Grid
    container
    item
    justifyContent={'center'}
    alignContent={'center'}
    xs={12}
    sx={{ minHeight: '100vh' }}
    gap={'40px'}
   >
    <Grid container item xs={12} justifyContent="center">
     <Typography
      sx={{ fontSize: '24px', fontWeight: '600', color: 'blue' }}
      component={'h1'}
     >
      Dnatal One
     </Typography>
    </Grid>
    <Grid
     container
     item
     sx={{ border: '1px solid black', padding: '20px' }}
     xs={10}
     lg={4}
     md={8}
     display={'flex'}
     flexDirection={'column'}
     justifyContent={'center'}
     gap={'15px'}
    >
     <TextFeildInput
      id={'username'}
      name={'username'}
      control={states.control}
      error={states.errors['username']}
      label={'username'}
     />
     <TextFeildInput
      type={'password'}
      id={'password'}
      name={'password'}
      control={states.control}
      error={states.errors['password']}
      label={'password'}
     />
     <span style={{ width: '100px', alignSelf: 'center' }}>
      <MyButton
       type={'submit'}
       variant={'contained'}
       text={'submit'}
       state={states.loading}
      />
     </span>
    </Grid>
   </Grid>
  </form>
 )
}
export default Login
