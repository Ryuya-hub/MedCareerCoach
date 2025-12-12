// Contact Form - Email Submission
// フォーム送信時にメーラーを起動

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');

  if (!form) {
    return;
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // フォームデータを取得
    const name = document.getElementById('name').value.trim();
    const occupation = document.getElementById('occupation').value;
    const consultationType = document.getElementById('consultation-type').value;
    const message = document.getElementById('message').value.trim();

    // バリデーション
    if (!name || !occupation || !consultationType) {
      alert('必須項目をすべて入力してください。');
      return;
    }

    // メール本文を作成
    const emailBody = `
【MediShift 無料相談申し込み】

■お名前
${name}

■現在の職種
${occupation}

■相談内容
${consultationType}

■運営へのメッセージ
${message || '（なし）'}

---
このメールはMediShiftの無料相談フォームから送信されました。
`.trim();

    // 件名
    const subject = `【MediShift】無料相談申し込み - ${name}様`;

    // メールアドレス
    const emailTo = 'medishift.official@gmail.com';

    // mailto:リンクを作成
    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    // メーラーを起動
    window.location.href = mailtoLink;

    // フォームをリセット（オプション）
    // 送信後、ユーザーがメーラーから戻ってきた時にフォームをクリアしたい場合
    setTimeout(function() {
      const shouldReset = confirm('フォームの内容をクリアしますか？');
      if (shouldReset) {
        form.reset();
      }
    }, 1000);
  });

  // フォーム入力時のバリデーション表示（リアルタイム）
  const requiredFields = form.querySelectorAll('[required]');

  requiredFields.forEach(function(field) {
    field.addEventListener('blur', function() {
      if (!field.value.trim()) {
        field.style.borderColor = '#F44336';
      } else {
        field.style.borderColor = '';
      }
    });

    field.addEventListener('input', function() {
      if (field.value.trim()) {
        field.style.borderColor = '';
      }
    });
  });
});
