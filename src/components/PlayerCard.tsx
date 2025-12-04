import { Player } from '@/types/cricket';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PlayerCardProps {
  player: Player;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <Card className="card-gradient border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 group">
      <div className="p-4">
        {/* Player Icon */}
        <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-full bg-secondary text-3xl">
          {player.image}
        </div>

        {/* Player Info */}
        <div className="text-center mb-4">
          <h3 className="font-display text-lg font-semibold">{player.name}</h3>
          <p className="text-sm text-muted-foreground">{player.country}</p>
          <Badge variant="outline" className="mt-2 border-primary/50 text-primary text-xs">
            {player.role}
          </Badge>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border/50">
          <div className="text-center">
            <p className="font-display text-xl font-bold text-accent">{player.matches}</p>
            <p className="text-xs text-muted-foreground">Matches</p>
          </div>
          <div className="text-center">
            <p className="font-display text-xl font-bold">{player.runs}</p>
            <p className="text-xs text-muted-foreground">Runs</p>
          </div>
          {player.role !== 'Batsman' && player.role !== 'Wicket-keeper' && (
            <>
              <div className="text-center">
                <p className="font-display text-xl font-bold">{player.wickets}</p>
                <p className="text-xs text-muted-foreground">Wickets</p>
              </div>
              <div className="text-center">
                <p className="font-display text-xl font-bold text-win">{player.average}</p>
                <p className="text-xs text-muted-foreground">Average</p>
              </div>
            </>
          )}
          {(player.role === 'Batsman' || player.role === 'Wicket-keeper') && (
            <div className="col-span-2 text-center">
              <p className="font-display text-xl font-bold text-win">{player.average}</p>
              <p className="text-xs text-muted-foreground">Average</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};
