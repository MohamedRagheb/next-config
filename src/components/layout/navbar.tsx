'use client'
import * as React from 'react'
import { makeStyles } from '@mui/styles'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useMySideNavContext } from '@/contexts/sideNavContext'

const useStyles = makeStyles({
 navbar: {
  backgroundColor: 'red',
  color: '#ffffff',
  borderRadius: 4,
  margin: '0px !important',
 },
})
const NavBar: React.FC = () => {
 const styles = useStyles()
 const { isOpen, toggleSideNavStatus } = useMySideNavContext()

 return (
  <Box sx={{ flexGrow: 1 }}>
   <AppBar className={styles.navbar} position="static">
    <Toolbar>
     <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
     >
      <MenuIcon onClick={toggleSideNavStatus} />
     </IconButton>
     <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
     <Button color="inherit">Login</Button>
    </Toolbar>
   </AppBar>
  </Box>
 )
}
export default NavBar
