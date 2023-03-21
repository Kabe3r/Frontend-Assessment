import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


const Header = () => {
      
  return (
    <header>
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar color='transparent' >
        <Toolbar >
      <Typography component="div" sx={{ flexGrow: 1 }}>
      <Typography variant='h4'>Welcome</Typography>
      <Typography variant='p'>Your current sales auction and activity</Typography>
      </Typography>
          <NotificationsNoneIcon />
        </Toolbar>
      </AppBar>
    </Box>
    </header>
  )
}

export default Header