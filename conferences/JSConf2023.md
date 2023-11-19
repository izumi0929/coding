## There and back again: A proposal's tail
https://jsconf.jp/2023/talk/yulia-startsev-1/
@Yulia
SpiderMonkey(Mozilla)の人
FirefoxのJSのエンジン(C++)

プログラミングは思考の道具としての表記法（Notion）

TC39 ecma
ToObjectの定義などがみれる

- ステージ0
思いついたアイディアで企画書を書く
```
const array = [1,2,3]
array.filter(i => i >= 2)
[1] or [2,3] ??
```
ドアのpull/push問題と同じ考えで

- ステージ1
チャンピオンが委員会に提出
文献分析 under_scoreの使われ具合
reject -> filterReject
groupBy (`[[1], [[2,3]]`)

- ステージ2
著者とチャンピオンが発展・コメント対応

- ステージ3
ブラウザが実装を開始する
大幅に変更されることもある→ステージ２に降格

let O ? toObject
Oは今回はArrayのこと
ecma
ToObjectの定義などがみれる
? = ReturnIfAbrupt

チュートリアルもある?

- ステージ４
完成

## LLM全盛時代の開発
@baseballyama
1. GitHub Copilotの話
const, function, const/function混在
→ 空気を読んでくれる。混ざってると両方サジェストする。（サジェスト精度が落ちる）
→ 統一しよう。これまで以上に重要。外在性認知不可UP（なんでconst?なんでfunction?）
→ ESLint, AIのレビュープロセス導入、TODOを貼っておいてもサジェスト精度が上がる

2. AIツールによる効率化
- AIレビューツール。今のところ一般的な指摘のみ...
PR-Agent, AI-based PR reviewer
- Figma to Code
単にHTML/CSSだけ出されても困る

自社のコンテキストに準じたレビューやコード生成をして欲しい
→AGI作るorコンテキストを与える

AIは優秀な新人
プロセスやコンテキストを教える必要がある

レビューの理想と現実の差をうめるには
レビュープロセスを言語化、読ませる

FigmaToCode
デザインシステムを読ませる

どこでAI使うか？
静的解析→Copilot→LLMで自作

OpenAIやCopilotは成長速度が速いのでなるべく自作しないほうがいい
どうしても作る必要がある場合
期待値との差分（私たちの暗黙のコンテクスト）をひたすら埋める
ログを取って改善する（継続的改善）
その他
- プロンプトエンジニアリング
- Assistants API
テストも行う
- tempertureを0にすると安定する(創造性は要らない)



## BUILD AND PUBLISH IN 2023
https://jsconf.jp/2023/talk/mizchi-1/
@mizch

- バンドラ以前
モジュールがない、ブロッキングが発生
- Node.js, CommonJS
構文ではなく、関数。動的にrequireされる。静的にはわからない
EMSのファイルスコープが解決↑だが、RTT(round trip time)問題がある
今だったら解決できる？
modulepreload, 再帰的にいける？
ImportMap
HTTP Import
先読み整ってきたがRTT解決せず。


### ツールチェイン
browserify
webpack(バンドル・チャンク)
- なにをデフォルトにしたらいいかわからない（webpack.config.js）によって動作が別物
- CP/FileIOへの負荷激しい
- ESM対応が後

Rollup
ツリーシェイク（オプティマイズをバンドル層で行う）

Vite
inde.htmlを入力とする
No Config
開発時はバンドルしない
際ビルドが高速・低負荷
その分開発と本番の差分が大きい

Turborepo
ワークスペース環境

まとめ
Zero-configすすんでる

### SSR
Next.js SSR/CSRのハイブリッド
発明
- Filesystem Routing
- DataLoader
- RSC

Qwik（Viteベースの）
- SSRのみ（クリックして初めてハイドレーションする）
ロマンの塊

結論
NextがAPI設計のオピニオンリーダー
Next以外のRSC導入時に混乱するだろう
Zero-Configはその当時のベストプラクティス。段々とトレンドから離れていく
自分が本当に必要なものは手を動かさないとわからない。
動かさないとどんな不満があるか？どう解決されるのかがわからない。


## フロントエンドリアーキテクチャとスキルトランスファー
https://jsconf.jp/2023/talk/wakamsha-1/

@wakamsha
テックサポート（横断的な役割）

前提
- Railsのアプリケーション基盤からFE関連を分離する(FEリポジトリを新設する)
- 必要なスキル（ライブラリの使い方とかだけではなく、どういう設計がいいのか吟味する力など）が不足している。現場が力をつける必要あり

支援したこと
- ツールやライブラリ選定の助言
- アーキテクチャの提言
など

重点的に取り組んだこと
- 丸暗記を排除
    - 丸暗記したものは丸忘れする
    - 確信さえ掴んでおけば実装方針は導き出せる
- スキルレベルに応じて段階的に導入（一気に全部やろうとするとパニックになる）
    - まずはuseState, useReducer
    - コンポーネントの配置などに気を付ける
    - GraphQL Fragmentは課題に当たってからどうにゅう
