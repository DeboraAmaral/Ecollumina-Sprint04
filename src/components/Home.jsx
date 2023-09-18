import {} from 'react';
import './Home.css'

const Home = () => {
  const currentPower = 350; // Potência atual em Volts
  const maxPower = 500; // Potência máxima em Volts
  const dailyEnergy = 2500; // Energia diária em Watts-hora
  const co2Production = 0.5; // Produção de CO2 em kg

  const percentage = (currentPower / maxPower) * 100;

  return (
    <div className="home">
      <div className="circle">
        <div
          className="fill"
          style={{ transform: `rotate(${percentage}deg)` }}
        ></div>
        <div className="percentage">{percentage.toFixed(2)}%</div>
      </div>
      <div className="info-blocks">
        <div className="info-block">
          <p>Potência Atual</p>
          <p>{currentPower} Volts</p>
        </div>
        <div className="info-block">
          <p>Potência Máxima</p>
          <p>{maxPower} Volts</p>
        </div>
        <div className="info-block">
          <p>Energia Diária</p>
          <p>{dailyEnergy} Wh</p>
        </div>
        <div className="info-block">
          <p>Produção de CO2</p>
          <p>{co2Production} kg</p>
        </div>
      </div>
    </div>
  );
};

export default Home;