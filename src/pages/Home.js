import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

// 3D Model Bileşeni
function HeadModel() {
  const { scene } = useGLTF('/assets/human-head.glb'); // .glb dosyasının yolu
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
}

function Home() {
  const { t } = useTranslation();

  const hizmetler = [
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
      description: "Daha düz ve
