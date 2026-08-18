import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { faqs } from "../data/content";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-black/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-semibold text-lg text-secondary">{faq.q}</span>
        <HiChevronDown
          className={`shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={22}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="font-sans text-sm text-text-gray leading-relaxed max-w-2xl">{faq.a}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-secondary text-center mb-2">
          Perguntas frequentes
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12" />
        <div>
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
