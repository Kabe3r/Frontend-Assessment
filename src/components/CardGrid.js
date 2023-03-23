import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { AmountCard, BidCard, BidderCard, BoxCard, ImgCard, KOCard, LineCard, NameCard, TitleCard } from "../styles/StyleCard"

const CardGrid = ({ name, title, bid, image }) => {
  return (
      <Grid >
    <Card sx={{ width: 580, marginTop: '40px' }}>
      <Box component="div" sx={BoxCard}>
      <div style={ImgCard}>
      <CardMedia
        component="img"
        alt="img"
        sx={{ width: '100px'}}
        image={image}
      />
      </div>
      </Box>
      <CardContent>
      <Typography component="div" sx={{ marginBottom: '24px' }}>
      <span style={KOCard}>KO</span>
      <span style={NameCard}>{name}</span>
      <span style={BidderCard}>(Highest Bidder)</span>
      </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={TitleCard}>
        {title}
        </Typography>
        <Typography component="div">
        <span style={BidCard}>Current Bid:</span>
        <span style={AmountCard}>{bid}</span>
        </Typography>
      </CardContent>
        <hr style={LineCard}/>
      <CardActions>
        <Button variant="contained" size="large" sx={{width: 1}} >Add to wishlist</Button>
      </CardActions>
    </Card>
    </Grid>
  )
}

export default CardGrid