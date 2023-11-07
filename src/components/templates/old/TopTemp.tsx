import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

import { TOP_PAGE_ANIMATION } from "@/constant/historyConstant";

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
      <img
        src="/image/topPageBackground.jpg"
        alt="ごめんね、背景が表示されていない（；○；）"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "fixed",
          top: 0,
          left: 0,
        }}
      />
      <Fade in={fadeIn} timeout={TOP_PAGE_ANIMATION}>
        <Box
          sx={{
            height: "95vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="Dot1" sx={{ textAlign: "center" }}>
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
