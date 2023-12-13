import React from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NEWS_CARD } from 'constant/content'

const SleetNews = () => {
    return (
        <div>
                <Box textAlign={'center'}>
                    <Typography variant='h2' fontWeight={{ xs: '600',sm:800, md: '900' }} pt={6} fontSize={{ xs: '40px', md: '60px' }}>Sleet News</Typography>
                    <Typography width={{ xs: '100%', md: '50%' }} m={'auto'} letterSpacing={{ xs: 0, md: 2 }} lineHeight={2} pt={2}>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font</Typography>
                </Box>
                <Box>
                    <Grid container mt={5} spacing={2}>
                        {NEWS_CARD.map((i) => {
                            return (
                                <Grid item md={4} sm={6}>
                                    <Box bgcolor={'#212121'}>
                                    <img src={i.ImageUrl} alt="Card" width={'100%'} />
                                    <Typography variant='h6' bgcolor={'#212121'} color={'white'} p={2} fontWeight={'bold'}>{i.tilte}</Typography>
                                    <hr />
                                    <Box bgcolor={'#212121'} color={'white'} display={'flex'} p={2} justifyContent={'space-between'} alignItems={'center'}>
                                        <Box display={'flex'} alignItems={'center'}>
                                            <RemoveRedEyeIcon fontSize='small'/>{i.views}
                                            <MailOutlineIcon fontSize='small' /> 0
                                        </Box>
                                        <Box display={'flex'} alignItems={'center'}>
                                            {i.like}<FavoriteBorderIcon color='error' />
                                        </Box>
                                    </Box>
                                    </Box>

                                </Grid>
                            )
                        })}
                    </Grid>

                    <Button variant='contained' color='warning' sx={{ display: 'flex', m: 'auto', p: 2, mt: 2 }}>Read More</Button>
                </Box>
        </div>
    )
}

export default SleetNews
