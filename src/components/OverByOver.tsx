import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface OverData {
  over: number;
  runs: number;
  balls: string[];
}

const overHistory: OverData[] = [
  { over: 18, runs: 5, balls: ['1', '4', '-', '-', '-', '-'] },
  { over: 17, runs: 12, balls: ['1', '4', '0', 'W', '6', '2'] },
  { over: 16, runs: 8, balls: ['2', '1', '4', '0', '1', '0'] },
  { over: 15, runs: 14, balls: ['4', '6', '1', '1', '1', '1'] },
  { over: 14, runs: 6, balls: ['1', '0', '2', '1', '1', '1'] },
];

const getBallColor = (ball: string) => {
  if (ball === '4') return 'bg-primary text-primary-foreground';
  if (ball === '6') return 'bg-accent text-accent-foreground';
  if (ball === 'W') return 'bg-live text-white';
  if (ball === '-') return 'bg-muted/30 text-muted-foreground/50';
  return 'bg-muted text-muted-foreground';
};

export const OverByOver = () => {
  return (
    <Card className="card-gradient border-border/50 p-4">
      <h3 className="font-display text-lg font-bold mb-4">Over by Over</h3>
      
      <div className="space-y-3">
        {overHistory.map((over) => (
          <div 
            key={over.over} 
            className="flex items-center gap-3 p-2 rounded-lg bg-background/30"
          >
            <div className="w-12 text-center">
              <span className="text-xs text-muted-foreground">Over</span>
              <p className="font-bold text-lg">{over.over}</p>
            </div>
            
            <div className="flex gap-1 flex-1">
              {over.balls.map((ball, idx) => (
                <Badge 
                  key={idx}
                  className={`${getBallColor(ball)} h-7 w-7 rounded-full flex items-center justify-center text-xs font-bold`}
                >
                  {ball}
                </Badge>
              ))}
            </div>
            
            <div className="w-12 text-right">
              <span className="font-bold text-primary">{over.runs}</span>
              <span className="text-xs text-muted-foreground ml-1">runs</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
