### 背景

- npm によってパッケージが増えた
- ユーザー（のブラウザ）全てダウンロードにさせるのは重い
- そこで Node.js が標準仕様（`ECMASCript`）に先んじて`require('mudlue_name')` のような形でモジュール分割できる`CommonJS`というスタイルを採用

### SSR と Node.js

- Web 開発において Node.js の果たす役割の一つが SSR
- SSR は初期表示で有利
- これはサーバーサイドから HTML を返す話
- システムが複雑だと（マイクロサービスアーキテクチャなど）、API の設計とフロントの設計が一致するわけではないので、フロントエンドのために複数の API を束ねる必要がある。これが BFF
- Next.js の getServerSideProps とかはそうやな
