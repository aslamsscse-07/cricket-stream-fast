import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Batsman {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
  isOnStrike: boolean;
}

const currentBatsmen: Batsman[] = [
  {
    name: 'Virat Kohli',
    runs: 67,
    balls: 42,
    fours: 6,
    sixes: 2,
    strikeRate: 159.52,
    isOnStrike: true,
  },
  {
    name: 'Hardik Pandya',
    runs: 23,
    balls: 14,
    fours: 2,
    sixes: 1,
    strikeRate: 164.29,
    isOnStrike: false,
  },
];

export const BattingCard = () => {
  return (
    <Card className="card-gradient border-border/50 overflow-hidden">
      <div className="bg-primary/10 px-4 py-2 border-b border-border/50">
        <h3 className="font-display font-bold text-sm">Batting</h3>
      </div>
      
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground">
                <th className="text-left pb-2">Batsman</th>
                <th className="text-center pb-2">R</th>
                <th className="text-center pb-2">B</th>
                <th className="text-center pb-2">4s</th>
                <th className="text-center pb-2">6s</th>
                <th className="text-right pb-2">SR</th>
              </tr>
            </thead>
            <tbody>
              {currentBatsmen.map((batsman) => (
                <tr key={batsman.name} className="border-t border-border/30">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{batsman.name}</span>
                      {batsman.isOnStrike && (
                        <Badge className="bg-primary/20 text-primary text-[10px] px-1">
                          *
                        </Badge>
                      )}
                    </div>
                  </td>
                  <td className="text-center font-bold text-lg">{batsman.runs}</td>
                  <td className="text-center text-muted-foreground">{batsman.balls}</td>
                  <td className="text-center text-primary">{batsman.fours}</td>
                  <td className="text-center text-accent">{batsman.sixes}</td>
                  <td className="text-right font-semibold">{batsman.strikeRate.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};
