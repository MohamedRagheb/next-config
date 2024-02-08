'use client'
import React, { useContext } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Drawer from '@mui/material/Drawer'
import { makeStyles } from '@mui/styles'
import { useMySideNavContext } from '@/contexts/sideNavContext'
import { Close } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
const useStyles = makeStyles({
 sideNav: {
  width: '360px !important',
 },
 list: {
  width: '360px !important',
 },
 listItem: {
  width: '100%',
 },
 head: {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingInline: '15px',
 },
 close: {
  marginRight: '15px',
  '&:hover': {
   borderRadius: '10px',
   backgroundColor: ' rgba(0, 0, 0, 0.09)',
  },
 },
})
const SideNav: React.FC = () => {
 const { isOpen, toggleSideNavStatus } = useMySideNavContext()
 const classes = useStyles()
 return (
  <>
   <Drawer anchor="left" open={isOpen} className={classes.sideNav}>
    <List className={classes.list}>
     <div className={classes.head}>
      <Typography variant="h5">menu</Typography>
      <Close className={classes.close} onClick={toggleSideNavStatus} />
     </div>
     <ListItemButton className={classes.listItem}></ListItemButton>
    </List>
   </Drawer>
  </>
 )
}
export default SideNav
