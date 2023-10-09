import ProfileImg from "@image/profile.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";

// プロフィール内容要編集
export const ProfileContents = {
  title: "プロフィールああaaa",
  name: "坂東 俊亮 ( Shunsuke Bando )",
  body1: "1996年3月5日生まれ   28歳   社会人5年目",
  body2: "千葉大学理学部物理学科卒業後、保険系SIerに就職。",
  body3: "保険申込・加入査定システムの開発チームにて、バックエンド開発に従事。",
  body4: "スキルアップできる環境を目指し、転職活動中。",
  body5: "高校・大学ではラグビー部に所属。最近またジム通いを始めました。",
  mail: "mail：bandoh4321@gmail.com",
  github: "https://github.com/bandoh36",
  image: ProfileImg,
  imageLabel: "Profile",
};

export const HistoryCard = [
  {
    title: "現職での業務内容",
    explain:
      "アプリケーション開発チームの一員として、保険申込・加入査定システムの開発を担当しております。",
  },
  {
    title: "転職を決意した理由",
    explain:
      "日々の業務の中で、「よりスキルを身に着けることができる環境に身を置きたい」という思いが強くなり、転職を決意しました。",
  },
  {
    title: "個人での学習",
    explain:
      "理想のエンジニアになるため、特に業務で使用したことのないフロントエンド領域やAWSでのインフラ環境構築を中心に学習を進めております。",
  },
];

