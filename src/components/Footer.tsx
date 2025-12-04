import { Trophy } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-16">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-primary" />
            <span className="font-display text-xl font-bold tracking-tight">
              CRIC<span className="text-accent">PULSE</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">About</a>
            <a href="#" className="hover:text-primary transition-colors">Contact</a>
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
          </div>
          
          <p className="text-xs text-muted-foreground">
            © 2024 CricPulse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
