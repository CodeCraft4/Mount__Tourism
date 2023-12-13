import React from 'react'
import { Grid, Typography } from '@mui/material'

const Adventure = () => {
    return (
        <div>
                    <Grid container>
                        <Grid item md={6} sm={6} >
                            <img src="https://static.wixstatic.com/media/ea71bb_6d8ea675d24d4256bee26a0a2e7d3466~mv2.jpg/v1/fill/w_490,h_473,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_6d8ea675d24d4256bee26a0a2e7d3466~mv2.jpg" alt="Morning"
                                width={'100%'} 
                                height={'100%'} />
                        </Grid>
                        <Grid item md={6} sm={6} bgcolor={'#2121'} height={450}>
                            <Typography variant='body1' mt={10} p={3} fontSize={'30px'} fontWeight={'600'}>Adventure & Experience</Typography>
                            <Typography variant='body2' p={3} letterSpacing={1}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.</Typography>
                        </Grid>
                    </Grid>
        </div>
    )
}

export default Adventure
