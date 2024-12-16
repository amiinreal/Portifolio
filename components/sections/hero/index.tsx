import { HeroContent } from "./hero-content";
import { HeroActions } from "./hero-actions";

export function Hero() {
  return (
    <section className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <HeroContent />
        <HeroActions />
      </div>
    </section>
  );
}