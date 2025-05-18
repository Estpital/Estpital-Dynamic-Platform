Proje Yapısı ve GitHub'a Yükleme Adımları
Bu belge, Estpital projesi için temel dosya yapısını ve bu dosyaları GitHub'a nasıl yükleyeceğinizi açıklar.
1. Oluşturmanız Gereken Ana Klasörler
Estpital-Dynamic-Platform/
├── public/                  # Statik dosyalar
│   └── assets/              # Görseller ve diğer medya dosyaları
│       ├── images/
│       └── models/
├── src/                     # Kaynak kod
│   ├── components/          # Yeniden kullanılabilir bileşenler
│   │   ├── common/
│   │   ├── forms/
│   │   └── 3d/
│   ├── pages/               # Sayfalar
│   └── styles/              # CSS dosyaları
└── README.md                # Proje açıklaması (Zaten oluşturduk)
2. GitHub'da Bu Klasörleri Oluşturma Adımları
Her bir klasörü GitHub'da oluşturmak için:

GitHub repository ana sayfasında "Add file" > "Create new file" seçeneğine tıklayın
Dosya adı kısmına klasör adı ve içine bir README.md ekleyin. Örneğin: public/README.md
GitHub boş klasörleri kabul etmediği için, her klasörün içine bir README.md dosyası ekleyeceğiz.
Commit işlemini tamamlayın.

Klasör İçi README.md Dosyaları İçin Örnek İçerik:
public/README.md için:
# Public Klasörü

Bu klasör, statik dosyaları içerir (resimler, 3D modeller vb.)
src/README.md için:
# Source Klasörü

Bu klasör, projenin kaynak kodlarını içerir.
3. Tüm Klasör Yapısını Oluşturma
Yukarıdaki her klasör için aynı işlemi tekrarlayın:

public/README.md
public/assets/README.md
public/assets/images/README.md
public/assets/models/README.md
src/README.md
src/components/README.md
src/components/common/README.md
src/components/forms/README.md
src/components/3d/README.md
src/pages/README.md
src/styles/README.md

4. Temel Konfigürasyon Dosyaları
Daha sonra aşağıdaki dosyaları ekleyeceğiz:

package.json (npm paketleri)
next.config.js (Next.js konfigürasyonu)
tailwind.config.js (Tailwind CSS konfigürasyonu)
