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
      type: '企業転職推奨タイプ',
      description: 'あなたは企業転職によって、より充実したキャリアを築ける可能性があります。'
    },
    // 企業転職を検討 (no, yes, yes) or (no, no, no)
    transfer_moderate: {
      type: '企業転職検討タイプ',
      description: 'あなたは企業転職を視野に入れて、キャリアを考え直すべき状態である可能性があります。'
    },
    // 現場でのキャリアアップ (yes, no, yes)
    current_job: {
      type: '現場キャリアアップタイプ',
      description: 'あなたは現在の医療現場でさらなるキャリアアップを目指せる状態である可能性があります。'
    },
    // 自己分析が必要 (yes, yes, yes) or (yes, no, no) or (yes, yes, no)
    need_analysis: {
      type: '自己分析推奨タイプ',
      description: 'あなたはまず自己分析を通じて、キャリアの方向性を明確にすべき状態である可能性があります。'
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
      <div class="result-type">${result.type}！</div>
      <p class="result-description">${result.description}</p>
      <p class="result-cta">お気軽に無料相談を活用してみてください！</p>
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
