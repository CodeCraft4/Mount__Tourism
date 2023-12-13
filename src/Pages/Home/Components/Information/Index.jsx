import React from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { INFO_SVG } from 'constant/content'

const Info = () => {
  return (
    <div>
          <Container maxWidth='md'>
            <Box>
            <Box mt={10}>
                <Container maxWidth='md'>
                <Box textAlign={'center'}>
            <Typography variant='h3' fontWeight={{xs:'700',sm:800,md:'900'}} fontSize={{xs:"30px",md:'50px'}} p={2}>Make Winter Last Forever</Typography>
            <Typography width={{xs:'100%',sm:'70%',md:'50%'}} display={'flex'} m={'auto'} letterSpacing={{xs:0,md:'2'}} lineHeight={2}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. </Typography>
                </Box>
                <Grid container spacing={4} mt={4}>
                 {INFO_SVG.map((i)=>{
                  return(
                <Grid item md={3} sm={6} textAlign={'center'}>
                  <img src={i.svg} alt="Svg" width={'100%'} height={150} />
                  <Typography variant='h5'>{i.title}</Typography>
                </Grid>
                )
                 })}
                </Grid>
                </Container>
              <Button variant='outlined' color='warning' sx={{display:'flex',m:'auto',mt:8,p:1}}>Learn More</Button>
            </Box>
            </Box>

          </Container>
    </div>
  )
}

export default Info
