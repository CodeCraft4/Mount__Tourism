import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { IMAGE_GALLARY, SECOND_GALLARY } from 'constant/content'
const ImageGallary = () => {
  return (
    <div>
      <Box textAlign={'center'}>
        <Typography variant='body1' fontWeight={600} fontSize={{md:'70px',xs:'30px'}} p={5}>Sleet Gallary</Typography>
        <Grid container spacing={2}>
          {IMAGE_GALLARY.map((i) => {
            return (
              <Grid item md={3} sm={6}>
                <img src={i.img} alt="gallary_img" width={'100%'} height={200}/>
              </Grid>
            )
          })}
          {SECOND_GALLARY.map((i)=>{
            return(
              <Grid item md={3} sm={6}>
              <img src={i.img} alt="gallary_img" width={'100%'} height={200}/>
            </Grid>
            )
          })}

        </Grid>
      </Box>

    </div>
  )
}

export default ImageGallary
