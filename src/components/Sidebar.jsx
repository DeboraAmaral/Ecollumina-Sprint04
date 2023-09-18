import {} from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>---</h2>
      <ul>
        <li>
          <Link to="/">Dashbord</Link>
        </li>
        <li>
          <Link to="/panels">Painéis</Link>
        </li>
        <li>
          <Link to="/data">Dados</Link>
        </li>
        <li>
          <Link to="/contact">Contato</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
