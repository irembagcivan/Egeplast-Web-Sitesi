// 1. ÜST MENÜ KAYDIRMA ETKİLEŞİMİ
const ustMenu = document.getElementById("ustMenu");

window.addEventListener("scroll", function () {
  const kaydirmaDurumu = window.pageYOffset || document.documentElement.scrollTop;

  if (ustMenu) {
    if (kaydirmaDurumu > 50) {
      ustMenu.classList.add("kaydirildi");
    } else {
      ustMenu.classList.remove("kaydirildi");
    }
  }
});

// 2. MODERN ASİMETRİK IZGARA (TEKER TEKER YUKARI KAYAN BANT EFEKTİ)
const resimDegistirici = (function () {
  const resimElemanlari = document.querySelectorAll('.sagGorselIzgarasi .gorselKutusu img');
  
  const resimListesi = [
    'medya/egeplast1.jpeg',
    'medya/egeplast2.jpg',
    'medya/egeplast3.jpg',
    'medya/foto4.jpg', 
    'medya/foto5.jpg'
  ];
  
  if (!resimElemanlari.length) return;

  let globalIndex = 0;

  function degistir() {
    resimElemanlari.forEach(function (img, i) {
      
      // Dalga efekti: Her kutu sırayla bir öncekinden 150ms sonra harekete başlar
      setTimeout(function() {
        
        img.classList.add('yukariCik');
        img.classList.remove('asagidanGel');
        
        setTimeout(function () {
          img.style.transition = 'none';
          img.classList.remove('yukariCik');
          img.classList.add('asagidanGel');
          
          img.src = resimListesi[(globalIndex + i) % resimListesi.length];
          
          setTimeout(function() {
            img.style.transition = ''; 
            img.classList.remove('asagidanGel');
          }, 50);

        }, 600); 

      }, i * 150); 
    });
    
    globalIndex = (globalIndex + 1) % resimListesi.length;
  }

  setTimeout(degistir, 1000);
  setInterval(degistir, 4500);
})();