import MenuIcon from "@mui/icons-material/Menu";
import MuiAppBar, { AppBarOwnProps } from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import { DRAWER_WIDTH } from "@/constants";

export interface AppBarHeaderProps extends AppBarOwnProps {
  open?: boolean;
}

export interface AppBarProps extends AppBarHeaderProps {
  title?: string;
  handleDrawerOnClick: Function;
}

const AppBarHeader = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarHeaderProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WIDTH}px)`,
    marginLeft: `${DRAWER_WIDTH}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const AppBar = ({
  position,
  open,
  title,
  handleDrawerOnClick,
}: AppBarProps) => {
  return (
    <AppBarHeader position={position} open={open}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerOnClick(true)}
          sx={{
            marginRight: "36px",
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          {/*TODO JSONからデータ取得する*/}
          {title === "Home" && "ホーム"}
          {title === "History" && "転職を考えた理由"}
          {title === "Skill" && "スキルセット"}
        </Typography>
      </Toolbar>
    </AppBarHeader>
  );
};

export default AppBar;
