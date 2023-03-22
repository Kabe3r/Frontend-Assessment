import { Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { TypoDiv, TypoH4 } from "../styles/StyleBanner";
import { BoxFeatured, BtnAuction } from "../styles/StyleFeatured";
import { LineBreak } from "../styles/StyleHeader";
import { useGetDataQuery } from '../RTK Query/APISlice';
import CardGrid from "./CardGrid";

 
const Featured = () => {
  const { data, isLoading, error } = useGetDataQuery();

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

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
     
      {data ? (
        data.data.map((items, index) => {
        return (
        <CardGrid key={index} {...items} />
        )
      })): null}
</Grid>
      
      </Box>
    </section>
  )
}

export default Featured;