import "./HomeSpecs.scss"; 
import {Link} from 'react-router-dom'; 

import mainimg from '../../Assets/Images/HomeSpecs/main.jpg';
import icon from '../../Assets/Images/HomeSpecs/Icon.jpg'

const HomeSpecs = ()=> {
    return(
        <div class="homeSpecs-wrapper">
           <div class="homeSpecs-titles">
                <div class="homeSpecs-titles-1">
                    <h3>A Melhor Plataforma para Gamers e Criadores</h3>
                </div>
                <div class="homeSpecs-titles-2">
                    <h1>Com GeForce RTX Série 40 e DLSS3</h1>
                </div>
           </div>
           <div class="homeSpecs-desc">
                <div class="homeSpecs-desc-img">
                    <img src={mainimg} alt="" />
                </div>
                <div class="homeSpecs-desc-text">
                    <div class="homeSpecs-desc-text-spec">
                        <h3>Novos multiprocessadores de streaming</h3>
                        <p>Até ao dobro de desempenho e eficiência energética</p>
                    </div>
                    <div class="homeSpecs-desc-text-spec">
                        <h3>Núcleos tensor de quarta geração</h3>
                        <p>Desempenho até 4 vezes superior com DLSS 3 em comparação à renderização convencional.</p>
                    </div>
                    <div class="homeSpecs-desc-text-spec">
                        <h3>Núcleos RT de terceira geração</h3>
                        <p>Desempenho de ray tracing até 2 vezes maior</p>
                    </div>
                </div>
           </div>
           <div class="homeSpecs-specs">
                <div class="homeSpecs-specs-item">
                    <img src={icon} alt="" />
                    <h3>GPUs de Ponta</h3>
                    <p>Arquitetura NVIDIA Ada Lovelace</p>
                </div>
                <div class="homeSpecs-specs-item">
                    <img src={icon} alt="" />
                    <h3>Gráficos realistas e envolventes</h3>
                    <p>Núcleos de ray tracing dedicados</p>
                </div>
                <div class="homeSpecs-specs-item">
                    <img src={icon} alt="" />
                    <h3>Desempenho acelerado por IA</h3>
                    <p>NVIDIA DLSS 3</p>
                </div>
                <div class="homeSpecs-specs-item">
                    <img src={icon} alt="" />
                    <h3>Capacidade de resposta vencedora</h3>
                    <p>Plataforma NVIDIA Reflex de baixa latência</p>
                </div>
                <div class="homeSpecs-specs-item">
                    <img src={icon} alt="" />
                    <h3>Criado para LiveStreams</h3>
                    <p>NVIDIA Encoder</p>
                </div>
                <div class="homeSpecs-specs-item">
                    <img src={icon} alt="" />
                    <h3>Voz e vídeo melhorados com IA</h3>
                    <p>RTX Video Super Resolution e NVIDIA Broadcast</p>
                </div>
                <div class="homeSpecs-specs-item">
                    <img src={icon} alt="" />
                    <h3>Acelera a tua criatividade</h3>
                    <p>NVIDIA Studio</p>
                </div>
                <div class="homeSpecs-specs-item">
                    <img src={icon} alt="" />
                    <h3>Desempenho e fiabilidade</h3>
                    <p>Controladores Game Ready e Studio</p>
                </div>
           </div>
           <div className="homeSpecs-divisor"></div>
        </div>
    )
}

export default HomeSpecs;