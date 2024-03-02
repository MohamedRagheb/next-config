'use client'
import React, { useContext } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import { useMySideNavContext } from '@/contexts/sideNavContext'
import { Close } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link'

const SideNav: React.FC = () => {
 const { isOpen, toggleSideNavStatus } = useMySideNavContext()
 return (
  <>
   <Drawer anchor="left" open={isOpen}>
    <List>
     <div>
      <Typography variant="h5">menu</Typography>
      <Close onClick={toggleSideNavStatus} />
     </div>
     {['home', 'patients', 'Profile'].map((ele) => (
      <ListItemButton key={ele}>
       <Link underline="none" href={ele}>
        {ele}
       </Link>
      </ListItemButton>
     ))}
     <ListItemButton></ListItemButton>
    </List>
   </Drawer>
  </>
 )
}
export default SideNav
