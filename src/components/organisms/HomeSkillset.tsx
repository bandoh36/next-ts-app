import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

import SkillsetList from "@/components/molecules/SkillsetList";

const HomeSkillset = () => {
  return (
    <Grid container justifyContent="center">
      <Stack sx={{ width: "1100px" }}>
        <SkillsetList id="qualification" />
        <SkillsetList id="front" />
        <SkillsetList id="back" />
        <SkillsetList id="other" />
      </Stack>
    </Grid>
  );
};

export default HomeSkillset;
