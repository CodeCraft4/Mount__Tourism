import * as React from 'react';
import { Box, Typography } from '@mui/material';
export default function Header() {
    return (
            <Box position={'relative'} zIndex={-1} bgcolor={'#1212'} height={600} >
            <Typography
                fontWeight={{ xs: '600',sm:'800', md: '900' }}
                fontSize={{ xs: '30px',sm:'50px', md: '60px' }}
                textAlign={'center'}
                pt={{ xs: 12, sm: 18, md: 25 }}
            >
                Our Trails
            </Typography>
            <Typography display={'flex'} justifyContent={'center'} m={"auto"} width={{md:'40%',sm:'60%',xs:'80%'}} letterSpacing={{md:'2',sm:'1',xs:'0'}}>
                I'm a paragraph. Click here to add your own text and edit me. 
                It’s easy. Just click “Edit Text” or double click me to add your own
                 content and make changes to the font.
            </Typography>
            </Box>
    );
}