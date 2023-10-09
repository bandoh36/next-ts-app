import { useState, useCallback } from "react";

import Box from "@mui/material/Box";

import AppBar from "@/components/organisms/AppBar";
import Drawer from "@/components/organisms/Drawer";
import MainContent from "@/components/organisms/MainContent";

const TopTemp = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOnClick = (bool: boolean) => {
    setOpen(bool);
  };

  const [displayContents, setDisplayContent] = useState("Home");
  const handleDisplayContents = useCallback((name: string) => {
    setDisplayContent(name);
  }, []);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        open={open}
        title={displayContents}
        handleDrawerOnClick={handleDrawerOnClick}
      />
      <Drawer
        open={open}
        handleDrawerOnClick={handleDrawerOnClick}
        setDisplayContent={setDisplayContent}
      />
      <Box
        sx={{
          display: "flex",
        }}
      >
        <MainContent
          title={displayContents}
          handleDisplayContents={handleDisplayContents}
        />
      </Box>
    </Box>
  );
};

export default TopTemp;
