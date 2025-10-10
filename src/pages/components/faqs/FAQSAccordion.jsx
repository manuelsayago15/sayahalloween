import { useState } from "react";
import faqs from "../faqs/faqsData"
import { Link } from "react-router-dom"
import "./Faqs.css"

const FAQSAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderAnswer = (answer) => {
    // Caso 1: string directo
    if (typeof answer === "string") {
      return answer;
    }

    // Caso 2: array con partes
    if (Array.isArray(answer)) {
      return answer.map((part, i) => {
        if (typeof part === "string") return part;
        if (part.type === "bold") return <strong key={i}>{part.text}</strong>;
        if (part.type === "link") {
          const isExternal = part.href.startsWith("http");
          return isExternal ? (
            <a
              key={i}
              href={part.href}
              target="_blank"
              rel="noopener noreferrer"
              className="faq-link"
            >
              {part.text}
            </a>
          ) : (
            <Link key={i} to={part.href} className="faq-link">
              {part.text}
            </Link>
          );
        }
        return null;
      });
    }

    // ⚠️ Caso 3: si por error alguien pasó un objeto suelto
    if (typeof answer === "object" && answer !== null) {
      if (answer.type === "bold") return <strong>{answer.text}</strong>;
      if (answer.type === "link") {
        const isExternal = answer.href.startsWith("http");
        return isExternal ? (
          <a
            href={answer.href}
            target="_blank"
            rel="noopener noreferrer"
            className="faq-link"
          >
            {answer.text}
          </a>
        ) : (
          <Link to={answer.href} className="faq-link">
            {answer.text}
          </Link>
        );
      }
    }

    return null;
  };



  return (
    <div className="faqs-container">
      <h2 className="faqs-title">Preguntas Frecuentes</h2>
      <div className="faqs-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button
              className={`faq-question ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => toggleFAQ(index)}
            >
              {faq.q}
              <span className="faq-icon">{activeIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`faq-answer-wrapper ${
                activeIndex === index ? "open" : ""
              }`}
            >
              <p className="faq-answer">{renderAnswer(faq.a)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQSAccordion