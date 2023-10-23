import { useState, SyntheticEvent } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import HomeTab from "@/components/molecules/HomeTab";
import HomeTabs from "@/components/molecules/HomeTabs";

const HomeTemp = () => {
  const [tabValue, setTabValue] = useState(1);
  const tabChange = (event: SyntheticEvent, value: number) => {
    setTabValue(value);
  };

  return (
    <Stack>
      <Grid container sx={{ width: "100%", height: "150px" }}>
        <Grid item xs={12} sm={6}>
          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ height: "100%" }}
          >
            <Typography variant="h1" typography="inter">
              Akisute&apos;s Portfolio
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={0} sm={6}></Grid>
      </Grid>
      <Stack>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "75px",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            pr: "30px",
          }}
        >
          <HomeTabs value={tabValue} onChange={tabChange}>
            <HomeTab label="Profile" />
            <HomeTab label="History" />
            <HomeTab label="Skillset" />
            <HomeTab label="Work" />
          </HomeTabs>
        </Box>
      </Stack>
    </Stack>
  );
};

export default HomeTemp;
