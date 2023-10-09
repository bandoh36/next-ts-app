import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import ProfileContent from "@/components/molecules/ProfileContent";

export interface MainHomeProps {
  handleDisplayContents: Function;
}

// TODO 全体的に見直し要
const MainHome = ({ handleDisplayContents }: MainHomeProps) => {
  return (
    /* 幅変化指定 上下marginの指定 */
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      {/* 自己紹介 */}
      <ProfileContent />
      {/* 各ページリンク */}
      <Grid container mt={0} spacing={3}>
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              height: 120,

              boxShadow: "6",
            }}
          >
            <Typography variant="h6" color="primary">
              転職を考えた経緯
              <br />
              <Button
                color="secondary"
                onClick={() => handleDisplayContents("History")}
                sx={{ mt: 3 }}
              >
                &gt;&gt;詳しく見る
              </Button>
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Paper
            sx={{
              p: 2,
              height: 120,
              boxShadow: "6",
            }}
          >
            <Typography variant="h6" color="primary">
              スキルセット
              <br />
              <Button
                color="secondary"
                onClick={() => handleDisplayContents("Skill")}
                sx={{ mt: 3 }}
              >
                &gt;&gt;詳しく見る
              </Button>
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MainHome;