export const HistoryContents1 = () => {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography id="modal-modal-title1" variant="h5" fontWeight={"bold"}>
        現職での業務内容
      </Typography>
      <Typography
        sx={{ mt: 3, mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      >
        所属チームについて
      </Typography>
      <Typography sx={{ mb: 3 }} variant="body2" fontSize={13}>
        アプリケーション開発チームに所属し、グループ外の企業や保険申込者も
        <br />
        利用する保険申込／加入査定システムの開発と運用保守を担当。
      </Typography>
      <Typography
        sx={{ mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      >
        経験した業務
      </Typography>
      <Typography sx={{ mb: 0 }} variant="subtitle2" fontWeight={"bold"}>
        1.上流行程から下流行程までの開発
      </Typography>
      <Typography sx={{ mb: 2 }} variant="body2" fontSize={13}>
        保険加入査定システム開発の中で、基本設計から実装、テストを担当。
        <br />
        実装ではJava、Springをベースにした独自フレームワークを利用した。
        <br />
        また一部機能では主担当として、要件定義・システム方式設計から参画。
        <br />
        顧客への要件ヒアリング結果をもとに、システム・運用設計を行った。
      </Typography>
      <Typography sx={{ mb: 0 }} variant="subtitle2" fontWeight={"bold"}>
        2.リーダー業務
      </Typography>
      <Typography sx={{ mb: 2 }} variant="body2" fontSize={13}>
        追加導入団体に向けた開発にて、システム開発チームのリーダーを経験。
        <br />
        各フェーズでの成果物／計画策定やスケジュール管理、成果物レビューや
        <br />
        顧客報告を担当した。
      </Typography>
      <Typography sx={{ mb: 0 }} variant="subtitle2" fontWeight={"bold"}>
        3.DBメジャーバージョンアップ
      </Typography>
      <Typography sx={{ mb: 3 }} variant="body2" fontSize={13}>
        自ら手を挙げMariaDBのメジャーバージョンアップ対応を担当。
        <br />
        影響範囲と対応内容の調査を行うため、インフラ部門・保守ベンダーへ積極的に
        <br />
        コミュニケーションをとった。また業務では使用経験の無かったAWSを独学し、
        <br />
        テスト環境の構築を行った。
      </Typography>
      <Typography sx={{ mb: 0 }} variant="subtitle2" fontWeight={"bold"}>
        4.運用保守
      </Typography>
      <Typography sx={{ mb: 3 }} variant="body2" fontSize={13}>
        保険申込・加入査定システムの運用保守チームで実作業担当とリーダーを経験。
        <br />
        臨時業務ではシステムを使うユーザーからの照会対応を担当し、システムについて
        <br />
        かみ砕いた説明と丁寧な話し方を身に着けた。
        <br />
        現在は運用保守チームでリーダーを務めており、定例業務の効率的な運営を目指し
        <br />
        タスク管理や資料整備方法の改善を行っている。
      </Typography>
      <Typography
        sx={{ mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      >
        実績
      </Typography>
      <Typography sx={{ mb: 0 }} variant="subtitle2" fontWeight={"bold"}>
        1.証明書バージョンアップ対応案件を円滑に完遂
      </Typography>
      <Typography sx={{ mb: 2 }} variant="body2" fontSize={13}>
        上流工程からかかわったクライアント証明書バージョンアップ対応では、
        <br />
        約1,000ユーザーにて証明書の再取得が必要となった。
        <br />
        ベンダーの仕様変更に対してできるだけユーザー操作手順の変更箇所が
        <br />
        少なくなるよう設計し、事前アナウンスなどスケジュール計画段階から
        <br />
        密に顧客調整を行うことで、大きな顧客影響を与えることなく完遂した。
      </Typography>
      <Typography sx={{ mb: 0 }} variant="subtitle2" fontWeight={"bold"}>
        2.インフラ部門との窓口担当としてトラブルの未然防止を実施
      </Typography>
      <Typography sx={{ mb: 2 }} variant="body2" fontSize={13}>
        過去案件の対応実績から、開発でのアプリ／インフラ部門それぞれの
        <br />
        役割を理解した。開発では属人化していた本番切替手順のマニュアルを
        <br />
        作成しレビュアーとして確認することで、切替ミスのリスクを軽減した。
      </Typography>
      <Typography sx={{ mb: 0 }} variant="subtitle2" fontWeight={"bold"}>
        3.運用保守体制の整備
      </Typography>
      <Typography sx={{ mb: 2 }} variant="body2" fontSize={13}>
        システム有識者として保守チームのリーダーを担当しており、
        <br />
        入れ替わりの激しい体制に対応するため、進捗報告フォーマットの変更や
        <br />
        各手順書の整備を実施した。
      </Typography>
    </Box>
  );
};

export const HistoryContents2 = () => {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography id="modal-modal-title2" variant="h5" fontWeight={"bold"}>
        転職を決意
      </Typography>
      <Typography
        sx={{ mt: 3, mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      ></Typography>
      <Typography
        sx={{ mb: 1 }}
        variant="body2"
        fontSize={13}
        fontWeight={"bold"}
      >
        「エンジニアとして常に学び続けていきたい」
        <br />
        「その学んだ知識をシステム開発に活かしたい」
      </Typography>
      <Typography sx={{ mb: 5 }} variant="body2" fontSize={13}>
        日々の業務の中で、この2つの思いが強くなっていきました。
        <br />
        将来フルスタックに活躍できるエンジニアを目指し、
        <br />
        実現できる環境を目指して転職を決意しました。
      </Typography>
      <Typography
        sx={{ mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      >
        開発経験を積んでスキルアップしたい
      </Typography>
      <Typography sx={{ mb: 5 }} variant="body2" fontSize={13}>
        業務での実開発としてはJavaでの実装経験がありますが、
        <br />
        現在はマネジメント業務がメインとなっております。
        <br />
        <br />
        フロント・バックエンドに精通したエンジニアになりたいという思いに加え、
        <br />
        このままではスペシャリスト／マネジメントというキャリアの選択肢が
        <br />
        狭まってしまうという危機感も感じています。
        <br />
        <br />
        そのため、まずは開発経験を積みスキルを身に付けたいと考えています。
      </Typography>
      {/* <Typography
        sx={{ mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      >
        フロントエンドの知識も身に着け活かしたい
      </Typography>
      <Typography sx={{ mb: 5 }} variant="body2" fontSize={13}>
        一般的なWebサイトを利用する中で、ユーザーの見え方という観点でも
        <br />
        システム開発や不具合事象発生時に局所的ではなく
        <br />
        全体を見ることができる重要性を実感しました。
        <br />
        <br />
        将来的にはアプリ／インフラを幅広くカバーできるエンジニアに
        <br />
        なりたいと考えています。
      </Typography> */}
      <Typography
        sx={{ mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      >
        将来フルスタックに活躍できるエンジニアになりたい
      </Typography>
      <Typography sx={{ mb: 5 }} variant="body2" fontSize={13}>
        業務ではインフラ関連のタスクを担当することもあり、
        <br />
        システム開発や不具合事象発生時に局所的ではなく
        <br />
        全体を見ることができる重要性を実感しました。
        <br />
        <br />
        将来アプリ／インフラを幅広くカバーできるエンジニアに
        <br />
        なるため、実現できる環境に身を置きたいと考えています。
      </Typography>
    </Box>
  );
};

export const HistoryContents3 = () => {
  return (
    <Box
      sx={{
        p: 2,
      }}
    >
      <Typography id="modal-modal-title3" variant="h5" fontWeight={"bold"}>
        個人での学習
      </Typography>

      <Typography
        sx={{ mt: 3, mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      >
        モダンフロントエンド
      </Typography>
      <Typography sx={{ mb: 3 }} variant="body2" fontSize={13}>
        業務では単純なHTML、CSS、Javascript（ES6以前）を使用していましたが、
        <br />
        SPAの実装に興味を持ち、Reactの学習を始めました。
        <br />
        <br />
        書籍、Udemy、公式リファレンスにて学習を進め、
        <br />
        「React + MaterialUI」で当サイトを作成しました。
      </Typography>
      <Typography
        sx={{ mb: 0 }}
        variant="subtitle1"
        color="primary"
        fontSize={17}
      >
        AWS環境構築
      </Typography>
      <Typography sx={{ mb: 3 }} variant="body2" fontSize={13}>
        業務ではオンプレミスのサーバーにアプリケーションを構築していますが、
        <br />
        DBバージョンアップ対応を担当する中で、開発環境構築の手段として
        <br />
        利用しようと考えたことがきっかけでAWSに興味を持ち学習を始めました。
        <br />
        <br />
        当サイトは、「S3 +
        CloudFront」にて静的サイトホスティングを行っております。
        <br />
        ブログは、EC2インスタンスにてWebサーバを作成後Wordpressを導入し、
        <br />
        投稿されたイメージファイルはS3へと保存するよう構築しています。
        <br />
        AWSソリューションアーキテクトを受験し合格！（2023/4）
      </Typography>
    </Box>
  );
};

export const SkillContents = [
  {
    id: "front",
    tech: "HTML",
    level: 2,
    explain: "基本的な利用方法を理解し、Webページの実装が可能。",
  },
  {
    id: "front",
    tech: "CSS",
    level: 2,
    explain: "基本的な利用方法を理解し、Webページの実装が可能。",
  },
  {
    id: "front",
    tech: "Javascript",
    level: 2,
    explain: "基本的な利用方法を理解し、動的なWebページを実装できる。",
  },
  {
    id: "front",
    tech: "React",
    level: 2,
    explain:
      "基本的な利用方法を理解し、簡易なWebページの作成に利用できる。（当サイトにて利用）",
  },
  {
    id: "front",
    tech: "Material UI",
    level: 1,
    explain:
      "基本的な利用方法を理解し、簡易なWebページの作成に利用できる。（当サイトにて利用）",
  },
  {
    id: "back",
    tech: "Java",
    level: 2,
    explain: "基本的な利用方法を理解し、アプリケーションを実装できる。",
  },
  {
    id: "back",
    tech: "SQL",
    level: 2,
    explain: "適切なSQL文の作成を実施できる。",
  },
  {
    id: "back",
    tech: "Linux",
    level: 2,
    explain: "シェルを通しての操作、シェルスクリプトの作成が可能。",
  },
  {
    id: "back",
    tech: "AWS",
    level: 1,
    explain: "基礎的な環境構築が可能。（当サイトにて利用）",
  },
  // {
  //   id: "other",
  //   tech: "Other1",
  //   level: 3,
  //   explain: "Other1の説明",
  // },
];
