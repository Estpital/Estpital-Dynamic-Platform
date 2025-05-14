import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Box3, Vector3, MeshBasicMaterial, LineBasicMaterial, BufferGeometry, Vector3 as ThreeVector3, Line } from 'three';

// 3D Model Bileşeni
function HeadModel({ isMobile, onRegionClick }) {
  const { scene } = useGLTF('/assets/scene.gltf'); // .gltf dosyasının yolu
  const modelRef = useRef();
  const [selectedRegion, setSelectedRegion] = useState(null);

  // Bölge tanımları ve renkleri
  const regions = [
    { name: 'Saç Bölgesi', color: '#FF5555', position: [0, 1.5, 0], bounds: { minY: 1.2, maxY: Infinity } }, // Kafa üstü
    { name: 'Yüz Bölgesi', color: '#55FF55', position: [0, 1.0, 0], bounds: { minY: 0.8, maxY: 1.2 } }, // Yüz
    { name: 'Boyun Bölgesi', color: '#5555FF', position: [0, 0.6, 0], bounds: { minY: 0.4, maxY: 0.8 } }, // Boyun
    { name: 'Göğüs Bölgesi', color: '#FFFF55', position: [0, 0.2, 0], bounds: { minY: 0.0, maxY: 0.4 } }, // Göğüs
    { name: 'Karın Bölgesi', color: '#FF55FF', position: [0, -0.2, 0], bounds: { minY: -0.4, maxY: 0.0 } }, // Karın
    { name: 'Bel Bölgesi', color: '#55FFFF', position: [0, -0.6, 0], bounds: { minY: -0.8, maxY: -0.4 } }, // Bel
    { name: 'Kol Kasları', color: '#FFA500', position: [0.5, 0.2, 0], bounds: { minX: 0.3, maxX: Infinity, minY: 0.0, maxY: 0.4 } }, // Kollar
  ];

  // Sınırlayıcı kutuyu hesapla ve modeli merkeze al
  useEffect(() => {
    if (scene) {
      const box = new Box3().setFromObject(scene);
      const center = box.getCenter(new Vector3());
      const size = box.getSize(new Vector3());

      // Modeli merkeze al
      scene.position.sub(center);

      // Modelin ölçeğini ekran boyutuna göre ayarla
      const maxDim = Math.max(size.x, size.y, size.z);
      const scaleFactor = isMobile ? 1.5 / maxDim : 2 / maxDim; // Daha küçük ölçek
      scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Modelin başlangıç konumunu ayarla
      scene.position.set(0, isMobile ? -0.5 : 0, 0);

      // Bölgelere göre renklendirme (orijinal materyalleri koru)
      scene.traverse((child) => {
        if (child.isMesh) {
          const position = child.position;
          const region = regions.find((r) => {
            const inYBounds = position.y >= (r.bounds.minY || -Infinity) && position.y <= (r.bounds.maxY || Infinity);
            const inXBounds = !r.bounds.minX || (position.x >= (r.bounds.minX || -Infinity) && position.x <= (r.bounds.maxX || Infinity));
            return inYBounds && inXBounds;
          });

          if (region) {
            child.material = new MeshBasicMaterial({ color: region.color });
            child.userData.region = region.name;
          }
        }
      });
    }
  }, [scene, isMobile]);

  // Tıklama olayını yönet
  const handleClick = (event) => {
    const mesh = event.object;
    if (mesh.userData.region) {
      setSelectedRegion(mesh.userData.region);
      onRegionClick(mesh.userData.region);
    }
  };

  return (
    <>
      <primitive object={scene} ref={modelRef} onClick={handleClick} />
      {selectedRegion && (
        <group>
          {/* Çubuk ve isim etiketi */}
          {regions.map((region) => {
            if (region.name === selectedRegion) {
              const startPoint = new ThreeVector3(region.position[0], region.position[1], region.position[2]);
              const endPoint = startPoint.clone().add(new ThreeVector3(isMobile ? 1.5 : 2, 0, 0)); // Çubuğun uzunluğu
              const points = [startPoint, endPoint];
              const geometry = new BufferGeometry().setFromPoints(points);
              return (
                <line key={region.name} geometry={geometry}>
                  <lineBasicMaterial color={region.color} linewidth={2} />
                </line>
              );
            }
            return null;
          })}
        </group>
      )}
    </>
  );
}

