
import styles from './banner.module.css';




//pesquisar sobre como adicionar mais de uma classe no next.js

export default function Home(){
    return (

        <>
    
    
             <section className={styles.banner}>
                <div className='limitarSessao div'>
                    <h1>Restaurante</h1>
                    <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
                </div>
             </section>
     
     
        </>
    );
}