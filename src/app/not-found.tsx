import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="py-28 sm:py-36 bg-white text-center">
      <Container size="reading">
        <span className="text-sm font-bold uppercase tracking-wider text-[var(--color-brand-600)]">
          404 — Page Not Found
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-[var(--color-ink)] mt-3">
          This page could not be located.
        </h1>
        <p className="text-base sm:text-lg text-gray-600 mt-4 leading-relaxed">
          The requested page may have been moved, renamed, or is currently being restructured as part of the institutional portal update.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Button href="/" variant="primary">
            <Home className="w-4 h-4 mr-1.5" />
            <span>Return to Homepage</span>
          </Button>
          <Button href="/programmes" variant="outline">
            <span>Explore Programmes</span>
          </Button>
        </div>
      </Container>
    </div>
  );
}
