/**
 * Modal Functionality
 * モーダル機能（業界マップ表示用）
 */

document.addEventListener('DOMContentLoaded', function() {
  const modalTrigger = document.querySelector('[data-modal-trigger]');
  const modal = document.getElementById('map-modal');

  if (!modal || !modalTrigger) {
    return;
  }

  const modalClose = modal.querySelector('.modal-close');
  const modalOverlay = modal.querySelector('.modal-overlay');
  const body = document.body;

  // モーダルを開く
  function openModal() {
    modal.classList.add('active');
    body.classList.add('no-scroll');
  }

  // モーダルを閉じる
  function closeModal() {
    modal.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  // トリガーボタンをクリック
  if (modalTrigger) {
    modalTrigger.addEventListener('click', openModal);
  }

  // 閉じるボタンをクリック
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  // オーバーレイをクリック
  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // ESCキーで閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
