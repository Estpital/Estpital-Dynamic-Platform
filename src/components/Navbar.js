function Navbar() {
  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl sm:text-2xl font-bold">Estpital</h1>
        <div>
          <a href="/" className="mr-4 sm:mr-6 text-sm sm:text-base hover:underline">Ana Sayfa</a>
          <a href="/doktorlarimiz" className="mr-4 sm:mr-6 text-sm sm:text-base hover:underline">Doktorlarımız</a>
          <a href="/sac-ekimi" className="mr-4 sm:mr-6 text-sm sm:text-base hover:underline">Saç Ekimi</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
