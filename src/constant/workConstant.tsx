import Typography from "@mui/material/Typography";

export const WORK_CONTENT_PORTFOLIO = {
  title: "Portfolio（当サイト）",
  image: { src: "/image/work/portfolio.jpg", alt: "portfolio" },
  description: (
    <Typography typography="Noto2">
      転職活動時に作成していたポートフォリオサイトを、
      デザインから見直し実装しなおしたものです。
      基本的にフロントエンドの知識のみで作成しており、
      レスポンシブデザインを採用しております。
      <br />
      <br />
      SIerではあまりコードを書いていませんでしたが、
      それでもガッツリ開発するベンチャーに転職できたのは、
      このようなサイトを作っていたことも要因の一つだと思っています。
      せっかく作ったので、アニメーション追加するなど今後も更新します。
    </Typography>
  ),
  link: "",
  modalDescription: {
    front: "JavaScript、TypeScript、React、Next.js、MaterialUI",
    back: "なし",
    infra: "AWSAmplify、CloudFront",
    source: {
      text: "https://github.com/bandoh36/next-ts-app",
      src: "https://github.com/bandoh36/next-ts-app",
    },
    other: (
      <Typography sx={{ m: 2 }} variant="body2" fontSize={13}>
        ・AWSAmplifyにて、GitHubへのpushを起点に自動ビルド・デプロイされるようにしています。
        <br />
        （元々GithubActionsで自動デプロイさせてましたが、こっちのが断然楽でした。）
        <br />
        <br />
        ・年齢や社会人歴は都度計算されるようにするなど、できるだけ保守手作業が発生しないようにしてます。
        <br />
        <br />
        ・StoryBookやJestなど、フロントエンドのテストツールも導入しています。
        <br />
        （興味があり入れているだけで、機能仕様上全く活かしてはいませんが、、）
        <br />
      </Typography>
    ),
  },
};

export const WORK_CONTENT_BLOG = {
  title: "Blog",
  image: { src: "/image/work/blog.jpg", alt: "blog" },
  description: (
    <Typography typography="Noto2">
      学んだことを発信できたらいいな、という思いで作成したブログです。
      EC2にて立てたWebサーバにWordpressを導入しています。
      アップロードした画像はS3に保存されるようにしており、
      Webサーバの負荷を考慮した設計になっております。
      <br />
      <br />
      いろいろやりたいことが多くまだサンプルの段階ですが、
      学習した内容や作成したアプリケーションなどなど、
      少しずつ更新していこう、と半年くらい思っています。
    </Typography>
  ),
  link: "https://akisute36.com/",
  modalDescription: {
    front: "なし",
    back: "なし（Wordpress）",
    infra: "EC2、S3、CloudFront",
    source: {
      text: "なし",
      src: "",
    },
    other: (
      <Typography sx={{ m: 2 }} variant="body2" fontSize={13}>
        ・AWSでメジャーな機能であるEC2、S3の学習にちょうど良いと思い構築しました。
        <br />
        　記事閲覧サイトにCMSは持ってこいなので、活用していきたいです。
      </Typography>
    ),
  },
};
