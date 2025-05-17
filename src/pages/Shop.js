import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

function Shop() {
  const { t } = useTranslation();
  const [cart, setCart] = useState([]);

  // Örnek ürün verileri
  const products = [
    { id: 1, name: "Saç Bakım Yağı", price: 150, image: "/assets/hair-oil.jpg" },
    { id: 2, name: "Estetik Krem", price: 200, image: "/assets/aesthetic-cream.jpg" },
    { id: 3, name: "Vitamin Serumu", price: 120, image: "/assets/vitamin-serum.jpg" },
  ];

  // Sepete ürün ekleme
  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Sepetten ürün çıkarma
  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  // Toplam fiyat hesaplama
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Ürün Listeleme */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl sm:text-3xl font-bold text-center mb-8">
            Mağaza
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-base sm:text-lg text-gray-600 mb-4">{product.price} TL</p>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                >
                  Sepete Ekle
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sepet */}
      {cart.length > 0 && (
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8">
              Sepetiniz
            </h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
                >
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      {item.price} TL x {item.quantity} = {item.price * item.quantity} TL
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
                  >
                    Kaldır
                  </button>
                </div>
              ))}
              <div className="text-right">
                <p className="text-lg font-semibold">Toplam: {totalPrice} TL</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-blue-900 text-white p-4 sm:p-6">
        <div className="container mx-auto text-center text-sm sm:text-base">
          <p className="mb-2">{t('footer_copyright')}</p>
          <p>{t('footer_contact')}</p>
        </div>
      </footer>
    </div>
  );
}

export default Shop;
