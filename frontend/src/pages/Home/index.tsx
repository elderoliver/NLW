import React from 'react';
import { Link } from 'react-router-dom'; 
import './styles.css';
import logo from '../../assets/logo.svg';

import { FiLogIn } from 'react-icons/fi';

import imagem from '../../assets/home-background.svg';

const Home = () => {
    return (
        <div id="page-home">
            
            <div className="content">
                
                <header>
                    <img  src={logo} alt="ecoleta"/> 
                </header>
            
                <main>

                
                    <div className="info">
                        
                        <h1 className="mainInfo">
                            Seu marketplace de coleta de resíduos
                        </h1>
                        
                        <p className="secondInfo">
                            Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
                        </p>

                        <Link to="/create-point">
                            <span><FiLogIn/></span>
                            <strong>Cadastre um ponto de coleta</strong>
                        </Link>
                    </div>

                    <img className="imgMain" src={imagem} alt="imagem" />
                    
                </main>

            </div>
        </div>
    )
}

export default Home; 



