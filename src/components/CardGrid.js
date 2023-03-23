import { Button, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { AmountCard, BidCard, BidderCard, BoxCard, BtnCard, CardMain, ImgCard, KOCard, NameCard, TitleCard } from "../styles/StyleCard"

const CardGrid = ({ name, title, bid, image }) => {
  return (
    <Grid sx={{ paddingBottom: '20px' }}>
      <Card sx={CardMain}>
        <Box component="div" sx={BoxCard}>
          <div style={ImgCard}>
            <CardMedia
              component="img"
              alt="img"
              sx={{ width: '100px' }}
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
          <Typography variant="h6" sx={TitleCard}>
            {title}
          </Typography>
          <Typography component="div">
            <span style={BidCard}>Current Bid:</span>
            <span style={AmountCard}>{bid}</span>
          </Typography>
        </CardContent>
        <Divider variant='middle' />
        <CardActions>
          <Button variant="contained" size="large" sx={BtnCard} >Add to wishlist</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default CardGrid