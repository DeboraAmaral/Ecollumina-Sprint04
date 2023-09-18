import {} from 'react';
import DataChart from './DataChart'; 
import './Data.css'

const Data = () => {
  const dataPoints = [10, 20, 15, 30, 25, 35, 40]; 

  return (
    <div className="data-page">
      <h2>Dados de Energia</h2>
      <DataChart data={dataPoints} /> 
    </div>
  );
};

export default Data;