/**
 * Hamburger Menu Functionality
 * ハンバーガーメニューの開閉機能
 */

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const drawerMenu = document.querySelector('.drawer-menu');
  const body = document.body;

  if (!hamburger || !drawerMenu) {
    return;
  }

  // ハンバーガーメニューのトグル
  hamburger.addEventListener('click', function() {
    const isActive = hamburger.classList.contains('active');

    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // メニューを開く
  function openMenu() {
    hamburger.classList.add('active');
    drawerMenu.classList.add('active');
    body.classList.add('no-scroll');
  }

  // メニューを閉じる
  function closeMenu() {
    hamburger.classList.remove('active');
    drawerMenu.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  // メニューリンクをクリックしたらメニューを閉じる
  const menuLinks = drawerMenu.querySelectorAll('a');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      closeMenu();
    });
  });

  // ESCキーでメニューを閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && drawerMenu.classList.contains('active')) {
      closeMenu();
    }
  });

  // ウィンドウリサイズ時の処理
  window.addEventListener('resize', function() {
    if (window.innerWidth > 1023 && drawerMenu.classList.contains('active')) {
      closeMenu();
    }
  });
});
