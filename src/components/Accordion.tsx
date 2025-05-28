import type { ReactNode } from "react";
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

export const Accordion: React.FC<AccordionProps> = ({ title, children, isOpen, onToggle }) => {
  return (
    <div className="border-b border-gray-800">
      <button
        onClick={onToggle}
        className="w-full py-8 flex items-center justify-between text-left hover:text-gray-300 transition-colors duration-200"
      >
        <h3 className="text-2xl font-light">{title}</h3>
        <ChevronDown 
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 pb-8' : 'max-h-0'
      }`}>
        <div className="text-gray-400 leading-relaxed">
          {children}
        </div>
      </div>
    </div>
  );
};