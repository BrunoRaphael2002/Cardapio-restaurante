
import styles from './banner.module.css';



import { useState } from "react";
import {
  filtrarProdutos,
  buscarProduto,
  produtosEntradas,
} from "../../servico";
import CampoDeBusca from "@/componentes/campo-de-busca";
import Categorias from "@/componentes/categorias";
import Cards from "@/componentes/cards";





//pesquisar sobre como adicionar mais de uma classe no next.js

export default function Home(){

    
  const [dadosFiltrados, setDadosFiltrados] = useState(produtosEntradas);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

  const [botaoClicado, setBotaoClicado] = useState("Entradas");

  const handleBusca = (textoDigitado) => {
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(buscarProduto(textoDigitado));
    setBotaoClicado("");
  };

  const handleFiltro = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filtrarProdutos(categoria));
    setBotaoClicado(categoria);
  };

    return (

        <>
    
    
             <header className={styles.banner}>
                <div className='limitarSessao div'>
                    <h1>Restaurante</h1>
                    <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
                </div>
             </header>

             <main className={styles.containerPrincipal}>
        <Categorias handleFiltro={handleFiltro} botaoClicado={botaoClicado} />

        <CampoDeBusca
          textoBuscaDigitado={textoBuscaDigitado}
          handleBusca={handleBusca}
        />

        <section className={styles.secaoCards}>
          <div>
            <h2>Cardápio</h2>
          </div>

          <div className={styles.containerCards}>
            {dadosFiltrados.map((produto) => (
              <Cards key={produto.id} produto={produto} />
            ))}
          </div>

        </section>
      </main>
     
     
        </>
    );
}