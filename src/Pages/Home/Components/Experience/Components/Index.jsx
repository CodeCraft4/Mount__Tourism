import { Container, Grid } from '@mui/material'
import React from 'react'
import SwipeableTextMobileStepper from './Carousel/Index'

const ExpericeComponent = () => {
    return (
        <div>
            <Container maxWidth='md'>
                <Grid container>
                    <Grid item md={8} sm={8}>
                            <SwipeableTextMobileStepper />
                            </Grid>
                            <Grid item md={4} sm={4}>
                            <img src="https://static.wixstatic.com/media/ea71bb_089a358144c24d8492b9abb190cb43b6~mv2.jpg/v1/fill/w_341,h_477,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_089a358144c24d8492b9abb190cb43b6~mv2.jpg"
                                alt="Group."
                                width={'100%'}
                                height={'100%'}
                            />
                            </Grid>
                </Grid>
            </Container>

        </div>
    )
}

export default ExpericeComponent
