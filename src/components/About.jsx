import {} from 'react';
import './About.css'

const About = () => {
  return (
    <div className="about-page">
      <h2>Nossa História</h2>
      <p>
        Somos um grupo de entusiastas de tecnologia que se uniu para criar soluções inovadoras para cidades sustentáveis. 
        Nossa jornada começou no primeiro ano de TI, onde aprendemos os conceitos básicos de tecnologia e agora aplicamos 
        nosso conhecimento para enfrentar os desafios do mundo real.
      </p>

      <h2>Integrantes do Grupo</h2>
      <div className="team">
        <div className="team-member">
          <img src="imagem1.jpg" alt="Integrante 1" />
          <p>Nome do Integrante 1</p>
        </div>
        <div className="team-member">
          <img src="imagem2.jpg" alt="Integrante 2" />
          <p>Nome do Integrante 2</p>
        </div>
      </div>
    </div>
  );
};

export default About;
