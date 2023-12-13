import { FavoriteBorder, Message, MoreVert, RemoveRedEye } from '@mui/icons-material'
import { Box, Container, Grid, Typography } from '@mui/material'
import { SLEET_CARD, SLEET_SECOND_CARD} from 'constant/content'
import React from 'react'

const TrailCard = () => {
    return (
        <div>
            <Box position={'absolute'} top={{ md: 450, sm: 400, xs: 300 }} zIndex={1} width={'100%'}>
                <Container maxWidth='md'>
                    <Grid container spacing={2}>
                        {SLEET_CARD.map((i) => {
                            return (
                                <Grid item md={4} sm={6}>
                                    <Box bgcolor={'#2121'}>
                                        <img src={i.imgpath} alt="cardImage" width={'100%'} height={250} />
                                        <Box display={'flex'} justifyContent={'space-between'} p={2}>
                                            <Typography variant='body1'>{i.date}</Typography>
                                            <MoreVert/>
                                        </Box>
                                        <Typography variant='body2' fontSize={'20px'} fontWeight={'bold'} p={2}>{i.title}</Typography>
                                        <hr />
                                        <Box display={'flex'} justifyContent={'space-between'} p={1}>
                                            <Box display={'flex'} alignItems={'center'}>
                                                <RemoveRedEye fontSize='small' />{i.views}
                                                <Message fontSize='small' /> 0
                                            </Box>
                                            <Box display={'flex'} alignItems={'center'}>
                                                {i.like} <FavoriteBorder color='error' fontSize='small' />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>
                    <br />
                    <br />
                    <Grid container spacing={2}>
                        {SLEET_SECOND_CARD.map((i) => {
                            return (
                                <Grid item md={4} sm={6}>
                                    <Box bgcolor={'#2121'}>
                                        <img src={i.imgpath} alt="cardImage" width={'100%'} height={250} />
                                        <Box display={'flex'} justifyContent={'space-between'} color={'gray'} p={2}>
                                            <Typography variant='body1'>{i.date}</Typography>
                                            <MoreVert/>
                                        </Box>
                                        <Typography variant='body2' fontSize={'20px'} fontWeight={'bold'} p={2}>{i.title}</Typography>
                                        <hr />
                                        <Box display={'flex'} justifyContent={'space-between'} p={1}>
                                            <Box display={'flex'} alignItems={'center'}>
                                                <RemoveRedEye fontSize='small' />{i.views}
                                                <Message fontSize='small' /> 0
                                            </Box>
                                            <Box display={'flex'} alignItems={'center'}>
                                                {i.like} <FavoriteBorder color='error' fontSize='small' />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })}
                    </Grid>

                </Container>
            </Box>
        </div>
    )
}

export default TrailCard
