import { Link as MuiLink } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { PROFILE_CONTENT } from "@/constant/profileConstant";

const HomeProfile = () => {
  const profileContent = PROFILE_CONTENT;
  return (
    <Grid container alignItems="center" spacing={10} sx={{}}>
      <Grid item>
        <Box
          sx={{
            width: { xs: "100%", md: "600px" },
            height: "400px",
            borderRadius: "10px",
            boxShadow: "10",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <Image
            src={profileContent.image.src}
            alt={profileContent.image.alt}
            fill
            style={{ objectFit: "cover" }}
          />
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
          <Box>{profileContent.profile}</Box>
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
