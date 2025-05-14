function Home() {
  const hizmetler = [
    { name: "Saç Ekimi", path: "/sac-ekimi", description: "FUE ve DHI teknikleriyle kalıcı ve doğal saç ekimi." },
    { name: "Burun Estetiği", path: "/burun-estetigi", description: "Yüzünüze uyumlu, estetik bir burun tasarımı." },
    { name: "Meme Estetiği", path: "/meme-estetigi", description: "Doğal görünüm için meme büyütme, küçültme ve dikleştirme." },
    { name: "Yüz Estetiği", path: "/yuz-estetigi", description: "Yüz germe, boyun estetiği ve gençleştirme işlemleri." },
    { name: "Dolgu ve Botoks", path: "/dolgu-botoks", description: "Kırışıklık tedavisi ve hacim kazandırma." },
    { name: "Diş Tedavileri", path: "/dis-tedavileri", description: "İmplant, zirkonyum kaplama ve estetik diş çözümleri." },
    { name: "Karın Germe", path: "/karin-germe", description: "Daha düz ve sıkı bir karın için karın germe." },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 sticky top-0 z-10">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Estpital International Agency</h1>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:underline">Ana Sayfa</a></li>
            <li><a href="/hizmetler" className="hover:underline">Hizmetler</a></li>
            <li><a href="/hakkimizda" className="hover:underline">Hakkımızda</a></li>
            <li><a href="/iletisim" className="hover:underline">İletişim</a></li>
            <li><a href="/randevu" className="hover:underline">Randevu Al</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-blue-100 py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Estetik ve Sağlıkta Mükemmeliyet</h2>
          <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto">
            Saç ekimi, burun estetiği, meme estetiği ve daha fazlasında uzman ekibimizle yanınızdayız.
            Hayal ettiğiniz görünüme kavuşmak için hemen randevu alın!
          </p>
          <a
            href="/randevu"
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800"
          >
            Randevu Al
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Hizmetlerimiz</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hizmetler.map((hizmet, index) => (
              <a
                key={index}
                href={hizmet.path}
                className="block bg-gray-50 p-6 rounded-lg shadow hover:shadow-lg transition"
              >
                <h4 className="text-xl font-semibold mb-2">{hizmet.name}</h4>
                <p className="text-lg">{hizmet.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-6">
        <div className="container mx-auto text-center">
          <p className="mb-2">© 2025 Estpital International Agency. Tüm hakları saklıdır.</p>
          <p>E-posta: info@estpital.com | Telefon: +90 212 123 45 67</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
