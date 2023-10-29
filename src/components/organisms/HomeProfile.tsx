import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { BIRTHDAY, WORKING_STARTDATE } from "@/constant/constant";
import { getYears } from "@/lib/common/getYears";

const HomeProfile = () => {
  return (
    <Grid container justifyContent="space-around" alignItems="center">
      <Grid item>
        <Box
          sx={{
            width: "700px",
            height: "500px",
            borderRadius: "10px",
            overflow: "hidden",
            position: "relative",

            // TODO 消す
            backgroundColor: "blue",
          }}
        >
          {/* <Image
            src="/image/profile/tsuri.jpg"
            alt="fishing"
            fill
            style={{ objectFit: "cover" }}
          /> */}
        </Box>
      </Grid>
      <Grid item>
        <Box
          sx={{
            width: "700px",
            height: "600px",
            border: 1,
            borderRadius: "15px",
            p: 7,
          }}
        >
          <Typography typography="Noto1">
            Akisute（あきすて）{getYears(BIRTHDAY, "birthday")}歳
          </Typography>
          <Typography>
            社会人{getYears(WORKING_STARTDATE, "work")}年目
          </Typography>
          <Typography>
            2019年保険系SIerに就職。
            <br />
            保険申込／査定Webアプリケーションチームの一員として、
            <br />
            Javaでのバックエンド開発やPL業務を経験。
            <br />
            「よりスキルを身に着けることができる環境に身を置きたい」という思いから、
            <br />
            2023年Web系ベンチャー企業へ転職。
            <br />
            現在業務ではフロントエンド開発を担当しており、日々精進中。。
            <br />
            趣味はゲームです。
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeProfile;
