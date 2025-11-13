import { Search, Heart, User, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-hero">
                <span className="text-xl font-bold text-primary-foreground">Y</span>
              </div>
              <span className="text-xl font-bold text-foreground">YMarket</span>
            </a>
          </div>

          <div className="hidden flex-1 max-w-xl mx-8 md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Zoek naar artikelen..."
                className="pl-10 bg-muted/50"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Heart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button className="gap-2 bg-gradient-hero hover:opacity-90 transition-opacity">
              <Plus className="h-4 w-4" />
              <span className="hidden sm:inline">Plaats advertentie</span>
            </Button>
          </div>
        </div>

        <div className="flex md:hidden pb-3">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Zoek naar artikelen..."
              className="pl-10 bg-muted/50"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
