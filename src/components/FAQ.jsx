import { useState } from "react";
import { HiChevronDown } from "react-icons/hi";
import { faqs } from "../data/content";

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-espresso/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left py-5 gap-4"
        aria-expanded={isOpen}
      >
        <span className="font-display text-lg text-espresso">{faq.q}</span>
        <HiChevronDown
          className={`shrink-0 text-bronze transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          size={22}
        />
      </button>
      <div
        className={`grid transition-all duration-200 ${isOpen ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"}`}
        style={{ display: "grid" }}
      >
        <div className="overflow-hidden">
          <p className="font-body text-sm text-ink/65 leading-relaxed max-w-2xl">{faq.a}</p>
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
        <h2 className="font-display text-3xl sm:text-4xl text-espresso mb-10">Perguntas frequentes</h2>
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
