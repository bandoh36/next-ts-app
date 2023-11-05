import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import SkillsetList from "@/components/molecules/SkillsetList";

const HomeSkillset = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 3, mb: 3 }}>
      <Grid container spacing={5} sx={{ minWidth: "650px" }}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              boxShadow: "6",
            }}
          >
            <SkillsetList id="front" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              boxShadow: "6",
            }}
          >
            <SkillsetList id="back" />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 4,
              display: "flex",
              flexDirection: "column",
              boxShadow: "6",
            }}
          >
            <SkillsetList id="other" />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomeSkillset;
