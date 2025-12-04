import { ReactNode } from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}

export const SectionHeader = ({ title, subtitle, action }: SectionHeaderProps) => {
  return (
    <div className="flex items-end justify-between mb-6">
      <div>
        <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-sm mt-1">{subtitle}</p>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};