- CSS苦手意識を払拭する
    - 書くとなる機能に絞る(flexboxに絞る。Gridはあとから)
    - 例を使って説明（flexboxは配列、Gridは連想配列。Elementは家屋・paddingが庭、marginは道路）
- ペアプロで成功体験を積んでもらう
    - 即時反映は楽しい
    - 自分で改善してもらう
- 自動化への投資
    - CI/CDで大事なのは開発効率を「上げる」ものではなくて「下げない」ようにするもの
    - Renovate
        - 毎週 minor/patchはCI/CD通れば自動でマージ
        - これができるようにCI/CDをがっつりやる
- ドキュメンテーション
    - 新人が一人で環境構築できるように。
    - テンプレート用意すると良い
    - 意思決定の過程も残す（あとから入った人が「なんでこんな設計になってるんだ！」という摩擦の防止）
    - JSDoc書こう。GitHub Copilotに書いてもらう。
    - 数分使ったtype hintとdoc stringで他人の数日分が生まれる

支援を終えて..
- 技術に対する探究心は必要
    - ユーザーに価値を届けたい、という思いだけではやっていけない
- 反省点
    - キャッチアップ用のリポジトリあったほうがよかった

質問
- どうやってドキュメントを書かせるか
    - まずコードレビューを必須に
    - 長期的に見て、育成していくしかない


## Next.js App Routerのクライアントサイドキャッシュの複雑さ
https://jsconf.jp/2023/talk/akfm-sato-1/
@akfm_sato

Router Cacheの複雑さ

- App Routerとは
    - Server first
    - 積極的なキャッシュ（今４種ある）
        - Request Memorization
            リクエストごとに
        - Data Cache
            - fetchのレスポンス
            - 複数リクエスト横断
        - Full Route Cache
            - レンダリング結果
            - 複数リクエスト横断
        - Router Cache
            - Linkなどでprefetchした内容

- App Routerナビゲーション
    - 積極的にprefetchを行いcacheする
    - 必要なcacheがない場合はfetchする
    - Static(基本：ISR・SSG的)/dynamic(SSR)の２つrenderingがある

- chacheの分類
    - auto, full ,temoraryで挙動(expire)が異なる
    - 時間軸によってstatus(fresh, stale, expired)が変わる
- ライフサイクル
    - static/dynamic
    - Linkコンポーネントのprefetch
    - 取得からの時間
    - 最後に評価した時刻?

- purgeも可能

- CacheがあるとIntercepting routes(画面からの遷移と直だたきで挙動が変わる)が機能しない

- App Routerのいいところ
    - シンプルになったところ
        - データ取得とレンダリングが直感的
        - Nested Layout
            - 遷移時に失われていたstateが保持できる

- Pages Routerはいずれ消えるかも...?
    - 導入せずとも追っておいた方がよさそう


## Next.js App RouterでのMPAフロントエンド刷新
https://jsconf.jp/2023/talk/hajime-mugishima-1/
@mugishima_uno

### 刷新アーキテクチャ

React Aria

刷新において、キャッシュはなるべくしない
ほぼ全てのページで認証/認可が前提
DynamicFunctionでキャッシュ利用は基本的に回避できる
が、上書きもできてしまう
明示的に `dynamic = "force-dynamic"`


### Server Component vs Client Component
"use client"はどこにかくか？
→ Client Componentの境界線

どっちにも使いたいコンポーネントはどうするか?
ButtonWrapperなど
解決：use clientつけつつハンドラはoptionalにする

### Storybook
ServerComponentは未対応
今のところContainer/Presentatinalにする(Quramyさん記事)
Storybookで対応予定ではある

### テスト
testing-libraryは未対応
Expreimental test mode for Playwrightがある。
必要なAPIはモックする必要
Integration(ほぼe2e)で担保している
QAチームと協力して効率の良いテストケース

### Server Actions
RPCに近い
Progressive Enchancementサポートしている

採用した理由
- fetch()しているServerComponentsをリフレッシュするほうほうが
ServerActions + revalidate (or ページ全てrefreshしなきゃいけない)

Custom Invocation
formを使わずClientComponentでAPIたたける?
JSでServer Actionsトリガーしたいとき
エラーハンドリング。クライアントではthrowできないと考えて良い
formのactionやbuttonのformActionで使うとPrgressiveEnhancementができる

MPAとの相性は良さそう
- どうしても動きが必要ならClient Componentを用いる
- 今までのMPAとのメンタルモデルと近い
- Undocumentedな挙動が多い
- Next・Reactのコードを見る（create-next-appは頻繁に）


## 書いたJSがそのままブラウザで動く未来へ
https://jsconf.jp/2023/talk/sosuke-suzuki-1/
@__sosukesuzuki

モダンフロントエンドフレームワーク
→(pureな)JSを直接書いていない

普通のエンジニアはJSX/TSを使う
宣言的に書けるから

JSをコンパイルターゲットとして使っている理由..?

JSのビルドステップ
- TS → JS(tscとか)
- JSX → JS(tscとか)
    - Reactのコンポーネント書くのが多いがVueとかにも使える
- ダウンレベルコンパイル(tscとか)
    - optional chain, atとかの便利な機能
    - フロントエンドはランタイムが選べないので、古い構文に変換する必要がある
