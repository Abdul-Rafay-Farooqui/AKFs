import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Other.css";

const MediaCard = () => {
    const data = [
        {
            title: "White Flour",
            subtitle: "White Flourishing Flour",
            picture: require("./images/pexels-pixabay-326082.jpg")
        },
        {
            title: "Brown Flour",
            subtitle: "Brown Flourishing Flour",
            picture: require("./images/pexels-pexelsgoodboy-3218467.jpg")
        },
    ]
  return (
    <Grid container spacing={2} pb={2} px={2} mt={0.5}>
        {data.map((card)=>(
        <Grid item xs={6}>
            <Link to="/cart" className='link-cards' >
            <Card className='cards' sx={{ maxWidth: 700 , padding: 0, backgroundColor: "#FFC72C" , boxShadow: "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;" } }>
            <CardMedia
              sx={{  height: 200 }}
              image={card.picture}
              title="Card"
              className='media'
              />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" color="#242424">
                {card.title}
              </Typography>
              <Typography variant="body2" color="#242424">
                {card.subtitle} 
              </Typography>
            </CardContent>
            <CardActions>
              <Button sx={{color: "#242424"}} size="small" color="inherit">See more</Button>
            </CardActions>
          </Card>
         </Link>
        </Grid>
        ))}            
    </Grid>
  );
}

export default MediaCard