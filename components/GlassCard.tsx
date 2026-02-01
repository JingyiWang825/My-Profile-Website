import { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

const GlassCard = ({ children, className }: GlassCardProps) => (
  <div className={`glass mist-border rounded-2xl p-6 card-hover glow-card ${className ?? ""}`}>{children}</div>
);

export default GlassCard;
