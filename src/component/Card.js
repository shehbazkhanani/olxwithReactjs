import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Heart from '@mui/icons-material/FavoriteBorder';

function MediaCard(prop) {

  const {addValue, img, addPrice, addlocation} = prop;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={img} 
        alt="green iguana"
      />
      <CardContent>
        <Typography className="d-flex justify-content-between" gutterBottom variant="p" component="div">
        {addValue}
         <div className="heart"> <Heart /> </div>
        </Typography>
        <Typography variant="h5" color="text.dark" sx={{paddingTop: 5}} >
          {addPrice}
        </Typography>
        <Typography variant="p" color="text.grey" sx={{fontSize: 12}} >
          {addlocation}
        </Typography>
          </CardContent>
      
    </Card>
  );
}

export default MediaCard;