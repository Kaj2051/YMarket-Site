import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-marketplace.jpg";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 md:py-32">
      <div className="absolute inset-0 opacity-10">
        <img
          src={heroImage}
          alt="YMarket Hero"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-primary-foreground md:text-6xl">
            De marktplaats voor jongeren
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/90 md:text-xl">
            Koop en verkoop tweedehands spullen. Van gaming gear tot festival tickets, alles wat jij zoekt!
          </p>
          <div className="mx-auto flex max-w-2xl gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Waar ben je naar op zoek?"
                className="h-12 pl-10 text-base bg-background"
              />
            </div>
            <Button size="lg" className="bg-secondary hover:bg-secondary/90">
              Zoeken
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
