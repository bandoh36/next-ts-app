import { useState, useCallback } from "react";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const HomeTemp = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOnClick = (bool: boolean) => {
    setOpen(bool);
  };

  const [displayContents, setDisplayContent] = useState("Home");
  const handleDisplayContents = useCallback((name: string) => {
    setDisplayContent(name);
  }, []);

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
      <Stack>bbb</Stack>
    </Stack>
  );
};

export default HomeTemp;
