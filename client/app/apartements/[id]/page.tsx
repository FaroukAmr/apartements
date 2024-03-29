import { Apartement } from '@/app/models/Apartement';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import React from 'react';
import ShowerOutlinedIcon from '@mui/icons-material/ShowerOutlined';
import Typography from '@mui/material/Typography';
import styles from './styles.module.css';
import tempPic from '../../../public/t.jpg';

interface ApartementDetailsProps {
  params: { id: string };
}

async function getApartement(id: string) {
  const response = await fetch(`${process.env.SERVER_URL}/apartements/` + id, {
    next: {
      revalidate: 3600,
    },
  });
  return response.json();
}

export default async function ApartementDetails(
  props: Readonly<ApartementDetailsProps>
) {
  let apartement: Apartement = {} as Apartement;
  await getApartement(props.params.id)
    .then((response) => {
      apartement = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <Card className={styles.card} key={apartement.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        sx={{ height: 140 }}
        image={tempPic.src}
        title={apartement.name}
        className={styles.cardMedia}
      />
      <CardContent>
        <div className={styles.nameType}>
          <Typography variant="h5" component="div">
            {apartement.name}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {apartement.type}
          </Typography>
        </div>
        <Typography variant="body2" color="text.secondary">
          {apartement.location} {String.fromCharCode(183)} {apartement.area}{' '}
          {String.fromCharCode(183)} {apartement.developer}
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          className={styles.infoContainer}
        >
          {apartement.description}

          <span className={styles.roomsInfo}>
            <span>
              <BedOutlinedIcon /> {apartement.bedrooms}
            </span>
            <span>
              <ShowerOutlinedIcon /> {apartement.bathrooms}
            </span>
          </span>
        </Typography>
        <Typography mt={'20px'} variant="h5" color="text.primary">
          {(apartement.price / 100).toLocaleString()} E£
        </Typography>
      </CardContent>
    </Card>
  );
}
