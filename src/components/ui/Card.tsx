import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const Card = ({ children, className = '', hoverEffect = true }: CardProps) => (
  <div className={`glass-card rounded-3xl p-8 shadow-xl transition-all duration-500 ${hoverEffect ? 'hover:shadow-2xl hover:-translate-y-2 hover:bg-white/90' : ''} ${className}`}>
    {children}
  </div>
);

export default Card;