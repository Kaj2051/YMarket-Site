import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  count: string;
}

export const CategoryCard = ({ icon: Icon, title, count }: CategoryCardProps) => {
  return (
    <Card className="group cursor-pointer overflow-hidden border-border bg-gradient-card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="p-6 flex flex-col items-center text-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Icon className="h-7 w-7 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{count} items</p>
        </div>
      </div>
    </Card>
  );
};
