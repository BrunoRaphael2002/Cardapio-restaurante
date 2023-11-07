import React from 'react';
import icone1 from "../../../public/assets/entrada.png";
import icone2 from "../../../public/assets/massa.png";
import icone3 from "../../../public/assets/carne.png";
import icone4 from "../../../public/assets/bebidas.png";
import icone5 from "../../../public/assets/salada.png";
import icone6 from "../../../public/assets/sobremesa.png";
import Image from 'next/image';

import styles from '../categorias/categorias.module.css';

export default function Categorias({ handleFiltro, botaoClicado }) {
  return (
    <section className={styles.secaoCategorias}>
      <div className={styles.containerBotoes}>

        <button className={botaoClicado === "Entradas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Entradas")}>
            <Image className={styles.ImageBtn} src={icone1}
               width={20}
            />
          Entradas
        </button>

        <button className={botaoClicado === "Massas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Massas")}>
          <Image className={styles.ImageBtn} src={icone2}
             width={20}
          />Massas
        </button>

        <button className={botaoClicado === "Carnes" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Carnes")}>
          <Image className={styles.ImageBtn} src={icone3}
             width={20}
          />Carnes
        </button>
        <button className={botaoClicado === "Bebidas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Bebidas")}>
         <Image className={styles.Imagebtn} src={icone4} 
            width={20}
         />Bebidas
        </button>
        <button className={botaoClicado === "Saladas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Saladas")}>
          <Image className={styles.ImageBtn} src={icone5} 
             width={20}
          />Saladas
        </button>
        <button className={botaoClicado === "Sobremesas" ? "acenderBtn" : "apagarBtn"}
          onClick={() => handleFiltro("Sobremesas")}>
          <Image className={styles.ImageBtn} src={icone6}
          width={20}
          />Sobremesas
        </button>

      </div>
    </section>
  );
}


