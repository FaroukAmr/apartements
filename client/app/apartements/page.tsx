import * as React from 'react';

import { Apartement } from '../models/Apartement';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css';
import tempPic from '../../public/t.jpg';

async function getApartements() {
  const response = await fetch('http://localhost:8080/apartements', {
    next: {
      revalidate: 30,
    },
  });

  return response.json();
}

export default async function Apartements() {
  let apartements: Apartement[] = [];
  await getApartements()
    .then((res) => {
      apartements = res.data;
    })
    .catch((err) => {
      console.error('err');
    });
  return (
    <div className={styles.mainContainer}>
      {apartements.map((apartement: Apartement) => (
        <Card
          className={styles.card}
          key={apartement.id}
          sx={{ maxWidth: 345 }}
        >
          <CardMedia
            component="img"
            sx={{ height: 140 }}
            image={apartement.image ?? tempPic.src}
            title={apartement.name}
            className={styles.cardMedia}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {apartement.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {apartement.area} {String.fromCharCode(183)}
              {apartement.developer}
            </Typography>
            <Typography
              style={{ marginTop: '20px' }}
              variant="body1"
              color="text.primary"
            >
              {apartement.price.toLocaleString()} E£
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button href={`/apartements/${apartement.id}`} size="small">
              Learn More
            </Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
