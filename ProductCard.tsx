import { Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  location: string;
  condition?: "Nieuw" | "Gebruikt";
  featured?: boolean;
}

export const ProductCard = ({ image, title, price, location, condition, featured }: ProductCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-border bg-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-105"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-2 right-2 h-8 w-8 rounded-full bg-background/80 backdrop-blur hover:bg-background"
        >
          <Heart className="h-4 w-4" />
        </Button>
        {featured && (
          <Badge className="absolute top-2 left-2 bg-secondary">
            Featured
          </Badge>
        )}
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center justify-between">
          <p className="text-xl font-bold text-primary">{price}</p>
          {condition && (
            <Badge variant="outline" className="text-xs">
              {condition}
            </Badge>
          )}
        </div>
        <p className="text-sm text-muted-foreground">{location}</p>
      </div>
    </Card>
  );
};
