import { Match } from '@/types/cricket';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, MapPin } from 'lucide-react';

interface UpcomingMatchCardProps {
  match: Match;
}

export const UpcomingMatchCard = ({ match }: UpcomingMatchCardProps) => {
  const matchDate = new Date(match.date);
  const formattedDate = matchDate.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  return (
    <Card className="card-gradient border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="p-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="bg-secondary text-secondary-foreground text-xs">
            {match.type}
          </Badge>
          <Badge variant="outline" className="border-accent/50 text-accent text-xs">
            Upcoming
          </Badge>
        </div>

        {/* Series Name */}
        <p className="text-xs text-muted-foreground mb-4 truncate">{match.series}</p>

        {/* Teams */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">{match.team1.logo}</span>
            <span className="font-semibold text-sm">{match.team1.shortName}</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-muted-foreground text-xs">VS</span>
          </div>
          
          <div className="flex flex-col items-center gap-2">
            <span className="text-3xl">{match.team2.logo}</span>
            <span className="font-semibold text-sm">{match.team2.shortName}</span>
          </div>
        </div>

        {/* Match Details */}
        <div className="space-y-2 pt-3 border-t border-border/50">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
          {match.time && (
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              <span>{match.time}</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="truncate">{match.venue}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
