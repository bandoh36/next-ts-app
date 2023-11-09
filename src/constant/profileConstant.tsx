import Typography from "@mui/material/Typography";

import { StartDate } from "@/lib/common/getYears";
import { getYears } from "@/lib/common/getYears";

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

export const PROFILE_CONTENT = {
  image: { src: "/image/profile/hakata.jpg", alt: "hakata" },
  profile: (
    <>
      <Typography typography="Noto1">Akisute（あきすて）</Typography>
      <Typography typography="Noto2">
        {getYears(BIRTHDAY, "birthday")}歳、社会人。
        {getYears(WORKING_STARTDATE, "work")}年目
      </Typography>
      <Typography typography="Noto2">
        2019年保険系SIerに就職。
        <br />
        保険申込／査定Webアプリ開発チームの一員として、
        <br />
        Javascriptでのフロントエンド開発やJavaでのバックエンド開発、PL業務を経験。
        <br />
        「よりスキルを身に着けることができる環境に身を置きたい」という思いから、
        <br />
        2023年Web系ベンチャー企業へ転職。
        <br />
        現在はフロントエンド開発を担当しており、日々精進中。。
      </Typography>
    </>
  ),
};
