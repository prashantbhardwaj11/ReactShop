import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MenuItem from '@mui/material/MenuItem';
import SendIcon from '@mui/icons-material/Send';
import Grid from '@mui/material/Grid';
// import ViewShop from './ViewShop'
import './app.css'
const AddShop = () => {

    const area = [
        {
            value: 'Thane',
            label: 'Thane',
        },
        {
            value: 'Pune',
            label: 'Pune',
        },
        {
            value: 'Mumbai Suburban',
            label: 'Mumbai Suburban',
        },
        {
            value: 'Nashik',
            label: 'Nashik',
        },
        {
            value: 'Nagpur',
            label: 'Nagpur',
        },

        {
            value: 'Solapur',
            label: 'Solapur',
        },
    ];
    const shopcategory = [
        {
            value: 'Grocery',
            label: 'Grocery',
        },
        {
            value: 'Butcher',
            label: 'Butcher',
        },
        {
            value: 'Baker',
            label: 'Baker',
        },
        {
            value: 'Chemist',
            label: 'Chemist',
        },
        {
            value: 'Stationery shop',
            label: 'Stationery shop',
        },


    ];
    const prevData = () => {
        const prevData = localStorage.getItem('ShopsData');
        if (prevData) {
            return JSON.parse(prevData);
        }
        else {
            return []
        }

    }

    const [Area, setArea] = useState('Thane');
    const [Shop, setShop] = useState('Grocery');
    const [ShopName, setShopName] = useState('');
    const [openingDate, setopeningDate] = useState('');
    const [closingDate, setclosingDate] = useState('');


    const [ShopsData, AllShopsData] = useState(prevData());


    const handleSubmit = (event) => {
        var a =/^[0-9a-zA-Z@]+$/
        if (ShopName.match(a)) {
            if (openingDate < closingDate) {



                let ShopData = {
                    Area,
                    Shop,
                    ShopName,
                    openingDate,
                    closingDate,
                    id: new Date().getTime().toString()

                }
                AllShopsData([...ShopsData, ShopData])
                setArea('')
                setShop('')
                setShopName('')

            }
            else {
                alert('Opening Date should be  Less Than closing Date')
            }
        }
        else {
            alert('Only Text Required')
        }
    }
    useEffect(() => {
        localStorage.setItem('ShopsData', JSON.stringify(ShopsData))
    }, [ShopsData])


    return (

        <>

            <Box id='addshopcontainer' sx={{ width: 1 / 2, margin: 'auto' }}   >
                <form onSubmit={handleSubmit}>
                    <Typography variant='h5'>ADD SHOP <AddIcon /></Typography>
                    <br></br>

                    <TextField

                        minlength="4"
                        maxlength="8"
                        size="10"
                        required placeholder='Shop Name'
                        onChange={(e) => setShopName(e.target.value)}
                        variant="outlined" id='maininputfield'
                        sx={{ width: 1 }}

                    ></TextField>
                    <br />
                    <br></br>



                    <TextField
                        sx={{ width: 1 }}
                        required
                        select
                        value={Area}
                        onChange={(e) => setArea(e.target.value)}
                    >
                        {area.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br />

                    <br></br>
                    <TextField
                        variant="outlined"
                        required
                        select
                        sx={{ width: 1 }}
                        value={Shop}
                        onChange={(e) => setShop(e.target.value)}

                    >
                        {shopcategory.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <br></br>
                    <br></br>
                    <Box>

                        <Grid container spacing={12}>
                            <Grid item xs={5}>
                                <Typography>Open</Typography>
                                <input required type="date" onChange={(e) => (setopeningDate(e.target.value))} ></input>
                            </Grid>
                            <Grid item xs={6}>

                                <Typography>Close</Typography>
                                <input required type="date" onChange={(e) => (setclosingDate(e.target.value))} ></input>
                            </Grid>

                        </Grid>


                    </Box>
                    <br></br>


                    <Button variant="contained" endIcon={<SendIcon />} type="submit">Submit</Button>
                </form>
            </Box>
            {/* <ViewShop ShopsData = {ShopsData} /> */}
        </>
    )
}




export default AddShop
