import Toolbar from "@mui/material/Toolbar";
import { styled } from "@mui/material/styles";

import MainHistory from "@/components/organisms/MainHistoryContent";
import MainHome from "@/components/organisms/MainHomeContent";
import MainSkillsetContent from "@/components/organisms/MainSkillsetContent";
import { DRAWER_WIDTH } from "@/constants";

export interface MainProps {
  open?: boolean;
}

export interface MainContentProps extends MainProps {
  open?: boolean;
  title?: string;
  handleDisplayContents: Function;
}

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<MainProps>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WIDTH}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const MainContent = ({
  open,
  title,
  handleDisplayContents,
}: MainContentProps) => {
  return (
    <Main
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
      }}
      open={open}
    >
      <Toolbar />
      {/* Home画面表示 */}
      {title === "Home" && (
        <MainHome handleDisplayContents={handleDisplayContents} />
      )}
      {/* History画面表示 */}
      {title === "History" && <MainHistory />}
      {/* Skill画面表示 */}
      {title === "Skill" && <MainSkillsetContent />}
    </Main>
  );
};

export default MainContent;
