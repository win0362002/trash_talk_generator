# 幹話產生器

一個使用 node.js + express + handlebars 完成的黑色幽默 Web App

## 功能描述 (features)

- 使用者可以在工程師、設計師、或創業家中選擇一個對象（三選一)
- 使用者按下【產生幹話】後，旁邊的 textbox 就會出現一句幹話
- 有什麼幹話請自己欣賞，謝謝

## 環境建置與需求 (prerequisites)

- Node.js v10.15.0
- Express v4.17.1
- Express-handlebars v5.2.0
- nodemon v2.0.6

## 安裝與執行步驟 (installation and execution)

- 使用 Git(Mac OS) 或 Git bash(Windows)

1. 開啟終端機使用 git clone 指令複製專案資料夾到本地端
   ```
   git clone https://github.com/win0362002/trash_talk_generator.git
   ```
2. 進入專案資料夾
   ```
   cd trash_talk_generator
   ```
3. 執行 npm install 安裝所需 package
   ```
   npm install
   ```
4. 安裝 nodemon 套件

   ```
   npm install -g nodemon
   ```

5. 使用以下指令即可執行
   ```
   npm run dev
   ```
6. 在終端機上看到以下資訊即代表伺服器順利啟動

   ```
   Start and Listen on localhost:3000
   ```

7. 在瀏覽器的 URL 列輸入 http://localhost:3000 即可進入網頁
