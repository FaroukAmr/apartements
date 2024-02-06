import { Apartement } from './models/Apartement';

async function getApartements() {
  const response = await fetch('http://localhost:8080/apartements');
  return response.json();
}

export default async function ApartementsList() {
  const response = await getApartements();
  const apartements: Apartement[] = response.data;
  console.log(apartements);
  return (
    <div>
      <h1>Apartements</h1>
      <ul>
        {apartements.map((apartement: any) => (
          <li key={apartement.id}>{apartement.name}</li>
        ))}
      </ul>
    </div>
  );
}
