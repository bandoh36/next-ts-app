import { Link as MuiLink } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import { PROFILE_CONTENT } from "@/constant/profileConstant";

const HomeProfile = () => {
  const profileContent = PROFILE_CONTENT;
  return (
    <Box
      alignItems={"center"}
      sx={{
        width: { xs: "100vw", md: "1300px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "600px" },
          height: { xs: "300px", md: "400px" },
          borderRadius: "10px",
          boxShadow: "3",
          overflow: "hidden",
          position: "relative",
          mr: { md: 5 },
        }}
      >
        <Image
          src={profileContent.image.src}
          alt={profileContent.image.alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100%", md: "800px" },
          height: { xs: "100%", md: "400px" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          border: { xs: 0, md: 1 },
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
    </Box>
  );
};

export default HomeProfile;
