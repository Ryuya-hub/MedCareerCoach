/**
 * Scroll Animation Functionality
 * スクロールアニメーション機能
 */

document.addEventListener('DOMContentLoaded', function() {
  // Intersection Observer設定
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-visible');
        // 一度アニメーションしたら監視を解除（パフォーマンス向上）
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // アニメーション対象要素
  const fadeElements = document.querySelectorAll(
    '.empathy-item, .service-feature-item, .strength-item, ' +
    '.program-phase, .staff-card, .testimonial-card, .faq-item'
  );

  fadeElements.forEach(el => {
    el.classList.add('fade-in-element');
    observer.observe(el);
  });
});
