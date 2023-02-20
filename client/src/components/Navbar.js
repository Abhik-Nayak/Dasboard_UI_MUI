import { Pets } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import { AppBar, Avatar, InputBase, styled ,Toolbar, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import { padding } from '@mui/system';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  backgroundColor: "primary"
})
const Search = styled("div")(({ theme })=>({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",

}))
const Icons = styled("div")(({ theme })=>({
  display: "flex"

}))

const Navbar = () => {
  return (
    <AppBar position='static'>
      <StyledToolbar>
        <Typography varient="h6" sx={{ display: { xs: "none", sm: "block"}}}>
           Social
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none"}}}/>
        <Search><InputBase placeholder='search...'/></Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <MailIcon color="action" />
          </Badge>
          <Badge badgeContent={4} color='error'>
            <Notifications color="action" />
          </Badge>
          <Avatar></Avatar>

        </Icons>
      </StyledToolbar>
    </AppBar>
  )
}

export default Navbar