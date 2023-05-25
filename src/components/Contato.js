import React from 'react';
import styles from './Contato.module.css';
import foto from '../assets/maquina_escrever.jpg';
import Head from './Head';

const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em contato" />
      <img src={foto} alt="Maquina de escrever" />
      <div>
        <h1>Entre em contato.</h1>
        <ul className={styles.dados}>
          <li>rafalopes.dev@gmail.com</li>
          <li>11 94363-8009</li>
          <li>Rua Dr. Cesario Mota Junior, 565 - apto 82</li>
          <li>Vila Buarque - SP</li>
        </ul>
      </div>
    </section>
  );
};

export default Contato;
