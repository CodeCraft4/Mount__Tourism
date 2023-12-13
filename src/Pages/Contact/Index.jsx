import { Box, Container, Typography } from '@mui/material'
import React from 'react'
// import ContactForm from './Form/Index'
import { CloseTwoTone } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const Contact = () => {

    const navigate = useNavigate()

    return (
        <div>
            <Box position={'relative'} >
                <Box position={'absolute'}
                    width={'100%'}
                    height={'100%'}
                    zIndex={-1} sx={{ opacity: '0.5' }}
                >
                    <img src="https://images.pexels.com/photos/16486954/pexels-photo-16486954/free-photo-of-kucukcekmece-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="mountian snow"
                        width={'100%'}
                        height={'100%'}
                        style={{backgroundAttachment:"fixed",position:'fixed'}}
                    />
                </Box>
                <Container maxWidth='md' sx={{ backgroundColor: "#212121", color: 'white', textAlign: 'center' }}>
                    <Box textAlign={'end'} p={3}>
                        <CloseTwoTone sx={{cursor:'pointer'}} onClick={()=>navigate('/home')} color='error' fontSize='large' />
                    </Box>
                    <Typography variant='body1' pt={2} fontSize={{md:'50px',xs:'30px'}} fontWeight={'900'} color={'error'}>Contact Us</Typography>
                    <Typography variant='body2' fontSize={'20px'}
                        display={'flex'} m={'auto'}
                        justifyContent={'center'}
                        width={'80%'}
                        p={2}>For tour enquiries or any questions, please use the form below and we will get back to you.</Typography>
                    <Box>
                        {/* <ContactForm/> */}
                    </Box>

                </Container>

            </Box>
        </div>

    )
}

export default Contact
