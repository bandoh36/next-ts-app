import Typography from "@mui/material/Typography";

import { HistoryCardProps } from "@/components/molecules/HistoryCardLeftImage";
import { StartDate } from "@/lib/common/getYears";

// ヘッダーボタン押下時のウィンドウ変更幅
export const DRAWER_WIDTH = 400;

// トップページのアニメーション/パス遷移までの時間
export const TOP_PAGE_ANIMATION = 6000;

// 年齢計算用誕生日情報
export const BIRTHDAY: StartDate = {
  year: 1996,
  month: 3,
  date: 5,
};

// 勤続年数計算用勤務開始情報
export const WORKING_STARTDATE: StartDate = {
  year: 2019,
  month: 4,
  date: 1,
};

export const HISTORY_CARD_CONTENT_SIER: HistoryCardProps = {
  image: { src: "/image/history/historyImage1.jpg", alt: "history1" },
  description: (
    <>
      <Typography typography="Noto1">保険系SIerでの経験</Typography>
      <Typography typography="Noto2">フロントエンド開発</Typography>
    </>
  ),
};
