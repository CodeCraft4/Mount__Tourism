import { Grid, Typography } from '@mui/material'
import React from 'react'

const SafetyFirst = () => {
  return (
    <div>
         <Grid container textAlign={'center'}>
        <Grid item md={6} sm={6} height={450} bgcolor={'#2121'}>
            <Typography variant='body1' mt={10} fontWeight={900} p={1} fontSize={'30px'}>Safety  First</Typography>
            <Typography variant='body2' letterSpacing={2} p={2}>I'm a paragraph.I'm a paragraph. Click here to add your own 
            text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own 
            content and make changes to the font.  Click here to add your own text and edit me. 
            It’s easy. Just click “Edit Text” or double click me to add your own content 
            and make changes to the font. </Typography>
        </Grid>
        <Grid item md={6} sm={6}>
            <img src="https://static.wixstatic.com/media/ea71bb_b9186ba2a1814173bf7953c8cc4e56d3~mv2.jpg/v1/fill/w_490,h_473,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_b9186ba2a1814173bf7953c8cc4e56d3~mv2.jpg" alt="SafetyFirst-pic"
            width={'100%'}
            height={'100%'}
             />
        </Grid>
         </Grid>
    </div>
  )
}

export default SafetyFirst
