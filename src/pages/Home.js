import Navbar from '../components/Navbar';

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-100 py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">Hoş Geldiniz</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Estpital International Agency ile hayalinizdeki görünüme kavuşun.
          </p>
          <a
            href="/randevu"
            className="inline-block bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-blue-800"
          >
            Randevu Al
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 sm:p-6">
        <div className="container mx-auto text-center text-sm sm:text-base">
          <p className="mb-2">© 2025 Estpital International Agency. Tüm hakları saklıdır.</p>
          <p>E-posta: info@estpital.com | Telefon: +90 212 123 45 67</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