function Home() {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState(null);
  const [cameraPosition, setCameraPosition] = useState([0, 0, 5]);
  const isMobile = window.innerWidth <= 768;

  const handleRegionClick = (region) => {
    setSelectedRegion(region);
    // Bölgeye göre kamerayı yakınlaştır
    switch (region) {
      case 'Saç Bölgesi':
        setCameraPosition([0, 1.5, 2]);
        break;
      case 'Yüz Bölgesi':
        setCameraPosition([0, 1.0, 2]);
        break;
      case 'Boyun Bölgesi':
        setCameraPosition([0, 0.6, 2]);
        break;
      case 'Göğüs Bölgesi':
        setCameraPosition([0, 0.2, 2]);
        break;
      case 'Karın Bölgesi':
        setCameraPosition([0, -0.2, 2]);
        break;
      case 'Bel Bölgesi':
        setCameraPosition([0, -0.6, 2]);
        break;
      case 'Kol Kasları':
        setCameraPosition([0.5, 0.2, 2]);
        break;
      default:
        setCameraPosition([0, 0, 5]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="bg-blue-100 py-12 sm:py-20 text-center">
        <div className="container mx-auto px-4 flex flex-col items-center justify-between">
          <div className="w-full text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">{t('welcome')}</h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              {t('welcome_desc')}
            </p>
            {!isMobile && (
              <a
                href="/randevu"
                className="inline-block bg-blue-700 text-white px-5 py-2 sm:px-6 sm:py-3 text-base sm:text-lg rounded-lg hover:bg-blue-800"
              >
                {t('appointment')}
              </a>
            )}
          </div>
          <div className={`w-full ${isMobile ? 'h-screen' : 'h-[60vh]'} mt-8`}>
            <Canvas>
              <Suspense fallback={null}>
                <PerspectiveCamera 
                  makeDefault 
                  position={cameraPosition}
                  fov={isMobile ? 70 : 50} // Mobil için daha geniş görüş açısı
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <HeadModel isMobile={isMobile} onRegionClick={handleRegionClick} />
                <OrbitControls 
                  enablePan={false} 
                  minDistance={isMobile ? 2 : 1.5}
                  maxDistance={isMobile ? 5 : 4}
                  target={[0, 0, 0]}
                  enableZoom={true}
                  enableRotate={true}
                  minAzimuthAngle={-Math.PI * 0.75} // -135 derece
                  maxAzimuthAngle={Math.PI * 0.75} // 135 derece
                />
              </Suspense>
            </Canvas>
          </div>
          {selectedRegion && (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-blue-700">{selectedRegion}</p>
              <p className="text-sm text-gray-600">Bu bölgeyi seçmek için tekrar tıklayın.</p>
            </div>
          )}
        </div>
      </section>

      {/* Services Section - Kaydırılabilir */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">Hizmetlerimiz</h3>
          <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
            <div className="flex space-x-4 sm:space-x-6 pb-4">
              {[
                { 
                  name: t('service_names.hair_transplant'), 
                  path: "/sac-ekimi", 
                  description: "FUE ve DHI teknikleriyle kalıcı ve doğal saç ekimi.",
                  icon: (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-12h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2z"/>
                    </svg>
                  )
                },
                { 
                  name: t('service_names.rhinoplasty'), 
                  path: "/burun-estetigi", 
                  description: "Yüzünüze uyumlu, estetik bir burun tasarımı.",
                  icon: (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-8h2v4h-2zm-2-2h6l-3-4z"/>
                    </svg>
                  )
                },
                { 
                  name: t('service_names.breast_aesthetics'), 
                  path: "/meme-estetigi", 
                  description: "Doğal görünüm için meme büyütme, küçültme ve dikleştirme.",
                  icon: (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-3-6h6v2H9z"/>
                    </svg>
                  )
                },
                { 
                  name: t('service_names.facial_aesthetics'), 
                  path: "/yuz-estetigi", 
                  description: "Yüz germe, boyun estetiği ve gençleştirme işlemleri.",
                  icon: (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2-8h4v2h-4z"/>
                    </svg>
                  )
                },
                { 
                  name: t('service_names.fillers_botox'), 
                  path: "/dolgu-botoks", 
                  description: "Kırışıklık tedavisi ve hacim kazandırma.",
                  icon: (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-8h2v4h-2zm-2-2l6 6m-6 0l6-6"/>
                    </svg>
                  )
                },
                { 
                  name: t('service_names.dental_treatments'), 
                  path: "/dis-tedavileri", 
                  description: "İmplant, zirkonyum kaplama ve estetik diş çözümleri.",
                  icon: (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-2-6h4v2h-4zm-1-4h6v2H9z"/>
                    </svg>
                  )
                },
                { 
                  name: t('service_names.tummy_tuck'), 
                  path: "/karin-germe", 
                  description: "Daha düz ve sıkı bir karın için karın germe.",
                  icon: (
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-3-6h6v2H9z"/>
                    </svg>
                  )
                },
              ].map((hizmet, index) => (
                <a
                  key={index}
                  href={hizmet.path}
                  className="min-w-[200px] sm:min-w-[250px] bg-gray-50 p-4 sm:p-6 rounded-lg shadow hover:shadow-lg transition snap-center text-center"
                >
                  {hizmet.icon}
                  <h4 className="text-lg sm:text-xl font-semibold mb-2">{hizmet.name}</h4>
                  <p className="text-sm sm:text-lg">{hizmet.description}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Butonu */}
      <a
        href="https://wa.me/905441072570?text=Merhaba,%20Estpital%20hakkında%20bilgi%20almak%20istiyorum!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 bg-green-500 text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50 flex items-center"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 mr-1 sm:mr-2" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01-1.87-1.87-4.36-2.9-7.01-2.9zm0 18.02c-1.48 0-2.93-.39-4.19-1.13l-.3-.18-3.12.82.83-3.04-.2-.31c-.8-1.27-1.23-2.73-1.23-4.25 0-4.58 3.73-8.31 8.31-8.31 2.22 0 4.31.86 5.88 2.43 1.56 1.56 2.43 3.66 2.43 5.88 0 4.58-3.73 8.31-8.31 8.31zm4.57-6.11c-.25-.12-1.47-.73-1.7-.81-.22-.08-.38-.12-.54.12-.16.24-.62.81-.76.97-.14.16-.28.18-.53.06-.25-.12-1.06-.39-2.02-1.24-.75-.66-1.25-1.48-1.39-1.73-.14-.25-.02-.38.11-.51.11-.11.25-.28.38-.42.12-.14.16-.24.25-.41.08-.16.04-.31-.02-.43-.06-.12-.54-1.29-.74-1.77-.19-.47-.39-.41-.54-.41-.14 0-.3-.02-.46-.02-.16 0-.42.08-.64.31-.22.23-.85.83-.85 2.02 0 1.19.86 2.34 1 2.49.14.15 1.69 2.58 4.1 3.62 2.41 1.04 2.41.7 2.84.67.43-.03 1.39-.57 1.59-1.03.2-.46.2-.85.14-1.03-.06-.18-.23-.29-.48-.41z"/>
        </svg>
        <span className="text-sm sm:text-base">{t('whatsapp')}</span>
      </a>

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

export default Home;
