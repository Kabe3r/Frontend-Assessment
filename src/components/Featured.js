import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Toolbar, Typography } from "@mui/material";
import { TypoDiv, TypoH4 } from "../styles/StyleBanner";
import { BoxFeatured, BtnAuction } from "../styles/StyleFeatured";
import { LineBreak } from "../styles/StyleHeader";

 
const Featured = () => {
  return (
    <section>
      <Box sx={BoxFeatured} >
      <Toolbar>
        <Typography component='div' sx={TypoDiv}>
        <Typography variant="h4" sx={TypoH4}>Featured Items</Typography>
        </Typography>
        <Button variant='outlined' sx={BtnAuction}>View Auction</Button>
      </Toolbar>
      <hr style={LineBreak}/>
      <Grid container sx={{ justifyContent: 'center', gap: '30px'}}>
      {Array.from(Array(6)).map((_, index) => (
    <Grid key={index}>
    <Card sx={{ width: 580, marginTop: '40px' }}>
      <Box sx={{ backgroundColor: '#F2F4F7', margin: '12px auto 0 auto', display: 'block', borderRadius: '8px', width: '90%'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      </Box>
      <CardContent>
      <Typography component="div" sx={{ marginBottom: '24px' }}>
      <span style={{ background:'#F2F4F7', color: '#475467', padding: '4px', borderRadius: '100%'  }}>KO</span>
      <span style={{ color: '#344054', fontWeight: 600, marginLeft: '6px' }}>Koray Okumus</span>
      <span style={{ color: '#98A2B3', fontSize: '14px', marginLeft: '5px'}}>(Highest Bidder)</span>
      </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '16px', fontWeight: 700, marginBottom: '10px'}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae, rerum?
        </Typography>
        <Typography component="div">
        <span style={{ color: '#344054', fontFamily: 'IBM-Plex', fontWeight: 400}}>Current Bid:</span>
        <span style={{ color: '#344054', fontWeight: 700}}>795,000</span>
        </Typography>
      </CardContent>
        <hr style={{ border: '1px solid #EAECF0', width: '90%'}}/>
      <CardActions>
        <Button variant="contained" size="large" sx={{width: 1}} >Add to wishlist</Button>
      </CardActions>
    </Card>
    </Grid>
  ))}
</Grid>
      
      </Box>
    </section>
  )
}

export default Featured;