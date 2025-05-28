import  { useState} from 'react';
import { Accordion } from './Accordion';

export const InfoSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number): void => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section data-aos="fade-up" className="bg-black text-white py-24">
      <div className="container mx-auto px-8">
        <div className=" w-full">
          <Accordion
            title="Size & Fit"
            isOpen={openAccordion === 0}
            onToggle={() => toggleAccordion(0)}
          >
            <p>This piece is designed for a tailored fit. We recommend consulting our size guide for the most accurate fit. The structured shoulder provides definition while the softened hem allows for natural movement.</p>
          </Accordion>

          <Accordion
            title="Delivery & Returns"
            isOpen={openAccordion === 1}
            onToggle={() => toggleAccordion(1)}
          >
            <p>Free worldwide shipping on all orders. Standard delivery takes 5-7 business days. Express delivery available. 30-day return policy for unworn items in original packaging.</p>
          </Accordion>

          <Accordion
            title="How This Was Made"
            isOpen={openAccordion === 2}
            onToggle={() => toggleAccordion(2)}
          >
            <p>Crafted from premium structured wool sourced from sustainable mills. Each piece is cut and assembled by skilled artisans in our atelier, with attention to every detail from the sculpted shoulder to the perfectly balanced hem.</p>
          </Accordion>
        </div>
      </div>
    </section>
  );
};