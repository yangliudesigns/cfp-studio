import "./FAQItem.scss";
import { useState } from "react";
import plusIcon from "../../assets/icons/plus.svg";


export default function FAQItem({ question, answer }) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="faq-item">
    <div className="faq-question" onClick={toggleOpen}>
      <span>{question}</span>
      
      <img 
        src={plusIcon} 
        alt="toggle icon" 
        className={`icon ${isOpen ? 'open' : ''}`} 
      />
    </div>
    
    {isOpen && <div className="faq-answer">{answer}</div>}
  </div>
  )
}
