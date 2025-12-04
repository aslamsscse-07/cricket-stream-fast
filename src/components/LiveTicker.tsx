import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

interface BallEvent {
  ball: string;
  runs: string;
  type: 'normal' | 'boundary' | 'six' | 'wicket' | 'wide' | 'noball';
}

const recentBalls: BallEvent[] = [
  { ball: '17.1', runs: '1', type: 'normal' },
  { ball: '17.2', runs: '4', type: 'boundary' },
  { ball: '17.3', runs: '0', type: 'normal' },
  { ball: '17.4', runs: 'W', type: 'wicket' },
  { ball: '17.5', runs: '6', type: 'six' },
  { ball: '17.6', runs: '2', type: 'normal' },
  { ball: '18.1', runs: '1', type: 'normal' },
  { ball: '18.2', runs: '4', type: 'boundary' },
];

const getBallStyle = (type: BallEvent['type']) => {
  switch (type) {
    case 'boundary':
      return 'bg-primary text-primary-foreground';
    case 'six':
      return 'bg-accent text-accent-foreground';
    case 'wicket':
      return 'bg-live text-white';
    case 'wide':
    case 'noball':
      return 'bg-yellow-500 text-black';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const LiveTicker = () => {
  return (
    <div className="bg-card/80 backdrop-blur-sm border-b border-border/50 py-2 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex h-2 w-2 rounded-full bg-live animate-pulse-live" />
            <span className="text-xs font-semibold text-live">LIVE</span>
            <span className="text-xs text-muted-foreground">IND vs AUS</span>
          </div>
          
          <div className="h-4 w-px bg-border" />
          
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="text-xs text-muted-foreground shrink-0">This Over:</span>
            <div className="flex items-center gap-1">
              {recentBalls.slice(-6).map((ball, idx) => (
                <motion.div
                  key={idx}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Badge 
                    className={`${getBallStyle(ball.type)} h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold`}
                  >
                    {ball.runs}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="h-4 w-px bg-border shrink-0" />

          <div className="flex items-center gap-2 shrink-0">
            <span className="text-sm font-semibold">156/4</span>
            <span className="text-xs text-muted-foreground">(18.2 ov)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
