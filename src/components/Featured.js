import { Alert, Box, Button, CircularProgress, Divider, Grid, Toolbar, Typography } from "@mui/material";
import { TypoH4 } from "../styles/StyleBanner";
import { BoxFeatured, BtnAuction } from "../styles/StyleFeatured";
import { useGetDataQuery } from '../RTK Query/APISlice';
import CardGrid from "./CardGrid";


const Featured = () => {
  const { data, isLoading, error } = useGetDataQuery();


  if (error) {
    return (
      <Alert variant="outlined" severity="error">
        There is an Error in Loading Data
      </Alert>
    )
  }

  return (
    <section style={{ margin: '20px' }}>
      <Box sx={BoxFeatured} >
        <Toolbar>
          <Typography component='div' sx={{ flexGrow: 1 }}>
            <Typography variant="h4" sx={TypoH4}>Featured Items</Typography>
          </Typography>
          <Button variant='outlined' sx={BtnAuction}>View Auction</Button>
        </Toolbar>
        <Divider variant='middle' />
        <Grid container sx={{ justifyContent: 'center', gap: '30px' }}>
          {isLoading ? (
            <CircularProgress size={70} sx={{ marginTop: '100px' }} color="secondary" />
          ) : data ? (
            data.data.map((items, index) => {
              return (
                <CardGrid key={index} {...items} />
              )
            })) : null}
        </Grid>

      </Box>
    </section>
  )
}

export default Featured;