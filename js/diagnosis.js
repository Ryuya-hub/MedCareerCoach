/**
 * 簡易自己診断機能
 */

(function() {
  'use strict';

  let currentQuestion = 1;
  const totalQuestions = 3;
  const answers = [];

  // 診断結果のパターン
  const diagnosisResults = {
    // 企業転職を強く推奨 (no, yes, no)
    transfer_strong: {
      type: '企業転職を強く推奨',
      description: 'あなたは企業転職によって、より充実したキャリアを築ける可能性が高いです。現在の職場環境に満足できておらず、新しい環境で自分の強みを活かしたいという意欲があります。',
      recommendations: [
        '自己分析とキャリアの棚卸しから始めましょう',
        '企業で活かせるスキルを明確にします',
        '転職活動の具体的なロードマップを作成します',
        '面接対策と応募書類の準備をサポートします'
      ]
    },
    // 企業転職を検討 (no, yes, yes) or (no, no, no)
    transfer_moderate: {
      type: '企業転職を検討してみましょう',
      description: 'キャリアの方向性について、一度じっくり考えてみることをお勧めします。企業転職という選択肢を知ることで、今後のキャリアの可能性が広がります。',
      recommendations: [
        'まずはキャリアの棚卸しと自己分析を行います',
        '企業と現場、それぞれのメリット・デメリットを整理します',
        '転職市場での自分の価値を確認します',
        '納得のいく選択ができるようサポートします'
      ]
    },
    // 現場でのキャリアアップ (yes, no, yes)
    current_job: {
      type: '現場でのキャリアアップを推奨',
      description: '現在の職場環境に満足しており、将来のキャリアも見えている状態です。医療現場でさらなる専門性を高めることで、充実したキャリアを築けるでしょう。',
      recommendations: [
        '専門資格の取得やスキルアップを目指しましょう',
        '現場でのリーダーシップを発揮する機会を増やします',
        '後輩育成や教育に携わることも検討してみてください',
        '定期的にキャリアの見直しを行うことも大切です'
      ]
    },
    // 自己分析が必要 (yes, yes, yes) or (yes, no, no) or (yes, yes, no)
    need_analysis: {
      type: 'まずは自己分析から始めましょう',
      description: 'キャリアの方向性について、明確なビジョンを持つことが大切です。自己分析を通じて、あなたの価値観や強み、理想の働き方を見つけていきましょう。',
      recommendations: [
        '自己分析とキャリアの棚卸しを行います',
        'あなたの価値観と理想の働き方を明確にします',
        '医療現場と企業、両方の可能性を検討します',
        '納得のいくキャリア選択をサポートします'
      ]
    }
  };

  // 初期化
  function init() {
    const optionButtons = document.querySelectorAll('.option-btn');
    const retryButton = document.getElementById('retryBtn');

    optionButtons.forEach(button => {
      button.addEventListener('click', handleAnswer);
    });

    if (retryButton) {
      retryButton.addEventListener('click', resetDiagnosis);
    }

    updateProgress();
  }

  // 回答処理
  function handleAnswer(e) {
    const button = e.currentTarget;
    const answer = button.dataset.answer;

    answers.push(answer);

    if (currentQuestion < totalQuestions) {
      // 次の質問へ
      showNextQuestion();
    } else {
      // 診断結果を表示
      showResult();
    }

    updateProgress();
  }

  // 次の質問を表示
  function showNextQuestion() {
    const currentQuestionEl = document.querySelector(`.diagnosis-question[data-question="${currentQuestion}"]`);
    currentQuestion++;
    const nextQuestionEl = document.querySelector(`.diagnosis-question[data-question="${currentQuestion}"]`);

    if (currentQuestionEl) {
      currentQuestionEl.classList.remove('active');
    }

    if (nextQuestionEl) {
      nextQuestionEl.classList.add('active');
    }
  }

  // 診断結果を表示
  function showResult() {
    const questionsContainer = document.getElementById('diagnosisQuestions');
    const resultContainer = document.getElementById('diagnosisResult');
    const resultContent = document.getElementById('resultContent');

    // 回答パターンから診断結果を判定
    const resultKey = getDiagnosisResult(answers);
    const result = diagnosisResults[resultKey];

    // 結果HTMLを生成
    const resultHTML = `
      <div class="result-type">${result.type}</div>
      <p class="result-description">${result.description}</p>
      <div class="result-recommendation">
        <h4>次のステップ</h4>
        <ul>
          ${result.recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
      </div>
    `;

    resultContent.innerHTML = resultHTML;

    // 質問を非表示、結果を表示
    questionsContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  }

  // 回答パターンから診断結果を判定
  function getDiagnosisResult(answers) {
    const pattern = answers.join(',');

    // パターンマッチング
    if (pattern === 'no,yes,no') {
      return 'transfer_strong';
    } else if (pattern === 'no,yes,yes' || pattern === 'no,no,no') {
      return 'transfer_moderate';
    } else if (pattern === 'yes,no,yes') {
      return 'current_job';
    } else {
      return 'need_analysis';
    }
  }

  // プログレスバーを更新
  function updateProgress() {
    const progressFill = document.getElementById('progressFill');
    const progressText = document.getElementById('progressText');

    const answeredCount = answers.length;
    const percentage = (answeredCount / totalQuestions) * 100;

    if (progressFill) {
      progressFill.style.width = `${percentage}%`;
    }

    if (progressText) {
      progressText.textContent = `${answeredCount} / ${totalQuestions} 質問完了`;
    }
  }

  // 診断をリセット
  function resetDiagnosis() {
    currentQuestion = 1;
    answers.length = 0;

    const questionsContainer = document.getElementById('diagnosisQuestions');
    const resultContainer = document.getElementById('diagnosisResult');
    const allQuestions = document.querySelectorAll('.diagnosis-question');

    // 全ての質問を非表示
    allQuestions.forEach(q => q.classList.remove('active'));

    // 最初の質問を表示
    const firstQuestion = document.querySelector('.diagnosis-question[data-question="1"]');
    if (firstQuestion) {
      firstQuestion.classList.add('active');
    }

    // 質問を表示、結果を非表示
    questionsContainer.style.display = 'block';
    resultContainer.style.display = 'none';

    updateProgress();

    // ページトップにスクロール
    const section = document.querySelector('.diagnosis-section');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // DOMが読み込まれたら初期化
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
