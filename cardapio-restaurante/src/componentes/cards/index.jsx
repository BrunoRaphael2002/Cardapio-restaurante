import React from 'react'
import Image from 'next/image';
import styles from '../cards/Cards.module.css';



//obs: este componente vai utilizar props

export default function Cards({ produto }) {
  return (
   
  <div className={styles.card}>
      <figure>
      <Image className={styles.image} src={produto.imagem}
      />
      </figure>
      <div className={styles.containerInformacoes}>
        <div>
          <h3>{produto.nome}</h3>
          <small>{produto.categoria}</small>
          <p>{produto.descricao}</p>
        </div>
        <div>
          <span>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}</span>
        </div>
      </div>
    </div>
  
   
   
  )
}
