import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import Divider from "@mui/material/Divider";
import MuiDrawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

import DrawerList from "@/components/molecules/DrawerList";
import { DRAWER_WIDTH } from "@/constant/constant";

export interface DrawerHeaderProps {
  variant?: string;
  anchor?: string;
}

export interface DrawerProps {
  open?: boolean;
  handleDrawerOnClick: Function;
  setDisplayContent: Function;
}

export const DrawerHeader = styled("div")<DrawerHeaderProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Drawer = ({
  open,
  handleDrawerOnClick,
  setDisplayContent,
}: DrawerProps) => {
  return (
    <MuiDrawer
      sx={{
        width: DRAWER_WIDTH,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: DRAWER_WIDTH,
          boxSizing: "border-box",
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={() => handleDrawerOnClick(false)}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerList
        handleDrawerOnClick={handleDrawerOnClick}
        setDisplayContent={setDisplayContent}
      />
    </MuiDrawer>
  );
};

export default Drawer;
