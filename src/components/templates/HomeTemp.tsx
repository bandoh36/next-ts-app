import { useState, SyntheticEvent } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import HomeContent from "@/components/organisms/HomeContent";
import HomeNavigationTab from "@/components/organisms/HomeNavigationTab";

const HomeTemp = () => {
  const [tabValue, setTabValue] = useState(0);
  const tabChange = (event: SyntheticEvent, value: number) => {
    setTabValue(value);
  };

  return (
    <Grid container justifyContent="center" sx={{ pb: 15 }}>
      <Box
        sx={{
          width: "100%",
          height: { xs: "65px", md: "100px" },
          display: "flex",
          justifyContent: { xs: "center", md: "flex-start" },
          mt: { xs: 10, md: 15 },
          ml: { md: 15 },
        }}
      >
        <Typography variant="h1" typography="Inter1">
          Akisute&apos;s Portfolio
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: { xs: "5px", md: "50px" },
          alignItems: { xs: "center", md: "flex-end" },
          justifyContent: { xs: "center", md: "flex-end" },
          pr: { sx: 0, md: "30px" },
          mb: { sx: 2, md: 5 },
        }}
      >
        <HomeNavigationTab tabValue={tabValue} tabChange={tabChange} />
      </Box>
      <Box
        sx={{
          mt: 10,
          mx: 15,
        }}
      >
        <HomeContent tabValue={tabValue} />
      </Box>
    </Grid>
  );
};

export default HomeTemp;
