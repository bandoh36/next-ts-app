import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { useRouter } from "next/router";

import { TOP_PAGE_ANIMATION } from "@/constants";

export interface TopPageContentProps {
  time: number;
}

const TopTemp = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // レンダリング後にフェードインを有効にする
    setFadeIn(true);
  }, []);

  setTimeout(() => {
    router.push("/home");
  }, TOP_PAGE_ANIMATION);

  return (
    <>
      <Image
        src={"/image/topPageBackground.jpg"}
        alt="ごめんね、背景が表示されていない（；○；）"
        fill
      />
      <Fade in={fadeIn} timeout={TOP_PAGE_ANIMATION}>
        <Box
          sx={{
            height: "90vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="dot" sx={{ textAlign: "center" }}>
            {"Welcome!!"}
            <br />
            <br />
            {"Shunsuke Bando's Portfolio!!"}
          </Typography>
        </Box>
      </Fade>
    </>
  );
};

export default TopTemp;
