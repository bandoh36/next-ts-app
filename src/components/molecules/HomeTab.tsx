import Tab from "@mui/material/Tab";
import { styled } from "@mui/material/styles";

interface HomeTabProps {
  label: string;
}

const HomeTab = styled((props: HomeTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: "none",
  fontFamily: "'Inter', sans-serif",

  // TODO テーマ設定、SP対応
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  // marginRight: theme.spacing(1),
  color: "black",
  "&.Mui-selected": {
    color: "blue",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.70)",
  },
}));
export default HomeTab;
