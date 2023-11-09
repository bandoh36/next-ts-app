import Box from "@mui/material/Box";

import SkillsetList from "@/components/molecules/SkillsetList";

const HomeSkillset = () => {
  return (
    <Box
      alignItems={"flex-start"}
      sx={
        {
          // width: { xs: "100vw", md: "1100px" },
        }
      }
    >
      <SkillsetList id="qualification" />
      <SkillsetList id="front" />
      <SkillsetList id="back" />
      <SkillsetList id="other" />
    </Box>
  );
};

export default HomeSkillset;
