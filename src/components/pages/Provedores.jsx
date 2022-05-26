import React from 'react';
import Cards2 from '../section/cards2/cards2';
import Footer from '../section/footer/footer';
import Navbar from '../section/Menu/Navbar/Navbar';
import './Provedores.css'

const provedores = ()=>{
    return(
        <body className='fondo-provedores'>
            <Navbar/>
            <div className='empresas'>
                <a href="https://surtiagricola.com/" target={'blank'}><Cards2 logo="imagenes-empresas\surtiagricola.png" nombre="Surtiagricola" /></a>
                <a href="https://www.facebook.com/jacobnuts/" target={'blank'}><Cards2 logo="imagenes-empresas\jacob.png" nombre="Jacob Nuts" /></a>
                <a href="https://www.cerealesindustriales.com/" target={'blank'}><Cards2 logo="imagenes-empresas\Cereales industriales.png" nombre="Cereales " /></a>
                <a href="https://www.cerealesindustriales.com/" target={'blank'}><Cards2 logo="imagenes-empresas\Cereales industriales.png" nombre="Cereales " /></a>   
            </div>
            <Footer/>
        </body>
    )
}
export default provedores