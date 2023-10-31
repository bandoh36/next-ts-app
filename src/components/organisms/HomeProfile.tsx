import { Link as MuiLink } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

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
            width: "800px",
            height: "450px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: 1,
            borderRadius: "15px",
            p: 7,
          }}
        >
          <Box>
            <Typography typography="Noto1">Akisute（あきすて）</Typography>
            <Typography typography="Noto2">
              {getYears(BIRTHDAY, "birthday")}歳、社会人
              {getYears(WORKING_STARTDATE, "work")}年目
            </Typography>
            <Typography typography="Noto2">
              2019年保険系SIerに就職。
              <br />
              保険申込／査定Webアプリケーションチームの一員として、
              <br />
              Javascriptでのフロントエンド開発やJavaでのバックエンド開発、PL業務を経験。
              <br />
              「よりスキルを身に着けることができる環境に身を置きたい」という思いから、
              <br />
              2023年Web系ベンチャー企業へ転職。
              <br />
              現在はフロントエンド開発を担当しており、日々精進中。。
            </Typography>
          </Box>
          <Box>
            <Typography typography="Noto3">
              mail :　
              <MuiLink target="_blank" href="mailto:bandoh4321@gmail.com">
                bandoh4321@gmail.com
              </MuiLink>
            </Typography>
            <Typography typography="Noto3">
              github :　
              <MuiLink target="_blank" href="https://github.com/bandoh36">
                https://github.com/bandoh36
              </MuiLink>
            </Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default HomeProfile;
