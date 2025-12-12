# デプロイ手順（完全無料）

## 方法1: Surge.sh（最も簡単・推奨）

### 初回セットアップ
```bash
# Node.jsがインストールされている必要があります
npm install --global surge
```

### デプロイ
```bash
cd C:\Users\ryuya\Downloads\medcareer-coach
surge
```

初回のみメールアドレスとパスワードを入力します。
その後、自動的にURLが発行されます（例：`https://medcareer-coach.surge.sh`）

### カスタムドメイン名を指定する場合
```bash
surge --domain medcareer-coach.surge.sh
```

### 更新する場合
同じコマンドを再実行するだけ：
```bash
surge
```

---

## 方法2: GitHub Pages

### 1. Gitリポジトリ作成
```bash
cd C:\Users\ryuya\Downloads\medcareer-coach
git init
git add .
git commit -m "Initial commit: Add MedCareerCoach homepage"
```

### 2. GitHubでリポジトリ作成
1. https://github.com/new にアクセス
2. リポジトリ名: `medcareer-coach`
3. Public を選択
4. 「Create repository」をクリック

### 3. リモートリポジトリに接続してプッシュ
```bash
git remote add origin https://github.com/yourusername/medcareer-coach.git
git branch -M main
git push -u origin main
```

### 4. GitHub Pagesを有効化
1. GitHubリポジトリページで「Settings」をクリック
2. 左メニューから「Pages」を選択
3. Source: `main` ブランチを選択
4. 「Save」をクリック
5. 数分後、`https://yourusername.github.io/medcareer-coach/` でアクセス可能

---

## 方法3: Vercel

### 1. Vercel CLIをインストール
```bash
npm install --global vercel
```

### 2. デプロイ
```bash
cd C:\Users\ryuya\Downloads\medcareer-coach
vercel
```

初回のみGitHubアカウントでログインします。
その後、自動的にURLが発行されます。

### 3. 本番環境にデプロイ
```bash
vercel --prod
```

---

## 方法4: Cloudflare Pages

### Web UIを使用
1. https://pages.cloudflare.com/ にアクセス
2. GitHubアカウントでログイン
3. 「Create a project」をクリック
4. GitHubリポジトリを選択
5. ビルド設定（そのままでOK）
6. 「Save and Deploy」をクリック

数分後、`https://medcareer-coach.pages.dev` などのURLでアクセス可能

---

## 方法5: Render

### 1. Renderにアクセス
https://render.com/ にアクセスし、GitHubアカウントでログイン

### 2. 新しいStatic Siteを作成
1. 「New」→「Static Site」をクリック
2. GitHubリポジトリを選択
3. 設定：
   - Name: `medcareer-coach`
   - Build Command: （空欄）
   - Publish Directory: `.`（カレントディレクトリ）
4. 「Create Static Site」をクリック

数分後、`https://medcareer-coach.onrender.com` などのURLでアクセス可能

---

## おすすめの選択基準

| サービス | 簡単さ | 速度 | カスタムドメイン | おすすめ度 |
|---------|-------|------|----------------|-----------|
| **Surge.sh** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 最も簡単！ |
| **GitHub Pages** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | 最も安定 |
| **Vercel** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 高機能 |
| **Cloudflare Pages** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 最速 |
| **Render** | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | 多機能 |

## 初心者向け：Surge.shが最もおすすめ

コマンド2つだけで完了：
```bash
npm install --global surge
surge
```

## 本番運用向け：GitHub Pagesが最もおすすめ

- 安定性が高い
- GitHubで管理できる
- 無料で独自ドメイン設定可能
- 多くの企業が利用

---

## トラブルシューティング

### Node.jsがインストールされていない場合

1. https://nodejs.org/ にアクセス
2. LTS版をダウンロードしてインストール
3. コマンドプロンプトを再起動
4. `node -v` でバージョン確認

### Surge.shでエラーが出る場合

```bash
# キャッシュをクリア
npm cache clean --force

# Surgeを再インストール
npm uninstall --global surge
npm install --global surge
```

### GitHub Pagesが表示されない場合

- 5〜10分待つ（初回デプロイは時間がかかる）
- Settings → Pagesで「Your site is live at...」が表示されているか確認
- ブラウザのキャッシュをクリアして再読み込み
