import "./HomeImages.scss"; 
import {Link} from 'react-router-dom'; 

import img1 from '../../Assets/Images/HomeImages/img1.jpg';
import img2 from '../../Assets/Images/HomeImages/img2.jpg';
import img3 from '../../Assets/Images/HomeImages/img3.jpg';

const HomeImages = ()=> {
    return(
        <div class="HomeImages-wrapper">
            <div class="homeImages-div">
                <div class="homeImages-div-titlesm">
                    <h3>Ray Tracing</h3>
                </div>
                <div class="homeImages-div-titlebg">
                    <h1>Hiperrealista. Hiperrapido</h1>
                </div>
                <div class="homeImages-div-desc">
                    <p>A arquitetura Ada liberta todo o potencial de ray tracing, o que permite simular o comportamento da liz no mundo real. Com o poder da RTX Série 40 e dos núcleos RT de terceira geração, podes desfrutar de mundos virtuais incrivelmente detalhados como nunca.</p>
                </div>
                <div class="homeImages-div-img">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div class="homeImages-div">
                <div class="homeImages-div-titlesm">
                    <h3>NVIDIA DLSS3</h3>
                </div>
                <div class="homeImages-div-titlebg">
                    <h1>O Multiplicador de Desempenho, Equipado com IA</h1>
                </div>
                <div class="homeImages-div-desc">
                    <p>O DLSS é uma inovação revolucionária ao nivel dos gráficos com IA, aumentado incrivelmente o desempenho. Equipado com a nova quarta geração de Núcleos Tensores e Acelerador de Fluxo Ótico nas GPU GeForce RTX Séria40, o DLSS 3 utiliza IA para criar fotogramas adicionais de elevadda qualidade.</p>
                </div>
                <div class="homeImages-div-img">
                    <img src={img2} alt="" />
                </div>
            </div>
            <div class="homeImages-div">
                <div class="homeImages-div-titlesm">
                    <h3>NVIDIA Reflex</h3>
                </div>
                <div class="homeImages-div-titlebg">
                    <h1>Vitória Medida em Milésimos de Segundos</h1>
                </div>
                <div class="homeImages-div-desc">
                    <p>As GPU NVIDIA Reflex e GeForce RTX 40 proporcionam a menos latência e a melhor resposta para conseguir uma verdadeira vantagem em relação à concorrencia. Criada para otimizar e medir a latência do sistema, a Reflex permite uma aquisição mais rápida do alvo, tempos de reação mais rápidos e a melhor precisão de mira para jogos competitivos.</p>
                </div>
                <div class="homeImages-div-img">
                    <img src={img3} alt="" />
                </div>
            </div>
        </div>
    )
}

export default HomeImages;