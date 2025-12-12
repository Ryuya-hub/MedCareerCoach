/**
 * FAQ Accordion Functionality
 * FAQアコーディオン機能
 */

document.addEventListener('DOMContentLoaded', function() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  if (!faqQuestions.length) {
    return;
  }

  faqQuestions.forEach(function(question) {
    question.addEventListener('click', function() {
      const faqItem = this.parentElement;
      const answer = faqItem.querySelector('.faq-answer');
      const toggle = this.querySelector('.faq-toggle');
      const isExpanded = this.getAttribute('aria-expanded') === 'true';

      // 他のアイテムを閉じる（オプション：1つずつ開く場合）
      // faqQuestions.forEach(function(q) {
      //   if (q !== question) {
      //     const otherItem = q.parentElement;
      //     const otherAnswer = otherItem.querySelector('.faq-answer');
      //     const otherToggle = q.querySelector('.faq-toggle');
      //
      //     q.setAttribute('aria-expanded', 'false');
      //     otherAnswer.setAttribute('aria-hidden', 'true');
      //     otherItem.classList.remove('active');
      //     otherToggle.classList.remove('fa-minus');
      //     otherToggle.classList.add('fa-plus');
      //   }
      // });

      // 現在のアイテムをトグル
      this.setAttribute('aria-expanded', !isExpanded);
      answer.setAttribute('aria-hidden', isExpanded);
      faqItem.classList.toggle('active');

      if (isExpanded) {
        toggle.classList.remove('fa-minus');
        toggle.classList.add('fa-plus');
      } else {
        toggle.classList.remove('fa-plus');
        toggle.classList.add('fa-minus');
      }
    });
  });
});
