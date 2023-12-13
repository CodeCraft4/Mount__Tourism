import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { ArrowDropDown, ArrowDropUp, ShoppingBagOutlined } from '@mui/icons-material';
import { useState } from 'react';
import { useContext } from 'react';
import trailContext from 'context/trialsContext';
import { Grid } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: { md: '350px', xs: '500px' },
    overflowY: 'scroll',
    overflowX: 'hidden',
    bgcolor: 'white',
    boxShadow: 24,
    maxheight: '300px',
    color: 'black',
    p: 4,
};

const BasicModal = () => {
    //Use context for Modal To add a  Trail Book now
    const { trail, setTrail } = useContext(trailContext)
    //useState for modal opening and closing
    const [open, setOpen] = useState(false);
    //Modal Open function.
    const handleOpen = () => setOpen(true)
    //Modal Close function.
    const handleClose = () => setOpen(false)
    // Increment adn Decrement Button for useState
    const [add, setAdd] = useState(1);
    //Add a trail Card in Modal.
    const AddCard = (index) => {
        //Here when i click the Book now button it will Add  in Modal.
        const addItem = trail.filter((TRAIL_CARD, i) => i !== index)
        setTrail(addItem)
    }

    //Increament ++
    const Upword = (index) => {
        setAdd(add + 1)
        //Here When the quantity increse its price will be atomatically  multiply..
        trail[index].quantity = trail[index].quantity + 1
        setTrail(trail)

        //
        // if (trail[index].quantity === 1) {
        //     trail[index].quantity = trail[index].quantity + 1
        //     trail[index].price = trail[index].price * trail[index].quantity
        // }
        // else {
        //     trail[index].price = trail[index].price / trail[index].quantity + trail[index].price
        //     trail[index].quantity = trail[index].quantity + 1
        // 
        //
    }

    //Decreament --
    const Downword = (index) => {
        setAdd(add - 1)
        //Here if Condtion check the quantity if the quantity is less then 1 it will not increment in 1 
        if (trail[index].quantity > 1) {
            //increment. Button
            trail[index].quantity = trail[index].quantity - 1
            setTrail(trail)
        }
    }


    return (
        <div>
            <Button onClick={handleOpen}>
                <ShoppingBagOutlined
                    fontSize='large'
                    sx={{ color: 'white' }}
                />
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                        <Typography variant='h5' fontWeight={'bold'} fontSize={{ md: '20px', xs: '16px' }}>Book Tails</Typography>
                        <Button variant='secondary' sx={{ borderBottom: '2px solid red', color: 'red', fontSize: { md: '15px', xs: '10px' } }} onClick={() => setTrail([])}>Remove All</Button>
                    </Box>
                    <Grid container spacing={3}>
                        {trail.map((i, index) => {
                            return (
                                <Grid item md={12} sm={12}>
                                    <Box display={{ md: 'flex', sm: 'flex', xs: 'block' }} justifyContent={{ md: 'space-between', sm: 'space-evenly' }} alignItems={'center'} mt={{ md: 4, xs: 8 }} m={'auto'}>
                                        <img src={i.imgpath} alt="trailscardImage" width={'150px'} style={{ borderRadius: "5px" }} />
                                        <Typography variant='body1' p={2} px={3} fontSize={'20px'} fontWeight={'bold'}>{i.title}</Typography>
                                        <Typography variant='body2' p={1} px={3} fontSize={'15px'}>{i.offers}</Typography>
                                        <Typography variant='body2' p={1} px={3} fontSize={'15px'}>{i.time}</Typography>
                                        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Button onClick={() => Upword(index)}><ArrowDropUp /></Button>
                                            <Typography>{i.quantity}</Typography>
                                            <Button onClick={() => Downword(index)}><ArrowDropDown /></Button>
                                        </Box>
                                        {/* Here the quantity will increase its price automaticaly multiply his price. */}
                                        <Typography variant='body2' p={1} px={3} fontSize={'15px'}>${i.price * i.quantity}</Typography>
                                        <Box>
                                            <Button variant='contained' color='error' sx={{ m: 3 }} onClick={() => AddCard(index)}>Remove</Button>
                                        </Box>
                                    </Box>
                                    
                                </Grid>
                            )
                        })}
                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}

export default BasicModal;