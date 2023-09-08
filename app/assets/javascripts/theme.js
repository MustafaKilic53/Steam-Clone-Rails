// app/assets/javascripts/theme.js
document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle');
  
    // Kullanıcının tercih ettiği temayı al (localStorage kullanarak)
    let currentTheme = localStorage.getItem('theme');
  
    // Eğer localStorage'da tema tercihi yoksa veya hatalı bir değer ise varsayılan olarak "light" temasını kullan
    if (!currentTheme || (currentTheme !== 'light' && currentTheme !== 'dark')) {
      currentTheme = 'light';
    }
  
    // Tema değiştirme düğmesine tıklama işlevselliği ekle
    themeToggleBtn.addEventListener('click', function() {
      // Tema tercihini güncelle
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  
      // Tema tercihini kaydet
      localStorage.setItem('theme', currentTheme);
  
      // Temayı değiştir
      setTheme(currentTheme);
    });
  
    // Sayfa yüklendiğinde temayı ayarla
    setTheme(currentTheme);
  
    function setTheme(theme) {
      // HTML kök elementine tema sınıfını ekle
      document.documentElement.setAttribute('data-theme', theme);
  
      // CSS dosyalarını güncelle (kullanılan tema dosyasını belirt)
      const themeStyleSheet = theme === 'light' ? 'light.css' : 'dark.css';
      document.getElementById('theme-style').setAttribute('href', themeStyleSheet);
    }
  });