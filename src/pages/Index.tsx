import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { LiveMatchCard } from '@/components/LiveMatchCard';
import { UpcomingMatchCard } from '@/components/UpcomingMatchCard';
import { CompletedMatchCard } from '@/components/CompletedMatchCard';
import { PlayerCard } from '@/components/PlayerCard';
import { NewsCard } from '@/components/NewsCard';
import { Button } from '@/components/ui/button';
import { liveMatches, upcomingMatches, completedMatches, topPlayers, newsArticles } from '@/data/mockData';
import { ArrowRight, Zap, Radio } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-gradient py-12 md:py-20 border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6 animate-fade-in">
              <Radio className="h-4 w-4 animate-pulse-live" />
              <span>Live matches happening now</span>
            </div>
            <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4 animate-slide-up">
              Your Cricket <span className="text-gradient">Command Center</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Real-time scores, live commentary, player stats, and breaking news from the world of cricket.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button size="lg" className="accent-gradient text-accent-foreground font-semibold glow-accent">
                <Zap className="h-5 w-5 mr-2" />
                View Live Matches
              </Button>
              <Button size="lg" variant="outline" className="border-border hover:bg-secondary">
                Explore Schedule
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Live Matches Section */}
      <section id="live" className="py-12 md:py-16">
        <div className="container">
          <SectionHeader 
            title="Live Matches" 
            subtitle="Ball-by-ball updates from ongoing matches"
            action={
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View All <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            }
          />
          <div className="grid md:grid-cols-2 gap-6">
            {liveMatches.map((match) => (
              <LiveMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Matches Section */}
      <section id="upcoming" className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
          <SectionHeader 
            title="Upcoming Matches" 
            subtitle="Don't miss the action - check the schedule"
            action={
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                Full Schedule <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingMatches.map((match) => (
              <UpcomingMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Recent Results Section */}
      <section id="results" className="py-12 md:py-16">
        <div className="container">
          <SectionHeader 
            title="Recent Results" 
            subtitle="Catch up on completed matches"
            action={
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                All Results <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            }
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {completedMatches.map((match) => (
              <CompletedMatchCard key={match.id} match={match} />
            ))}
          </div>
        </div>
      </section>

      {/* Top Players Section */}
      <section id="players" className="py-12 md:py-16 bg-secondary/30">
        <div className="container">
          <SectionHeader 
            title="Top Players" 
            subtitle="Stats from cricket's finest"
            action={
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                All Players <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-12 md:py-16">
        <div className="container">
          <SectionHeader 
            title="Latest News" 
            subtitle="Breaking stories and analysis"
            action={
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                All News <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            }
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
