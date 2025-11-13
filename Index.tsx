import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { Smartphone, Shirt, Dumbbell, Gamepad2, Book, Bike } from "lucide-react";

const Index = () => {
  const categories = [
    { icon: Smartphone, title: "Elektronica", count: "1,234" },
    { icon: Shirt, title: "Mode & Kleding", count: "2,567" },
    { icon: Dumbbell, title: "Sport & Fitness", count: "891" },
    { icon: Gamepad2, title: "Gaming", count: "1,456" },
    { icon: Book, title: "Studie & Boeken", count: "678" },
    { icon: Bike, title: "Vervoer", count: "432" },
  ];

  const products = [
    {
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
      title: "Draadloze koptelefoon - Bijna nieuw",
      price: "€45",
      location: "Amsterdam",
      condition: "Gebruikt" as const,
      featured: true,
    },
    {
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
      title: "Vintage horloge - Limited edition",
      price: "€89",
      location: "Rotterdam",
      condition: "Gebruikt" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&h=500&fit=crop",
      title: "Nike sneakers maat 42",
      price: "€65",
      location: "Utrecht",
      condition: "Nieuw" as const,
      featured: true,
    },
    {
      image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&h=500&fit=crop",
      title: "iPhone 13 128GB - Goede staat",
      price: "€450",
      location: "Den Haag",
      condition: "Gebruikt" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&h=500&fit=crop",
      title: "Gaming controller PS5",
      price: "€35",
      location: "Eindhoven",
      condition: "Gebruikt" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=500&fit=crop",
      title: "Ray-Ban zonnebril",
      price: "€75",
      location: "Groningen",
      condition: "Nieuw" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop",
      title: "MacBook Air M1 - 8GB RAM",
      price: "€650",
      location: "Breda",
      condition: "Gebruikt" as const,
    },
    {
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&h=500&fit=crop",
      title: "Designer rugzak - Origineel",
      price: "€120",
      location: "Nijmegen",
      condition: "Nieuw" as const,
      featured: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
            Populaire categorieën
          </h2>
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <CategoryCard key={category.title} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-2xl font-bold text-foreground md:text-3xl">
            Nieuwste advertenties
          </h2>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
