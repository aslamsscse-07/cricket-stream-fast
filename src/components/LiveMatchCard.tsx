import { Match } from '@/types/cricket';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface LiveMatchCardProps {
  match: Match;
}

export const LiveMatchCard = ({ match }: LiveMatchCardProps) => {
  return (
    <Card className="card-gradient border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 group">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="relative">
              <span className="flex h-2 w-2 rounded-full bg-live animate-pulse-live" />
            </div>
            <span className="text-xs font-semibold text-live uppercase tracking-wider">LIVE</span>
          </div>
          <Badge variant="outline" className="border-primary/50 text-primary text-xs">
            {match.type}
          </Badge>
        </div>

        {/* Series Name */}
        <p className="text-xs text-muted-foreground mb-3 truncate">{match.series}</p>

        {/* Teams */}
        <div className="space-y-3">
          {/* Team 1 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{match.team1.logo}</span>
              <span className="font-semibold">{match.team1.shortName}</span>
            </div>
            <div className="text-right">
              <span className="font-display text-xl font-bold">{match.team1.score}</span>
              <span className="text-xs text-muted-foreground ml-2">({match.team1.overs})</span>
            </div>
          </div>

          {/* Team 2 */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{match.team2.logo}</span>
              <span className="font-semibold">{match.team2.shortName}</span>
            </div>
            <div className="text-right">
              <span className="font-display text-xl font-bold">{match.team2.score}</span>
              <span className="text-xs text-muted-foreground ml-2">({match.team2.overs})</span>
            </div>
          </div>
        </div>

        {/* Current Info */}
        <div className="mt-4 pt-4 border-t border-border/50">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{match.currentBatsman}</span>
            <div className="flex items-center gap-2">
              <span className="text-accent font-bold text-sm">Last: {match.lastBall}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-1">{match.currentBowler}</p>
        </div>

        {/* Venue */}
        <p className="text-xs text-muted-foreground mt-3 truncate">{match.venue}</p>
      </div>
    </Card>
  );
};
