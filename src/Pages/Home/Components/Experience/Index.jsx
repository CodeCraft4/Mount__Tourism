import React from 'react'
import { Box, Container } from '@mui/material'
import ExpericeComponent from './Components/Index'
import SleetNews from './Components/News/Index'

const Experience = () => {
  return (
    <React.Fragment>
      <Box position={'relative'} mt={10}>
          <Box position={'absolute'} width={'100%'} height={'700px'} top={90} mt={10} zIndex={-1} sx={{opacity:'0.5'}} display={{xs:'none',md:'block'}}>
            <img src="https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="mountian snow"
              width={'100%'}
              height={'100%'}
            />
          </Box>
        <Container maxWidth='md'>
          <ExpericeComponent />
        </Container>
        <Container maxWidth='md'>
         <SleetNews/>
        </Container>
      </Box>
    </React.Fragment>
  )
}

export default Experience
