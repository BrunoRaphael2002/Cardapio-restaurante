import Home from "@/componentes/Home";
import CampoDeBusca from "@/componentes/campo-de-busca";
import Categorias from "@/componentes/categorias";
import Crads from "@/componentes/cards";
import   '@/styles/globals.css';



export default function App() {
  return (
    <div>
      
  
     <Home />
     
     <Categorias/>
     <CampoDeBusca/>
     <Crads/>
     <footer><p>desenvolvido por <a href="#">Bruno Raphael</a></p></footer>
    
    </div>
  )
}
