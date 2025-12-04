import { Match } from '@/types/cricket';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface CompletedMatchCardProps {
  match: Match;
}

export const CompletedMatchCard = ({ match }: CompletedMatchCardProps) => {
  const matchDate = new Date(match.date);
  const formattedDate = matchDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <Card className="card-gradient border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-win" />
            <span className="text-xs font-medium text-win">Completed</span>
          </div>
          <Badge variant="outline" className="border-border text-muted-foreground text-xs">
            {match.type}
          </Badge>
        </div>

        {/* Series Name */}
        <p className="text-xs text-muted-foreground mb-3 truncate">{match.series}</p>

        {/* Teams */}
        <div className="space-y-2">
          {/* Team 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">{match.team1.logo}</span>
              <span className="font-medium text-sm">{match.team1.shortName}</span>
            </div>
            <span className="font-display font-bold text-sm">{match.team1.score}</span>
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl">{match.team2.logo}</span>
              <span className="font-medium text-sm">{match.team2.shortName}</span>
            </div>
            <span className="font-display font-bold text-sm">{match.team2.score}</span>
          </div>
        </div>

        {/* Result */}
        <div className="mt-3 pt-3 border-t border-border/50">
          <p className="text-xs text-primary font-medium">{match.result}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xs text-muted-foreground">{formattedDate}</span>
            <span className="text-xs text-muted-foreground truncate max-w-[150px]">{match.venue}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
