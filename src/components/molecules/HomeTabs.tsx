import { ReactNode, SyntheticEvent } from "react";

import Tabs from "@mui/material/Tabs";
import { styled } from "@mui/material/styles";

interface HomeTabsProps {
  children?: ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
}

// TODO テーマ設定、SP対応
const HomeTabs = styled((props: HomeTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 40,
    width: "100%",
    backgroundColor: "#635ee7",
  },
});

export default HomeTabs;
