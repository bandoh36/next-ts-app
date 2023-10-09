import { useState, useCallback } from "react";

import AppBar from "@/components/molecules/AppBar";
import Drawer from "@/components/molecules/Drawer";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const handleDrawerOnClick = (bool: boolean) => {
    setOpen(bool);
  };

  const [displayContents, setDisplayContent] = useState("Home");
  const handleDisplayContents = useCallback((name: string) => {
    setDisplayContent(name);
  }, []);

  return (
    <>
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
    </>
  );
};
