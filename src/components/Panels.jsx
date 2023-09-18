import { useState } from 'react';
import Panel from './Panel'; 

const Panels = () => {
  const [selectedPanel, setSelectedPanel] = useState(null);

  const panelData = [
    { id: 1, percentage: 75 },
    { id: 2, percentage: 50 },
    { id: 3, percentage: 90 },
    // Adicione mais dados de painel conforme necessário
  ];

  const handlePanelClick = (panelData) => {
    setSelectedPanel(panelData);
  };

  return (
    <div className="panels-page">
      <h2>Painéis</h2>
      <div className="panels-container">
        {panelData.map((data) => (
          <Panel key={data.id} panelData={data} onClick={handlePanelClick} />
        ))}
      </div>
    </div>
  );
};

export default Panels;