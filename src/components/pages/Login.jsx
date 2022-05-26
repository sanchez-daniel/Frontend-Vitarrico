import React from 'react';
import './Login.css'
import Footer from '../section/footer/footer';
import Navbar from '../section/Menu/Navbar/Navbar';


function Login(){
    return(
        <body className='fondo'>
            <Navbar/>
            <div className='home'>
                <h1 className='titulo'>VISITA</h1>
                <h1 className='titulo2'>NUESTRO</h1>
                <a className='pagina-web' href="https://vitarrico.com/" target="blank">SITIO OFICIAL</a>  
            </div>
            <Footer/>
        </body>
            
    )
}
export default Login