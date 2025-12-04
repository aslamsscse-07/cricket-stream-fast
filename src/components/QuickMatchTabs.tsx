import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { liveMatches, upcomingMatches, completedMatches } from '@/data/mockData';
import { LiveMatchCard } from './LiveMatchCard';
import { UpcomingMatchCard } from './UpcomingMatchCard';
import { CompletedMatchCard } from './CompletedMatchCard';
import { Badge } from '@/components/ui/badge';

export const QuickMatchTabs = () => {
  return (
    <Tabs defaultValue="live" className="w-full">
      <TabsList className="w-full grid grid-cols-3 bg-card/50 border border-border/50 mb-6">
        <TabsTrigger value="live" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          <span className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-live animate-pulse-live" />
            Live
            <Badge variant="secondary" className="ml-1 h-5 px-1.5 text-xs">
              {liveMatches.length}
            </Badge>
          </span>
        </TabsTrigger>
        <TabsTrigger value="upcoming" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Upcoming
        </TabsTrigger>
        <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
          Results
        </TabsTrigger>
      </TabsList>

      <TabsContent value="live" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {liveMatches.map((match) => (
            <LiveMatchCard key={match.id} match={match} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="upcoming" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {upcomingMatches.map((match) => (
            <UpcomingMatchCard key={match.id} match={match} />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="completed" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {completedMatches.map((match) => (
            <CompletedMatchCard key={match.id} match={match} />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
