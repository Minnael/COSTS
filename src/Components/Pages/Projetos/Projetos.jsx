import './styles.css'
import axios from 'axios'
import Card from './Card/Card.jsx';
import {useEffect, useState} from 'react'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LinkButton from '../../Layout/LinkButton/LinkButton.jsx'

function Projetos(){
   const [projetos, setProjetos] = useState([])

   useEffect(() => {
      carregarProjetos();
   }, []);

   const carregarProjetos = () => {
      axios.get('https://costs-back.vercel.app/projetos/')
      .then(response => setProjetos(response.data))
      .catch(error => console.error(error));
   };

   return (
      <div className='projeto-container'>
         <ToastContainer position="bottom-right" theme="colored"/>
         <div className='titulo-container'>
            <h1>Página de Projetos</h1>
            <LinkButton to="/criarProjeto" text="Criar projeto" />
         </div>
            <div className='projetos'>
               {projetos.length > 0 ? (
                  <>
                     {projetos.map((item) => (
                        <Card 
                           nome={item.nome} 
                           orcamento={item.orcamento} 
                           categoria={item.categoria} 
                           id={item._id}
                        />
                     ))}
                  </>
               ) : (
                  <p>Aguarde, estamos carregando os projetos...</p>
               )}   
            </div>
      </div>
   )
}
export default Projetos

