import { Apartement } from './models/Apartement';
import styles from './page.module.css';

async function getApartements() {
  const response = await fetch('http://localhost:8080/apartements', {
    next: {
      revalidate: 0,
    },
  });
  return response.json();
}

export default async function ApartementsList() {
  const response = await getApartements();
  const apartements: Apartement[] = response.data;
  console.log(apartements);
  return (
    <div className={styles.container}>
      <h1>Apartements</h1>
      <div className={styles.apartementsContainer}>
        {apartements.map((apartement: any) => (
          <div className={styles.apartement} key={apartement.id}>
            <div>{apartement.name}</div>
            <div>{apartement.description}</div>
            <div>{apartement.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
