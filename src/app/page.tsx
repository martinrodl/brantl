import HeroBanner from "@/components/pages/hero-banner";

export default function Home() {
  return (
    <main className="container flex flex-grow flex-col">
      <HeroBanner />
      {Array.from({ length: 50 }).map((_, i) => (
        <p key={i} className="m-4">
          Scroll content {i + 1}
        </p>
      ))}
    </main>
  );
}
