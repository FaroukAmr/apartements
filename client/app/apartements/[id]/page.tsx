import { Apartement } from '@/app/models/Apartement';
import React from 'react';

interface ApartementDetailsProps {
  params: { id: string };
}

async function getApartement(id: string) {
  const response = await fetch('http://localhost:8080/apartements/' + id, {
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
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      <h1>ApartementDetails</h1>
      {apartement.name}
    </div>
  );
}
