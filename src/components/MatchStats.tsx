import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingUp, Target, Zap } from 'lucide-react';

interface StatItem {
  label: string;
  team1: number;
  team2: number;
}

const matchStats: StatItem[] = [
  { label: 'Run Rate', team1: 8.52, team2: 8.35 },
  { label: 'Boundaries', team1: 18, team2: 14 },
  { label: 'Sixes', team1: 6, team2: 4 },
  { label: 'Dot Balls', team1: 42, team2: 48 },
];

export const MatchStats = () => {
  const runRate = 8.52;
  const requiredRate = 9.14;
  const projectedScore = 185;

  return (
    <Card className="card-gradient border-border/50 p-4">
      <h3 className="font-display text-lg font-bold mb-4">Match Statistics</h3>

      {/* Key Metrics */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="text-center p-3 rounded-lg bg-background/50">
          <TrendingUp className="h-5 w-5 text-primary mx-auto mb-1" />
          <p className="text-xl font-bold text-primary">{runRate}</p>
          <span className="text-xs text-muted-foreground">Run Rate</span>
        </div>
        <div className="text-center p-3 rounded-lg bg-background/50">
          <Target className="h-5 w-5 text-accent mx-auto mb-1" />
          <p className="text-xl font-bold text-accent">{requiredRate}</p>
          <span className="text-xs text-muted-foreground">Required RR</span>
        </div>
        <div className="text-center p-3 rounded-lg bg-background/50">
          <Zap className="h-5 w-5 text-live mx-auto mb-1" />
          <p className="text-xl font-bold">{projectedScore}</p>
          <span className="text-xs text-muted-foreground">Projected</span>
        </div>
      </div>

      {/* Comparison Stats */}
      <div className="space-y-4">
        <div className="flex justify-between text-sm font-semibold mb-2">
          <span className="flex items-center gap-2">
            <span className="text-lg">🇮🇳</span> IND
          </span>
          <span className="flex items-center gap-2">
            AUS <span className="text-lg">🇦🇺</span>
          </span>
        </div>

        {matchStats.map((stat) => {
          const total = stat.team1 + stat.team2;
          const team1Percent = (stat.team1 / total) * 100;
          
          return (
            <div key={stat.label} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="font-semibold text-primary">{stat.team1}</span>
                <span className="text-muted-foreground">{stat.label}</span>
                <span className="font-semibold text-accent">{stat.team2}</span>
              </div>
              <div className="flex h-2 rounded-full overflow-hidden bg-muted/30">
                <div 
                  className="bg-primary transition-all duration-500"
                  style={{ width: `${team1Percent}%` }}
                />
                <div 
                  className="bg-accent transition-all duration-500"
                  style={{ width: `${100 - team1Percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};
