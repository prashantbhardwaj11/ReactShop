import React, { useState, useEffect } from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, TextField } from '@mui/material';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import DeleteIcon from '@mui/icons-material/Delete';

const ViewShop = () => {
  const [items, setItems] = useState([]);
  const [search, searchTerm] = useState('');
  const [categorySearch, categorySearchTerm] = useState('');



  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('ShopsData'));
    if (items) {
      setItems(items);
    }
  }, []);

  function HandleDelete(id) {
    alert(('Deleted Successfully'));
    console.log(id);
    const removeItem = items.filter((item) => {
      return item.id !== id;
    });
    setItems(removeItem);

  }
  function deleteAll() {
    localStorage.removeItem('ShopsData')
  }
  return (
    <>
      <br></br>

      <TextField id='searchbar' onChange={(e) => searchTerm(e.target.value)} label='Search By Shop Name' >  </TextField>
      <SearchTwoToneIcon style={{ height: '54px' }} />

      <TextField id='searchbar' onChange={(e) => categorySearchTerm(e.target.value)} label='Search By Shop Category' >  </TextField>

      <SearchTwoToneIcon style={{ height: '54px' }} />
      <br></br>
      <button onClick={deleteAll}>DeleteAll</button>

      {items.filter((item) => {

        if (searchTerm === '') {
          return item
        }

        else if ((item.ShopName.toLowerCase().includes(search.toLowerCase()))) {
          return item
        }



      }).map(item => (
        <>
          <Box id='viewShopCotainer' key={item.id}>


            <CardContent  >

              <Typography >
                <Typography>Shopname -   {item.ShopName} </Typography>

                <br></br>




              </Typography>
              <Typography >
                <Typography>Shoparea   -  {item.Area}</Typography>


                <br></br>


              </Typography>
              <Typography >
                <Typography>Shoptype -   {item.Shop}</Typography>


              </Typography>
              <br></br>
              <Typography >
                <Typography>Opening Date -   {item.openingDate}</Typography>


              </Typography>
              <br></br>
              <Typography >
                <Typography>Closing Date -   {item.closingDate}</Typography>


              </Typography>

            </CardContent>
            <CardActions>

            </CardActions>
            <DeleteIcon style={{ color: "red", marginLeft: '10px', cursor: "pointer" }} onClick={() => HandleDelete(item.id)} />
            {/* <EditIcon style={{ color: "red", marginLeft: '10px', cursor: 'pointer' }} /> */}
          </Box>


        </>
      ))}

    </>
  )
}

export default ViewShop