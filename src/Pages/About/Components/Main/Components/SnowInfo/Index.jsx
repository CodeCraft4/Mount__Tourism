import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const Info = () => {
  return (
    <div>
      <Box>
          <Grid container textAlign={'center'}>
            <Grid item md={6} sm={6} bgcolor={'#121212'} color={'silver'} height={600}>
              <Typography variant='body1' pt={5} pb={2}
                fontSize={'30px'}
                fontWeight={'800'}
              >When Snow Falls, We're Here</Typography>
              <Typography variant='body2' p={3} letterSpacing={2}>I'm a paragraph. Click here to add your
                own text and edit me. It’s easy. Just click “Edit Text” or double
                click me to add your own content and make changes to the font. Feel
                free to drag and drop me anywhere you like on your page.​</Typography>
              <Typography variant='body2' p={3} letterSpacing={2}>This is a great space to write a long text about your company
                and your services. You can use this space to go into a little more
                detail about your company. Talk about your team and what services you provide. </Typography>
            </Grid>
            <Grid item md={6} sm={6}
              sx={{ backgroundImage: 'url(https://images.pexels.com/photos/7227638/pexels-photo-7227638.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load)',
                    backgroundAttachment:'fixed',
                    
            }}
            >
            </Grid>
          </Grid>
      </Box>


    </div>
  )
}

export default Info
