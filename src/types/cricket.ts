export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo: string;
  score?: string;
  overs?: string;
}

export interface Match {
  id: string;
  type: 'T20' | 'ODI' | 'Test';
  status: 'live' | 'upcoming' | 'completed';
  venue: string;
  date: string;
  time?: string;
  team1: Team;
  team2: Team;
  result?: string;
  series: string;
  currentBatsman?: string;
  currentBowler?: string;
  lastBall?: string;
}

export interface Player {
  id: string;
  name: string;
  country: string;
  role: 'Batsman' | 'Bowler' | 'All-rounder' | 'Wicket-keeper';
  image: string;
  matches: number;
  runs: number;
  wickets: number;
  average: number;
}

export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  image: string;
  date: string;
  category: string;
}
