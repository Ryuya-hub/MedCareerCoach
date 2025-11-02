# MedCareerCoach - 医療従事者向けキャリアコーチング

医療従事者（看護師・PT・OT・ST）向けの企業転職支援キャリアコーチングサービスのホームページです。

## 📋 プロジェクト概要

このプロジェクトは、完全無料の技術スタックで構築された、医療従事者向けキャリアコーチングサービスの集客・問い合わせ獲得を目的としたホームページです。

### 主要ゴール

- 無料相談予約の獲得
- サービス内容の明確な伝達
- 信頼性と専門性の訴求

## 🛠 技術構成

### 使用技術

- **言語**: HTML5, CSS3, Vanilla JavaScript
- **ホスティング**: GitHub Pages（無料）
- **フォーム**: Googleフォーム埋め込み
- **フォント**: Google Fonts（Inter, Noto Sans JP）
- **アイコン**: Font Awesome 6.x（CDN）
- **画像**: プレースホルダー（本番環境では実画像に差し替え）

### 外部CDN

- Google Fonts: `https://fonts.googleapis.com`
- Font Awesome: `https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css`

## 📁 ファイル構成

```
medcareer-coach/
├── index.html              # トップページ（メインページ）
├── terms.html              # 利用規約ページ
├── privacy.html            # プライバシーポリシーページ
├── css/
│   └── styles.css          # メインスタイルシート
├── js/
│   ├── hamburger.js        # ハンバーガーメニュー機能
│   ├── smooth-scroll.js    # スムーズスクロール機能
│   ├── faq.js              # FAQアコーディオン機能
│   └── modal.js            # モーダル機能
├── images/
│   └── .gitkeep            # 画像ファイル配置用（実画像は後で追加）
├── README.md               # このファイル
└── .gitignore              # Git除外設定
```

## 🎨 デザイン

### カラースキーム

- **プライマリー**: `#1A3A52`（ダークブルー）
- **アクセント**: `#00A9A5`（ティール）
- **背景**: `#F5F7FA`（ライトグレー）
- **テキスト**: `#333333`（ダークグレー）

### レスポンシブ対応

- デスクトップ: 1024px以上
- タブレット: 768px〜1023px
- モバイル: 767px以下

## 🚀 ローカルでのプレビュー方法

### 方法1: Live Server（VS Code拡張機能）

1. VS Codeで`medcareer-coach`フォルダを開く
2. `index.html`を右クリック → "Open with Live Server"
3. ブラウザが自動的に開きます

### 方法2: Python（標準サーバー）

```bash
cd medcareer-coach
python -m http.server 8000
```

ブラウザで `http://localhost:8000` を開く

### 方法3: Node.js（http-server）

```bash
cd medcareer-coach
npx http-server -p 8000
```

ブラウザで `http://localhost:8000` を開く

## 🌐 メンバー間でのプレビュー共有方法

### 方法1: Netlify Drop（推奨）

1. https://app.netlify.com/drop にアクセス
2. `medcareer-coach`フォルダをドラッグ&ドロップ
3. 自動的にデプロイされ、URLが発行される
4. URLをメンバーに共有

### 方法2: Vercel

1. https://vercel.com/ にアクセス
2. GitHubアカウントでログイン
3. 「New Project」→ファイルをアップロード
4. 自動的にデプロイされ、URLが発行される

## 📝 Googleフォームの設定

現在、`index.html`の申し込みフォームセクションにはプレースホルダーが表示されています。実際のGoogleフォームを設定するには：

1. Googleフォームで新規フォームを作成
2. 以下の項目を追加：
   - お名前（必須・記述式）
   - メールアドレス（必須・記述式）
   - 電話番号（任意・記述式）
   - 現在の職種（必須・選択式）
   - 希望面談日時（第1〜3希望）
   - 相談内容（任意・段落）
   - 利用規約への同意（必須・チェックボックス）
3. フォームの「送信」→「< >」（埋め込みコード）をクリック
4. iframeコードをコピー
5. `index.html`の該当部分（`#contact`セクション内）のiframeを置き換え

## 🖼 画像の準備

現在、全ての画像はプレースホルダー（via.placeholder.com）を使用しています。本番環境では、以下の画像を準備して`images/`フォルダに配置してください：

- `hero-image.jpg` - ヒーローセクションの画像
- `staff-murata.jpg` - 村田氏の写真
- `staff-hayashi.jpg` - 林氏の写真
- `program-phase1.jpg` - プログラム1ヶ月目の画像
- `program-phase2.jpg` - プログラム2ヶ月目の画像
- `program-phase3.jpg` - プログラム3ヶ月目の画像
- `industry-map-preview.jpg` - 業界マッププレビュー
- `industry-map-full.jpg` - 業界マップフル版
- `testimonial-1.jpg` - お客様の声1
- `testimonial-2.jpg` - お客様の声2
- `testimonial-3.jpg` - お客様の声3

画像を配置した後、`index.html`内の該当する`src`属性を更新してください。

## 🚢 GitHub Pagesへのデプロイ

### 初回デプロイ手順

```bash
# 1. Gitリポジトリを初期化
cd medcareer-coach
git init

# 2. ファイルをステージング
git add .

# 3. コミット
git commit -m "Initial commit: Add MedCareerCoach homepage"

# 4. GitHubでリポジトリを作成後、リモートリポジトリを追加
git remote add origin https://github.com/yourusername/medcareer-coach.git

# 5. プッシュ
git branch -M main
git push -u origin main
```

### GitHub Pages設定

1. GitHubリポジトリページで「Settings」をクリック
2. 左メニューから「Pages」を選択
3. Source: `main`ブランチを選択
4. 「Save」をクリック
5. 数分後、`https://yourusername.github.io/medcareer-coach/` でアクセス可能

## ✅ 本番環境へのチェックリスト

- [ ] Googleフォームを作成し、埋め込みコードを設定
- [ ] 全ての画像を実画像に置き換え
- [ ] favicon.icoを作成・配置
- [ ] 画像を最適化（WebP形式推奨）
- [ ] メタタグ（description, keywords）を確認
- [ ] 全てのリンクが正しく動作するか確認
- [ ] モバイルでの表示確認
- [ ] ページ読み込み速度をチェック
- [ ] 利用規約・プライバシーポリシーの内容を法的に確認
- [ ] お問い合わせ先メールアドレスを実際のアドレスに変更

## 📞 お問い合わせ

ご質問やサポートが必要な場合は、以下までご連絡ください：

- メール: contact@medcareercoach.example.com

## 📄 ライセンス

このプロジェクトは、MedCareerCoachの所有物です。無断転載・複製を禁じます。

---

**MedCareerCoach** - 医療従事者のキャリアを全力でサポートします
