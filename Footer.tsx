export const Footer = () => {
  return (
    <footer className="border-t border-border bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-hero">
                <span className="text-lg font-bold text-primary-foreground">Y</span>
              </div>
              <span className="text-lg font-bold text-foreground">YMarket</span>
            </div>
            <p className="text-sm text-muted-foreground">
              De marktplaats voor jongeren. Koop en verkoop gemakkelijk je spullen.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Categorieën</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Elektronica</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mode & Kleding</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sport & Fitness</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Gaming</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Over YMarket</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Over ons</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Veilig verkopen</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Help</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Volg ons</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Snapchat</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 YMarket. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};
