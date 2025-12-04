import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SectionHeader } from '@/components/SectionHeader';
import { LiveMatchCard } from '@/components/LiveMatchCard';
import { PlayerCard } from '@/components/PlayerCard';
import { NewsCard } from '@/components/NewsCard';
import { LiveTicker } from '@/components/LiveTicker';
import { MatchCommentary } from '@/components/MatchCommentary';
import { OverByOver } from '@/components/OverByOver';
import { MatchStats } from '@/components/MatchStats';
import { BattingCard } from '@/components/BattingCard';
import { BowlingCard } from '@/components/BowlingCard';
import { QuickMatchTabs } from '@/components/QuickMatchTabs';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { liveMatches, topPlayers, newsArticles } from '@/data/mockData';
import { ArrowRight, Zap, Radio, Trophy, Users, Newspaper } from 'lucide-react';

const Index = () => {
  const featuredMatch = liveMatches[0];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <LiveTicker />
      
      {/* Hero Section - Compact */}
      <section className="hero-gradient py-8 md:py-12 border-b border-border">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 animate-fade-in">
              <Radio className="h-4 w-4 animate-pulse-live" />
              <span>Live matches happening now</span>
            </div>
            <h1 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-3 animate-slide-up">
              Your Cricket <span className="text-gradient">Command Center</span>
            </h1>
            <p className="text-base text-muted-foreground mb-6 animate-slide-up" style={{ animationDelay: '0.1s' }}>
              Real-time scores, live commentary, player stats, and breaking news.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
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

      {/* Featured Live Match - Full Details */}
      {featuredMatch && (
        <section className="py-8 md:py-12 bg-secondary/20">
          <div className="container">
            <SectionHeader 
              title="Featured Match" 
              subtitle="Live ball-by-ball coverage"
              action={
                <Badge className="bg-live text-white animate-pulse">
                  <span className="flex h-2 w-2 rounded-full bg-white mr-2 animate-pulse" />
                  LIVE
                </Badge>
              }
            />
            
            {/* Match Header */}
            <Card className="card-gradient border-border/50 p-4 md:p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">{featuredMatch.series}</p>
                  <p className="text-sm text-muted-foreground">{featuredMatch.venue}</p>
                </div>
                <Badge variant="outline" className="border-primary/50 text-primary self-start md:self-auto">
                  {featuredMatch.type}
                </Badge>
              </div>

              {/* Scorecard */}
              <div className="mt-6 grid md:grid-cols-2 gap-6">
                {/* Team 1 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{featuredMatch.team1.logo}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{featuredMatch.team1.name}</h3>
                      <p className="text-sm text-muted-foreground">Batting</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-bold text-primary">{featuredMatch.team1.score}</p>
                    <p className="text-sm text-muted-foreground">({featuredMatch.team1.overs} ov)</p>
                  </div>
                </div>

                {/* Team 2 */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-background/50">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{featuredMatch.team2.logo}</span>
                    <div>
                      <h3 className="font-display text-xl font-bold">{featuredMatch.team2.name}</h3>
                      <p className="text-sm text-muted-foreground">Bowled</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl font-bold">{featuredMatch.team2.score}</p>
                    <p className="text-sm text-muted-foreground">({featuredMatch.team2.overs} ov)</p>
                  </div>
                </div>
              </div>

              {/* Match Status */}
              <div className="mt-4 p-3 rounded-lg bg-primary/10 text-center">
                <p className="text-sm font-medium text-primary">
                  India need 11 runs in 10 balls • CRR: 8.52 • RRR: 6.60
                </p>
              </div>
            </Card>

            {/* Live Details Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Left Column - Batting & Bowling */}
              <div className="space-y-6">
                <BattingCard />
                <BowlingCard />
              </div>

              {/* Middle Column - Commentary */}
              <div>
                <MatchCommentary />
              </div>

              {/* Right Column - Over by Over & Stats */}
              <div className="space-y-6">
                <OverByOver />
                <MatchStats />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Match Tabs Section */}
      <section className="py-8 md:py-12">
        <div className="container">
          <SectionHeader 
            title="All Matches" 
            subtitle="Live, upcoming, and completed matches"
            action={
              <Button variant="ghost" className="text-primary hover:text-primary/80">
                View All <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            }
          />
          <QuickMatchTabs />
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="py-6 bg-primary/10 border-y border-border/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Radio className="h-5 w-5 text-live" />
                <span className="text-2xl font-bold">{liveMatches.length}</span>
              </div>
              <p className="text-xs text-muted-foreground">Live Matches</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Trophy className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold">12</span>
              </div>
              <p className="text-xs text-muted-foreground">Active Series</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="h-5 w-5 text-accent" />
                <span className="text-2xl font-bold">500+</span>
              </div>
              <p className="text-xs text-muted-foreground">Players</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Newspaper className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold">100+</span>
              </div>
              <p className="text-xs text-muted-foreground">News Articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Players Section */}
      <section id="players" className="py-8 md:py-12">
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
      <section id="news" className="py-8 md:py-12 bg-secondary/30">
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
