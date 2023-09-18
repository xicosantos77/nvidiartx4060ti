import "./HomeHeader.scss"; 
import {Link} from 'react-router-dom'; 

import logo from '../../Assets/Images/Header/nvidia_logo.png';

const HomeHeader = ()=> {
    return(
        <div class="homeHeader-wrapper">
            <div class="homeHeader-text">
                <div class="homeHeader-text-title">
                    <h1>Geforce RTX 4060 Ti</h1>
                </div>
                <div class="homeHeader-text-subtitle">
                    <h3>BEYOND FAST</h3>
                </div>
                <div class="homeHeader-text-desc">
                    <p>Joa faz streaming e cria. A GeForce RTX 4060 Ti permite-te desfrutar dos mais recentes jogos e aplicações com a arquitetura ultraeficiente Ada Locelace da NVIDIA.</p>
                    <p>Experimenta jogos envolventes e acelerados por IA com ray tracing e DLSS 3 e dinamiza o teu processo criativo e a tua produtividade com NVIDIA Studio.</p>
                </div>
                <div class="homeHeader-text-button">
                    <button>Saber Mais</button>
                </div>
                <div class="homeHeader-text-logo">
                    <img src={logo} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeHeader;