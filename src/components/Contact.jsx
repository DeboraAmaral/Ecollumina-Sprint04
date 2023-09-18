import {} from 'react';
import ContactForm from './ContactForm';
import './ContactForm.css';

const Contato = () => {
  return (
    <div className="contact-page">
      <h2>Contato</h2>
      <ContactForm /> {/* Renderize o componente ContactForm */}
    </div>
  );
};

export default Contato;
