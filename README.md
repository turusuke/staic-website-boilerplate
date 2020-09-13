# static-website-boilerplate

## Node.js

> = 12.18.3

- `node.js` を指定のバージョンで実行してもらうために `.node-version` ファイルを追加しています
- Mac であれば `nodenv`, Windows であれば `nodist` で node.js のバージョンを管理することで `.node-version` ファイルを見て、利用する `node.js` のバージョン切り替えてくれます

## Install

```
npm install --no-save
```

##

- ESLint
  - JavaScript ファイルのコード品質の担保のため追加
- PostCSS
  - ビルドした CSS の加工に利用
  - 例： autoprefixer でベンダープレフィックスの追加
- PostHTML
  - `<include>` タグを使ってパーツのコンポーネント化に利用
