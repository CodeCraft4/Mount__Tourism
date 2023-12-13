import React from 'react'
import { Box, Button, Grid, Link, List, ListItem, Typography } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const FooterArea = () => {
  return (
    <div>
      <Box position={'relative'} bgcolor={'#212121'} width={'100%'} mt={{md:100,sm:230,xs:350}} top={40} p={8}>
        <Grid container alignItems={'center'}>
          <Grid item md={6} sm={6}  color={'white'} alignItems={"center"}>
            <Typography >@2035 by Mount sleet <br />Powered by <Link href="#">Wix</Link> </Typography>
          </Grid>
          <Grid item md={6} sm={4}  color={'white'}>
            <Box display={{ xs: 'block',sm:'flex', md: 'flex' }} justifyContent={'space-around'} alignItems={'center'}>
              <Box>
                <List>
                  <ListItem><Link href="#" sx={{ textDecoration: 'none', color: 'white' }}>ABOUT</Link></ListItem>
                  <ListItem><Link href="#" sx={{ textDecoration: 'none', color: 'white' }}>TRAILS</Link></ListItem>
                  <ListItem><Link href="#" sx={{ textDecoration: 'none', color: 'red' }}>NEWS</Link></ListItem>
                  <ListItem><Link href="#" sx={{ textDecoration: 'none', color: 'white' }}>CONTACT</Link></ListItem>
                </List>
              </Box>
              <Box>
                <List>
                  <ListItem><Link hre='#' sx={{ textDecoration: 'none', color: 'white' }}>Facebook</Link></ListItem>
                  <ListItem><Link hre='#' sx={{ textDecoration: 'none', color: 'white' }}>Whatsapp</Link></ListItem>
                  <ListItem><Link hre='#' sx={{ textDecoration: 'none', color: 'white' }}>Instagram</Link></ListItem>
                </List>
              </Box>
              <Box>
                <Button variant='contained' color='error' sx={{width:{xs:'130%'},display:{sm:'none'}}}>Book Now</Button>
                <br />
                <br />
                <Link href='#' sx={{ textDecoration: 'none', color: 'white' }}><KeyboardArrowUpIcon fontSize='large' sx={{ mt: 9 }} /></Link>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default FooterArea
