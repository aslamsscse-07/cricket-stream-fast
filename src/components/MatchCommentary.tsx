import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MessageSquare } from 'lucide-react';

interface CommentaryItem {
  over: string;
  ball: string;
  runs: string;
  text: string;
  type: 'normal' | 'boundary' | 'six' | 'wicket';
}

const commentaryData: CommentaryItem[] = [
  {
    over: '18',
    ball: '2',
    runs: '4',
    text: 'FOUR! Kohli drives beautifully through the covers. Pure class!',
    type: 'boundary',
  },
  {
    over: '18',
    ball: '1',
    runs: '1',
    text: 'Single taken, good running between the wickets.',
    type: 'normal',
  },
  {
    over: '17',
    ball: '6',
    runs: '2',
    text: 'Flicked towards deep midwicket, they come back for the second.',
    type: 'normal',
  },
  {
    over: '17',
    ball: '5',
    runs: '6',
    text: 'SIX! Massive hit over long-on! The crowd goes wild!',
    type: 'six',
  },
  {
    over: '17',
    ball: '4',
    runs: 'W',
    text: 'OUT! Caught at deep square leg. Starc strikes!',
    type: 'wicket',
  },
];

const getRunBadgeStyle = (type: CommentaryItem['type']) => {
  switch (type) {
    case 'boundary':
      return 'bg-primary text-primary-foreground';
    case 'six':
      return 'bg-accent text-accent-foreground';
    case 'wicket':
      return 'bg-live text-white';
    default:
      return 'bg-muted text-muted-foreground';
  }
};

export const MatchCommentary = () => {
  return (
    <Card className="card-gradient border-border/50 p-4">
      <div className="flex items-center gap-2 mb-4">
        <MessageSquare className="h-5 w-5 text-primary" />
        <h3 className="font-display text-lg font-bold">Live Commentary</h3>
      </div>

      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
        {commentaryData.map((item, idx) => (
          <div 
            key={idx} 
            className="flex gap-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
          >
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-xs text-muted-foreground">{item.over}.{item.ball}</span>
              <Badge className={`${getRunBadgeStyle(item.type)} h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold`}>
                {item.runs}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};
