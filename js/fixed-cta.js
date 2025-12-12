// Fixed CTA Button for Mobile
// スクロール時に表示・非表示を切り替える

document.addEventListener('DOMContentLoaded', function() {
  const fixedCTA = document.getElementById('fixed-cta');
  const heroSection = document.querySelector('.hero');
  const contactSection = document.getElementById('contact');

  if (!fixedCTA || !heroSection || !contactSection) {
    return;
  }

  // モバイルデバイスかどうかをチェック
  function isMobileDevice() {
    return window.innerWidth <= 767;
  }

  // 固定CTAボタンの表示・非表示を制御
  function toggleFixedCTA() {
    // モバイルデバイスでない場合は非表示
    if (!isMobileDevice()) {
      fixedCTA.classList.remove('visible');
      return;
    }

    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const contactTop = contactSection.offsetTop;
    const scrollPosition = window.scrollY + window.innerHeight;

    // ヒーローセクションを通過したら表示
    // お問い合わせセクションに到達したら非表示
    if (window.scrollY > heroBottom && scrollPosition < contactTop + 200) {
      fixedCTA.classList.add('visible');
    } else {
      fixedCTA.classList.remove('visible');
    }
  }

  // スクロールイベント（パフォーマンス最適化のためthrottle）
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (scrollTimeout) {
      window.cancelAnimationFrame(scrollTimeout);
    }
    scrollTimeout = window.requestAnimationFrame(function() {
      toggleFixedCTA();
    });
  });

  // リサイズイベント
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(function() {
      toggleFixedCTA();
    }, 200);
  });

  // 初期チェック
  toggleFixedCTA();
});
