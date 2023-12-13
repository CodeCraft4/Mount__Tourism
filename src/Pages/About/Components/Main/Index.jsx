import React from 'react'
import Info from './Components/SnowInfo/Index'
import Adventure from './Components/Adventure/Index'
import { Box, Container } from '@mui/material'
import SafetyFirst from './Components/Safety/Index'
import ImageGallary from './Components/Gallary/Index'

const MainSection = () => {
    return (
        <div>
            <Box position={'absolute'} top={500} width={'100%'}>
                <Container maxWidth='md'>
                    <Info/>
                    <Adventure />
                    <SafetyFirst />
                    <ImageGallary/>
                </Container>
            </Box>
        </div>
    )
}

export default MainSection
