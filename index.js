import Hero from '../components/Hero';
import SearchBar from '../components/SearchBar';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <SearchBar />
      <section className="py-20 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Posts</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {/* Dynamic posts preview loaded from JSON */}
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition">Post 1 Preview</div>
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition">Post 2 Preview</div>
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-xl transition">Post 3 Preview</div>
        </div>
      </section>
    </main>
  );
}