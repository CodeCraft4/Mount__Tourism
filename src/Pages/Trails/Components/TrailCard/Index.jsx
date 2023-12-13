import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { TRAIL_CARD } from 'constant/content'
import trailContext from 'context/trialsContext'
import { useContext } from 'react'

const TrailCard = () => {
    const { trail, setTrail } = useContext(trailContext)
    const handleAdd = (i) => {
        // const TrailExist = trail?.filter((e) => e?.id === i?.id)
        // setTrail(TrailExist)
        if (trail.find((e) => e.id === i.id)) {
            const RemoveId = trail.filter((e) => e.id !== i.id)
            setTrail(RemoveId)
        }
        else {
            trail.push({ ...i, quantity: 1 })
            setTrail(trail)
        }
       
    };
    return (
        <div>
            <Box position={'absolute'} top={{ md: 450, sm: 400, xs: 300 }} zIndex={1} width={'100%'}>
                <Container maxWidth='md' >
                    <Grid container spacing={3}>
                        {TRAIL_CARD.map((i, index) => {
                            return (
                                <Grid item md={6}>
                                    <Box bgcolor={'#2121'}>
                                        <img src={i.imgpath} alt="trailscardImage" width={'100%'} height={350} />
                                        <Typography variant='body1' p={2} px={3} fontSize={'20px'} fontWeight={'bold'}>{i.title}</Typography>
                                        <Typography variant='body2' p={1} px={3} fontSize={'15px'}>{i.offers}</Typography>
                                        <Typography variant='body2' p={1} px={3} fontSize={'15px'}>{i.time}</Typography>
                                        <Typography variant='body2' p={1} px={3} fontSize={'15px'}>${i.price}</Typography>
                                        <Button variant='contained' color='error' sx={{ m: 3 }} onClick={() => handleAdd(i, index)}>Book Now</Button>
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
