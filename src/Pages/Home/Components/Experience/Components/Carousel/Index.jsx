import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { autoPlay } from 'react-swipeable-views-utils';
import { ArrowLeft, ArrowRight, Swipe } from '@mui/icons-material';
import { TEXT } from 'constant/content'
import { useState } from 'react';

const AutoPlaySwipeableViews = autoPlay(Swipe);



function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = TEXT.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <React.Fragment>
      <Box sx={{ Width: '100%', flexGrow: 1 }} p={5} bgcolor={'#121212'} position={'relative'}>
        <Typography variant='h4' color={'white'} fontWeight={900} fontSize={{ md: '40px', xs: '20px' }} textAlign={'center'}>{TEXT[activeStep].title}</Typography>
        <Paper
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: '#121212',
            color: '#fff'
          }}
        >
          <Box pt={4} maxHeight={400} maxWidth={300} m={'auto'}>
            <Typography variant='h6' fontSize={{ md: '20px', xs: '15px' }}>{TEXT[activeStep].label}</Typography>
          </Box>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          sx={{ mt: 20, color: 'transparent', }}
          onChangeIndex={handleStepChange}
        >
          {TEXT.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  sx={{
                    height: 255,
                    display: 'block',
                    maxWidth: 400,
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  txt={step.title}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          variant='dots'
          activeStep={activeStep}
          sx={{ bgcolor: '#121212', cursor: 'pointer', display: 'flex', m: 'auto', justifyContent: 'center' }}

        />
        {/* to make a build a simple button */}
        <Box position={'absolute'} top={170} right={0} display={'flex'} flexDirection={'column'}>
          <Button
            onClick={activeStep === maxSteps - 1 ? () => setActiveStep(0) : handleNext}
            variant='contained'
            sx={{ borderRadius: '50%', p: 2, height: 65, outline: '1px solid #2196f3', m: 1 }}
          >
            <ArrowRight fontSize='small' sx={{ color: 'white' }} />
          </Button>
        </Box>
        <Box position={'absolute'} top={170} left={0} display={'flex'} flexDirection={'column'}>
          <Button
            onClick={activeStep === 0 ? () => setActiveStep(maxSteps - 1) : handleBack}
            variant='contained'
            sx={{ borderRadius: '50%', p: 2, height: 65, outline: '1px solid #2196f3', m: 1 }}
          >
            <ArrowLeft fontSize='small' sx={{ color: 'white' }} />
          </Button>
        </Box>
        {/* <Box position={'absolute'} onClick={handleNext} top={60} right={0}>
          <Box bgcolor={'red'} width={100} height={100} display={'flex'} flexDirection={'column'}>
            <Box>
              {maxSteps} max step
            </Box>
            <Box>
              {maxSteps - 1} second last
            </Box>
            {activeStep} active step
          </Box>
        </Box> */}
      </Box>
    </React.Fragment>
  );
}

export default SwipeableTextMobileStepper;
