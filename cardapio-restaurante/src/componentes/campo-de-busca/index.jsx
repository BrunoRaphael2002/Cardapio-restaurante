//utilizar rfc para crir com mais velocidade


import Lupa from '../../../public/assets/lupa.png';
import Image from 'next/image';
import styles from './campo-de-busca.module.css';


export default function CampoDeBusca({ textoBuscaDigitado, handleBusca }) {
  return (
    <div className={`${styles.barraDePesquisa} limitarSessao `}>
     <Image className={styles.img} src={Lupa}/>
    <input
      type="text"
      value={textoBuscaDigitado}
      onChange={(event) => handleBusca(event.target.value)}
      placeholder="Pesquise aqui um dos pratos do nosso cardápio"
    />


  </div>
  )
}
