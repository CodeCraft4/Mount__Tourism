import { Box, Container, Grid, Typography } from '@mui/material'
import CommonButton from 'Components/Common/Button'
import { TRAIL_INFO } from 'constant/content'
import React from 'react'
const Trails = () => {
    return (
        <div>
            <Container maxWidth='md'>
                <Box position={'relative'}>
                    <Grid container spacing={0}>
                        <Grid item md={5} sm={6} >
                            <img src="https://static.wixstatic.com/media/ea71bb_3c05ae0fba3543c99781d4c7613ea98e~mv2.jpg/v1/fill/w_341,h_843,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea71bb_3c05ae0fba3543c99781d4c7613ea98e~mv2.jpg"
                             alt="climbing"
                              width={'100%'}
                              height={{md:'100%',xs:200}}
                              
                              />
                        </Grid>
                        <Grid item md={7} sm={6} bgcolor={'#121212'}>
                            <Typography variant='h3' color={'white'} p={4} mt={4}>Our Trails</Typography>
                            <Container maxWidth='md'>
                                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                    <Box>
                                        <Box color={'white'}>
                                            {TRAIL_INFO.map((i) => {
                                                return (
                                                    <Box pt={6}>
                                                        <Typography variant='h5'>{i.title}</Typography>
                                                        <Typography>{i.offers}</Typography>
                                                        <Typography>{i.price}$</Typography>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Box>
                                            {TRAIL_INFO.map((i) => {
                                                return (
                                                    <Box pt={6}>
                                                        <Box p={3}>
                                                            <CommonButton/>
                                                        </Box>
                                                    </Box>
                                                )
                                            })}
                                        </Box>
                                    </Box>
                                </Box>
                            </Container>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </div>
    )
}

export default Trails
