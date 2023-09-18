import {} from 'react';
import './Panel.css'

const Panel = ({ panelData, onClick }) => {
  return (
    <div className="panel" onClick={() => onClick(panelData)}>
      <div className="panel-circle">
        <p>{panelData.percentage}%</p>
      </div>
      <p>Panel {panelData.id}</p>
    </div>
  );
};

export default Panel;