import { Card } from '@/components/ui/card';

interface Bowler {
  name: string;
  overs: string;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
  isBowling: boolean;
}

const currentBowlers: Bowler[] = [
  {
    name: 'Mitchell Starc',
    overs: '4.0',
    maidens: 0,
    runs: 34,
    wickets: 2,
    economy: 8.50,
    isBowling: true,
  },
  {
    name: 'Pat Cummins',
    overs: '4.0',
    maidens: 0,
    runs: 28,
    wickets: 1,
    economy: 7.00,
    isBowling: false,
  },
];

export const BowlingCard = () => {
  return (
    <Card className="card-gradient border-border/50 overflow-hidden">
      <div className="bg-accent/10 px-4 py-2 border-b border-border/50">
        <h3 className="font-display font-bold text-sm">Bowling</h3>
      </div>
      
      <div className="p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-muted-foreground">
                <th className="text-left pb-2">Bowler</th>
                <th className="text-center pb-2">O</th>
                <th className="text-center pb-2">M</th>
                <th className="text-center pb-2">R</th>
                <th className="text-center pb-2">W</th>
                <th className="text-right pb-2">ECO</th>
              </tr>
            </thead>
            <tbody>
              {currentBowlers.map((bowler) => (
                <tr key={bowler.name} className="border-t border-border/30">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <span className={`font-medium ${bowler.isBowling ? 'text-accent' : ''}`}>
                        {bowler.name}
                      </span>
                      {bowler.isBowling && (
                        <span className="flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                      )}
                    </div>
                  </td>
                  <td className="text-center text-muted-foreground">{bowler.overs}</td>
                  <td className="text-center text-muted-foreground">{bowler.maidens}</td>
                  <td className="text-center">{bowler.runs}</td>
                  <td className="text-center font-bold text-live text-lg">{bowler.wickets}</td>
                  <td className="text-right font-semibold">{bowler.economy.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
};
