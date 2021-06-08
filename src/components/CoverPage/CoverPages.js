import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import useStyles from './styles'
import {Link} from 'react-router-dom'
import {Grid} from '@material-ui/core';
import CoverPage from './CoverPage/CoverPage'


const images = [
  {
    id: 1,
    img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffotolifeakademi.com%2Fphotoshop%2Fphotoshop-fotograf-cozunurluk-degistirme&psig=AOvVaw2GkzokNsTKoPRJxAh43Gz8&ust=1622410741235000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMiP9Zzt7_ACFQAAAAAdAAAAABAG',
  },
  {
    id: 2,
    img: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.moradam.com%2Fwp-content%2Fuploads%2F2017%2F07%2Fe-ticaret-sitesi-1.jpg&imgrefurl=https%3A%2F%2Fwww.moradam.com%2F12422%2Fe-ticaret-nedir-avantajlari-nelerdir%2F&tbnid=B_ivRhzoMWqEPM&vet=12ahUKEwjHn-GSn_HwAhWI16QKHYSHCyEQMygNegUIARDFAQ..i&docid=sP7u8Hd1ZWdNHM&w=1187&h=428&q=e%20ticaret%20&ved=2ahUKEwjHn-GSn_HwAhWI16QKHYSHCyEQMygNegUIARDFAQ',
  },  
  {
    id: 3,
    img: '/products',
  },
  {
    id: 4,
    img: '/products',
  },  
  {
    id: 5,
    url: '/products',
  },
  {
    id: 6,
    img: '/products',
  },  
];



const CoverPages = ({images}) => {
  const classes = useStyles();

  return (
    <div className={classes.root} >
    <div className={classes.toolbar}/>
    <Grid className={classes.image} focusVisibleClassName={classes.focusVisible}
        // style={{
        //   width: image.width,
        //   }}
        item component={Link} to="/products"
      >
    {images.map((image) => (
      <Grid item  key={image.id} xs={12} sm={12}  md={12} lg={12}>
          <CoverPage image={image}/>
      </Grid>
      // <ButtonBase item component={Link} to="/products" focusRipple key={image.id}
      //   className={classes.image} focusVisibleClassName={classes.focusVisible}
      //   style={{
      //     width: image.width,
      //   }}
      // >
      //   <span className={classes.imageBackdrop}/>
      // </ButtonBase>
      
    ))}
    <span className={classes.imageBackdrop}/>
    </Grid>
     
    </div>
  );
}

export default CoverPages