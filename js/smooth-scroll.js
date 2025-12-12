/**
 * Smooth Scroll Functionality
 * スムーズスクロール機能
 */

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('a[href^="#"]');
  const headerHeight = window.innerWidth <= 767 ? 60 : 80;

  links.forEach(function(link) {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');

      // '#'のみの場合は処理しない
      if (targetId === '#' || targetId === '#top') {
        if (targetId === '#top') {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
        return;
      }

      e.preventDefault();

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        const targetPosition = targetElement.offsetTop - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });

        // ドロワーメニューが開いている場合は閉じる
        const hamburger = document.querySelector('.hamburger');
        const drawerMenu = document.querySelector('.drawer-menu');

        if (hamburger && drawerMenu) {
          hamburger.classList.remove('active');
          drawerMenu.classList.remove('active');
          document.body.classList.remove('no-scroll');
        }
      }
    });
  });
});
