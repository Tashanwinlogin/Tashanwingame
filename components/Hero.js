export default function Hero() {
  return (
    <section className="relative w-full h-[80vh] flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black" />
      
      <div className="relative z-10 text-center px-6">
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
          Your Automatic <br/><span className="text-[var(--gold)]">Site</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Live search, auto sitemap, universal design.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="/blog" className="px-8 py-3 bg-[var(--gold)] text-black font-bold rounded-full hover:scale-105 transition">
            Explore Blog
          </a>
        </div>
      </div>
    </section>
  );
}
