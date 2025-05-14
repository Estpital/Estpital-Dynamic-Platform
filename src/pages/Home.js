import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, PerspectiveCamera } from '@react-three/drei';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Box3, Vector3, MeshBasicMaterial } from 'three';

// 3D Model Bileşeni
function HeadModel({ isMobile }) {
  const { scene } = useGLTF('/assets/scene.gltf'); // .gltf dosyasının yolu
  const modelRef = useRef();

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
      const scaleFactor = isMobile ? 2.5 / maxDim : 2 / maxDim; // Daha dengeli bir ölçek
      scene.scale.set(scaleFactor, scaleFactor, scaleFactor);

      // Modelin başlangıç konumunu ayarla (saç kısmı görünecek şekilde yukarı kaydır)
      scene.position.set(0, isMobile ? 1 : 1.5, 0);

      // Modeli üç farklı renge ayır
      scene.traverse((child) => {
        if (child.isMesh) {
          const position = child.position;
          if (position.y > 1.0) {
            // Baş kısmı (saç dahil)
            child.material = new MeshBasicMaterial({ color: '#FF5555' }); // Kırmızı
            child.userData.region = 'Saç Bölgesi';
          } else if (position.y > -0.4) {
            // Gövde (belden başa kadar)
            child.material = new MeshBasicMaterial({ color: '#55FF55' }); // Yeşil
            child.userData.region = position.y > 0.0 ? 'Göğüs Bölgesi' : 'Karın Bölgesi';
          } else {
            // Belden aşağısı
            child.material = new MeshBasicMaterial({ color: '#5555FF' }); // Mavi
            child.userData.region = 'Bel Bölgesi';
          }
        }
      });

      // Sayfaya girildiğinde konuşma başlat
      const utterance = new SpeechSynthesisUtterance('Merhaba! Ben Grok, seni dönüştürmeye hazır mısın? Hangi bölgeni değiştirmek istersin?');
      utterance.lang = 'tr-TR'; // Türkçe dil ayarı
      window.speechSynthesis.speak(utterance);
    }
  }, [scene, isMobile]);

  // Tıklama olayını yönet
  const handleClick = (event) => {
    const mesh = event.object;
    const region = mesh.userData.region;

    // Bölgeye göre yönlendirme
    if (region === 'Saç Bölgesi') {
      window.location.href = '/sac-ekimi';
    } else if (region === 'Göğüs Bölgesi') {
      window.location.href = '/meme-estetigi';
    } else if (region === 'Karın Bölgesi' || region === 'Bel Bölgesi') {
      window.location.href = '/karin-germe';
    }

    // Tıklama sonrası konuşma
    const utterance = new SpeechSynthesisUtterance(`Harika, ${region} seçtin! Bu bölgede nasıl bir dönüşüm yapmak istersin?`);
    utterance.lang = 'tr-TR';
    window.speechSynthesis.speak(utterance);
  };

  return <primitive object={scene} ref={modelRef} onClick={handleClick} />;
}

function Home() {
  const { t } = useTranslation();
  const isMobile = window.innerWidth <= 768;
  const controlsRef = useRef();

  // Zoom sonrası kamera pozisyonunu güncelle
  useEffect(() => {
    const controls = controlsRef.current;
    if (controls) {
      const updateCamera = () => {
        controls.target.set(0, isMobile ? 1 : 1.5, 0); // Modelin merkezine sabitle
        controls.update();
      };
      controls.addEventListener('change', updateCamera);
      return () => controls.removeEventListener('change', updateCamera);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Model Bölümü (Sayfa açıldığında direkt model görünecek) */}
      <section className="bg-white py-8 relative">
        {isMobile && (
          <div className="absolute top-12 left-0 w-full text-center z-10">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-700">
              Kendini dönüştürmeye hazır mısın?
            </h2>
          </div>
        )}
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className={`md:w-1/3 ${isMobile ? 'hidden' : 'block'} text-center md:text-left`}></div>
          <div className={`w-full ${isMobile ? 'w-full h-screen' : 'md:w-1/3 h-[70vh]'}`}>
            <Suspense fallback={null}>
              <Canvas>
                <PerspectiveCamera 
                  makeDefault 
                  position={[0, 1.5, 5]} // Kamerayı modelin üst kısmını görecek şekilde ayarladık
                  fov={isMobile ? 70 : 50} // Mobil için daha geniş görüş açısı
                />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <HeadModel isMobile={isMobile} />
                <OrbitControls 
                  ref={controlsRef}
                  enablePan={true} // Kaydırma açık
                  panSpeed={0.5}
                  enableZoom={true}
                  enableRotate={true}
                  minDistance={isMobile ? 2 : 1.5}
                  maxDistance={isMobile ? 5 : 4}
                  target={[0, isMobile ? 1 : 1.5, 0]} // Modelin merkezine sabitle
                  minAzimuthAngle={-Math.PI * 0.75} // -135 derece
                  maxAzimuthAngle={Math.PI * 0.75} // 135 derece
                  minPolarAngle={Math.PI / 2 - 0.2} // 90 - 11.5 derece (~%10-20)
                  maxPolarAngle={Math.PI / 2 + 0.2} // 90 + 11.5 derece (~%10-20)
                  onChange={() => {
                    // Sadece yukarı-aşağı kaydırmaya izin ver
                    const controls = controlsRef.current;
                    if (controls) {
                      const panDelta = controls.getPanDelta();
                      panDelta.x = 0; // Yatay kaydırmayı devre dışı bırak
                      controls.pan(panDelta);
                    }
                  }}
                />
              </Canvas>
            </Suspense>
          </div>
          <div className={`md:w-1/3 ${isMobile ? 'hidden' : 'block'} text-center md:text-right`}></div>
        </div>
        {isMobile && (
          <div className="absolute bottom-12 left-0 w-full text-center z-10">
            <p className="text-sm sm:text-base text-gray-600">
              Vücudunuzda dönüştürmek istediğiniz bölgeleri seçin. Dönüşüm yolculuğunuza başlayalım.
            </p>
          </div>
        )}
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
                    <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-700 mb-2" fill="currentColor" viewBox="0 0 24  pious-fiber/api/objects#using-3rd-party-objects-declaratively

    at https://estpital-dynamic-platform.netlify.app/static/js/main.e23d659b.js:2:1007906
    at Ey (https://estpital-dynamic-platform.netlify.app/static/js/main.e23d659b.js:2:1006651)
    at div
    at div
    at section
    at div
    at o_ (https://estpital-dynamic-platform.netlify.app/static/js/main.e23d659b.js:2:1100481)
    at Z (https://estpital-dynamic-platform.netlify.app/static/js/main.e23d659b.js:2:259838)
    at oe (https://estpital-dynamic-platform.netlify.app/static/js/main.e23d659b.js:2:263034)
    at se (https://estpital-dynamic-platform.netlify.app/static/js/main.e23d659b.js:2:262421)
    at ue (https://estpital-dynamic-platform.netlify.app/static/js/main.e23d659b.js:2:264073)
    at b_ (https://estpital-dynamic-platform.netlify.app/static/js/main.e23d659b.js:2:1136772)
    at A_
