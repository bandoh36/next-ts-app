import HomeIcon from "@mui/icons-material/Home";
import PsychologyAltIcon from "@mui/icons-material/PsychologyAlt";
import StarIcon from "@mui/icons-material/Star";
import WebIcon from "@mui/icons-material/Web";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export interface DrawerListProps {
  handleDrawerOnClick: Function;
  setDisplayContent: Function;
}

const DrawerList = ({
  handleDrawerOnClick,
  setDisplayContent,
}: DrawerListProps) => {
  return (
    <List component="nav">
      {/*TODO JSONからデータ取得する{mainListItems} */}

      <ListItemButton
        onClick={() => {
          setDisplayContent("Home");
          handleDrawerOnClick(false);
        }}
      >
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="ホーム" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          setDisplayContent("History");
          handleDrawerOnClick(false);
        }}
      >
        <ListItemIcon>
          <PsychologyAltIcon />
        </ListItemIcon>
        <ListItemText primary="転職を考えた理由" />
      </ListItemButton>
      <ListItemButton
        onClick={() => {
          setDisplayContent("Skill");
          handleDrawerOnClick(false);
        }}
      >
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="スキルセット" />
      </ListItemButton>

      <Divider sx={{ my: 1 }} />

      {/*TODO JSONからデータ取得する{secondaryListItems} */}
      <ListSubheader component="div" inset>
        その他作成したサイト
      </ListSubheader>
      <ListItemButton target="_blank" href="https://akisute36.com">
        <ListItemIcon>
          <WebIcon />
        </ListItemIcon>
        <ListItemText primary="Akisuteのブログ" />
      </ListItemButton>
    </List>
  );
};

export default DrawerList;
