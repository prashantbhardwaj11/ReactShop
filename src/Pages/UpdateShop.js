import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, TextField } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const UpdateShop = () => {
  const [items, setItems] = useState([]);
  const [Edit, SetEdit] = useState('');



  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('ShopsData'));
    if (items) {
      setItems(items);
    }
  }, []);
  function HandleEdit(id) {
    console.log(id);
    items.filter((item) => {

      if (item.id === id) {
        console.log(item.ShopName);
        SetEdit(item.ShopName)
// item.ShopName =

      }
    }
    )

  }
  function editHandle() {
    // console.log('Hi'); 
    console.log(Edit);
    SetEdit(Edit)



  }
  return (
    <>
      <br></br>

      <TextField id='searchbar' onChange={(e) => SetEdit(e.target.value)} value={Edit} label='Edit ShopName' >  </TextField>
      <button onClick={() => editHandle()}>Change</button>

      {items.map(item => (
        <>
          <Box id='viewShopCotainer' key={item.id}>


            <CardContent  >

              <Typography >
                <Typography>Shopname -   {item.ShopName} </Typography>

                <br></br>
              </Typography>


            </CardContent>
            <CardActions>

            </CardActions>
            <EditIcon style={{ color: "red", marginLeft: '10px', cursor: 'pointer' }} onClick={() => HandleEdit(item.id)} />
          </Box>


        </>
      ))}

    </>
  )
}

export default UpdateShop