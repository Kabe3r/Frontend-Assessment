import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { Badge } from '@mui/material';


const Header = () => {

      return (
            <AppBar color='transparent' sx={{ padding: '10px'}} >
                  <Toolbar >
                        <Typography component="div" sx={{ flexGrow: 1,
                        fontFamily: 'IBM-Plex'
                         }}>
                              <Typography variant='h4' sx={{
                                    fontWeight: 600,
                                    fontSize: '30px',
                                    fontFamily: 'IBM-Plex'
                                    
                              }}>Welcome</Typography>
                              <Typography sx={{ fontSize: '16px' }} variant='p' color='#475467'>Your current sales auction and activity</Typography>

                        </Typography>
                        <Badge sx={{
                              "& .MuiBadge-badge": {
                                    color: "#fff",
                                    backgroundColor: "#F04438"
                              }
                        }} badgeContent={2} anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right',
                        }}>
                              <NotificationsNoneIcon />
                        </Badge>
                  </Toolbar>
            </AppBar>
      )
}

export default Header