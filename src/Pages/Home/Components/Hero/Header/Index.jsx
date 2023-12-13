import * as React from 'react';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Box } from '@mui/material';
import CommonButton from 'Components/Common/Button';

export default function Header() {
    return (
        <Card sx={{ position: 'relative', textAlign: "center" }}>
            <CardCover sx={{ height: 650, filter: 'brightness(40%)' }}>
                <video
                    autoPlay
                    loop
                    muted
                    poster="#"
                >
                    <source
                        // Video Url
                        src="https://player.vimeo.com/external/412137588.sd.mp4?s=9c19426ecd1aec45f12f1720603c26927f5a3e67&profile_id=164&oauth2_token_id=57447761"
                        type="video/mp4"
                    />
                </video>
            </CardCover>
            <CardContent>
                <Typography
                    fontWeight={{ xs: '600', sm: 800, md: '900' }}
                    fontSize={{ xs: '30px', md: '60px' }}
                    textColor="#fff"
                    mt={{ xs: 12, sm: 18 }}
                >
                    Wellcome to Mount Sleet
                </Typography>
                <Typography textColor={"#fff"}
                    sx={{ letterSpacing: { xs: 0, sm: 1, md: 1 }, width: { xs: '80%', md: '40%' }, m: { xs: 'auto', md: 'auto' } }}
                >
                    I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
                </Typography>
                <Box m={4}>
                  <CommonButton/>
                </Box>
            </CardContent>
        </Card>

    );
}