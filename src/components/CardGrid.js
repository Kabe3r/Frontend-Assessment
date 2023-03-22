import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"

const CardGrid = ({ name, title, bid, image }) => {
  return (
      <Grid >
    <Card sx={{ width: 580, marginTop: '40px' }}>
      <Box component="div" sx={{ backgroundColor: '#F2F4F7', margin: '12px auto 0 auto', display: 'block', borderRadius: '8px', width: '90%', height: '200px'}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'inherit' }}>
      <CardMedia
        component="img"
        alt="img"
        sx={{ width: '100px'}}
        image={image}
      />
      </div>
      {/* </div> */}
      </Box>
      <CardContent>
      <Typography component="div" sx={{ marginBottom: '24px' }}>
      <span style={{ background:'#F2F4F7', color: '#475467', padding: '4px', borderRadius: '100%'  }}>KO</span>
      <span style={{ color: '#344054', fontWeight: 600, marginLeft: '6px' }}>{name}</span>
      <span style={{ color: '#98A2B3', fontSize: '14px', marginLeft: '5px'}}>(Highest Bidder)</span>
      </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{fontSize: '16px', fontWeight: 700, marginBottom: '10px'}}>
        {title}
        </Typography>
        <Typography component="div">
        <span style={{ color: '#344054', fontFamily: 'IBM-Plex', fontWeight: 400}}>Current Bid:</span>
        <span style={{ color: '#344054', fontWeight: 700}}>{bid}</span>
        </Typography>
      </CardContent>
        <hr style={{ border: '1px solid #EAECF0', width: '90%'}}/>
      <CardActions>
        <Button variant="contained" size="large" sx={{width: 1}} >Add to wishlist</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default CardGrid