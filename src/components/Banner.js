import { Box, Button, Toolbar, Typography } from "@mui/material"
import Logo from '../Images/logo.png';
import banner from '../Images/banner.jpg';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { BoxBanner, BtnFiber, BtnInvite, BtnLive, ImgBanner, TypoDiv, TypoH4, TypoSpan } from '../styles/StyleBanner';

const Banner = () => {
      return (
            <section>
                  <Box sx={BoxBanner} >
                  <img style={ImgBanner} src={banner} width='95%' height='200' alt="gradient-img" />
                  <Toolbar>
                  <img src={Logo} style={{
                        margin: '-50px 0 0 25px'
                  }} width={144} height={144} alt="logo-img" />
                  <Typography component="div" sx={TypoDiv}>
                  <Typography sx={TypoH4} variant="h4">Starts in: 3 days: 2 hours: 24 minutes</Typography>
                  <Button variant="containedSizeSmall" size="large" sx={BtnLive} startIcon={<FiberManualRecordIcon sx={BtnFiber}/>}>
                  Not Live
                  </Button>
                  <span style={TypoSpan}>Layers Auction</span>
                  </Typography>
                  <Button variant="outlined" sx={BtnInvite} startIcon={<ThumbUpOffAltIcon />}>Accept Invite</Button>
                  </Toolbar>
                  </Box>
            </section>
      )
}

export default Banner