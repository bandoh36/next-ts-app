import Typography from "@mui/material/Typography";

import { HistoryCardProps } from "@/components/molecules/HistoryCardLeftImage";

export const HISTORY_CARD_CONTENT_SIER: HistoryCardProps = {
  image: { src: "/image/history/historyImage1.jpg", alt: "history1" },
  description: (
    <>
      <Typography typography="Noto1">
        保険系SIerにて上流～下流開発を経験
      </Typography>
      <Typography typography="Noto3" sx={{ p: 3 }}>
        新卒で入社した保険系SIerではウォーターフォールでの開発案件に参画し、
        Javaでのプログラム実装だけでなく、要件定義～運用保守フェーズまで幅広く担当。
        <br />
        <br />
        入社3年目には保守開発プロジェクトのリーダーとして、
        案件管理（スケジュール作成／進捗管理）やメンバーのマネジメントも経験。
        また独学・社外の研修を通して、Javascriptを用いたフロントエンド開発や
        AWSを用いたインフラ環境構築について日々自己学習に取り組む。
      </Typography>
    </>
  ),
};

export const HISTORY_CARD_CONTENT_VENTURE: HistoryCardProps = {
  image: { src: "/image/history/historyImage2.jpg", alt: "history2" },
  description: (
    <>
      <Typography typography="Noto1">Web系ベンチャー企業へ転職</Typography>
      <Typography typography="Noto3" sx={{ p: 3 }}>
        将来フルスタックに活躍できるエンジニアになる、という理想を実現するため転職を決意。
        ベンチャー企業へ転職し、自社サービス開発にて現在は主にフロントエンド領域を担当。
        スクラムにて、NextJS・MaterialUIを用いたモダンなWebシステム開発を経験。
        バックエンド・インフラ領域にも興味を持ち、今後は業務でも担当できるよう学習中。
        <br /> <br />
        また業務外では、当ポートフォリオや学習内容発信のためのブログ、
        その他ToDoアプリなど積極的にアウトプットを実施し研鑽中。
      </Typography>
    </>
  ),
};
