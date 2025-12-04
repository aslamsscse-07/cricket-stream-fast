import { NewsArticle } from '@/types/cricket';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface NewsCardProps {
  article: NewsArticle;
}

export const NewsCard = ({ article }: NewsCardProps) => {
  const articleDate = new Date(article.date);
  const formattedDate = articleDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  return (
    <Card className="card-gradient border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-300 group cursor-pointer">
      <div className="p-4">
        {/* Category & Date */}
        <div className="flex items-center justify-between mb-3">
          <Badge variant="secondary" className="bg-primary/20 text-primary text-xs">
            {article.category}
          </Badge>
          <span className="text-xs text-muted-foreground">{formattedDate}</span>
        </div>

        {/* Title */}
        <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.title}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {article.summary}
        </p>

        {/* Read More */}
        <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
          <span>Read More</span>
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Card>
  );
};