- モジュールバンドル(Viteとか)
- ミニファイ(esbuildとか)
    - 変数名短縮、空白除去とか

これらが取り除かれればそのまま記述できるはず
TS → JS
- TypeAnnotationsを許容する
- ランタイムでは型チェックしない
- あんまり進捗していない...

JSX → JS
- TC39に提案はまだない
- 議論はある

ダウンレベルコンパイル
- 多くの人がエバーグリーンブラウザ（勝手にアップデート）を使っているのでそもそも不要?

モジュールバンドル
- importのたびにfetchのオーバヘッド問題

ミニファイ
- Binary ASTプロポーザルはあるが進捗だめ

希望がない

そもそもJSをブラウザで動かす必要がなくなってきている
（ビルドステップを構成するソフトウェアがサステナブルになっている）



## BunはNode.jsに取って代わるのか?Lambdaで検証してみた
https://jsconf.jp/2023/talk/masaki-suzuki-1/
@makky12

Bun
fast JS bundler
とにかく速い！

Node.jsはオワコン？
ランタイムで（プロダクトワークロードで）うごかさないとわからないでしょ

LambdaでDynamoDBから１データ、API Gateway経由で取得

結果
若干Nodeの方がはやい
AWS環境の構成さもあるかも(arm64, カスタムランタイム必須なので)

Bunで
困った点
- Lambdaレイヤーが最新で使えない
- ビルドファイルが動かない
嬉しい点
- インストールやテストが速い！
- All-in-One(トランスパイラも！)
- LambdaをTSで動かせる

ユースケース
- ローカルで作業（特にテスト）
- そのままデプロイ（マネジメントコンソールでのソース可読性）
- SSR速い？

本番環境では速いが今後に期待


## Storybook駆動開発:UI開発の再現性と効率化
https://jsconf.jp/2023/talk/workshop-kaonavi/

- Storybook駆動開発とは
不確実なことが多いなかで価値を届けなければいけない。
見える景色を変えずにシステムを変更するのにStroybookを使う。

- 効率性の向上
    めっちゃむずい。(複雑＋重い)
    - めちゃ複雑
        - 課題自体が複雑なので（複雑性をシステム側が肩代わりする）)
        - BEはドメイン駆動で抽象化
        - FEはAtomicDesignなどで複雑性をなるべく排除しているが.どうしてもヤマタノオロチ複雑なコンポーネントが発生する
        → Story単位でカタログ化
            - ArgsやMSWで複雑な状態を分けていくことができる
            - Storyごとに書くことでどういったドメインかがわかる(GoodFirstIssue)
            - スコープの範囲が限定的
    - めちゃ重い
        - でかモノリシックだと実際に動かすの大変
        - プロトタイプをすぐに見せられる
    まとめ
    - 複雑なドメインと向き合える
    - キャッチアップや意思疎通に使える

- 再現性
    - 破壊的な変更を行いたい場合行いたいvs既に使っている機能（価値）を壊したくない
    - E2Eやインテグレーションは準備やメンテがハード
    → StoryBookはplay()関数が使える
    Jest + Testing Libraryとも連携できるので、CIで回せる
    文言のあるかどうかだけのような簡単なテストでもOK

    まとめ
    - 日常的なリファクタもできる
    - いろんなパターン（マトリクス）をテストするのに便利


## デザインシステム仕切り直し
https://jsconf.jp/2023/talk/workshop-wantedly/

Wantedlyでのデザインシステム
共通の考え方とツールセット

考え方
- Surface
全てのコンポーネントのベース
- TouchArea
見えないがクリック可能な領域(マージンを取らずに並べられる)

デザイナーがUIデザインするのと同じ考え方で実装できる

目的
- 見た目と振る舞いの一貫性
    - 新しいWantedlyのサービスを出す際にWantedlyと認識してもらえる
- ユーザビリティの担保
    - 画面によってばらばらだとユーザーの学習コストがたかい
- デザインアウトプットの効率化
    - 細かい造形を気にしなくてすむ
- 開発、コミュニケーション、メンテ効率化

デザインシステムのこれまで
- 2018年：コンポーネントセットが誕生
- 2019年：デザインシステムを使ったプロダクト開発
- 2020年：刷新プロジェクトで急拡大

この裏での２回失敗..
ナイーブな実装だった
SurfaceやTouchAreaの概念がなかった
(e.g. ボタン二つ並べた時にMarginを取っていた)
→ React再実装。
上記は解決したが、サードパーティライブラリに強く依存してたりとかした。
→Surfaceを簡単に作れるような関数を作成

学び
デザイナーの思想を掴む必要がある。見た目(Figma)だけ再現しても意味ない。
デザインシステムのキックオフをするべきだった。共通認識を持つべきだった。
共通の考え方が土台にあった。はずだったがそれを見ずにFigmaだけなぞってしまった。

これから
Design System Guild
いままでは
- 局所的散発的に議論がされていたがまとまりがなかった
    - メインのエンジニアは理解できていたが参加していない人やモバイルの人が理解できない
- 実装者が退職済み
だったので、組織として改善できるようにGuildを組んだ
