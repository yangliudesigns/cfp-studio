import "./FAQList.scss";
import FAQItem from "../FAQItem/FAQItem";
import faqData from "../../data/faq.json";



export default function FAQList() {

  return (
    <div className="faq-list">
      <h4 className="faq-title">FAQ</h4>
    {faqData.map((faq) => (
      <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
    ))}
  </div>
  )
}
