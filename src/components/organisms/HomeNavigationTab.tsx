import { SyntheticEvent } from "react";

import HomeTab from "@/components/molecules/HomeTab";
import HomeTabs from "@/components/molecules/HomeTabs";

export interface HomeNavigationTabProps {
  tabValue: number;
  tabChange: (event: SyntheticEvent, value: number) => void;
}

const HomeNavigationTab = ({ tabValue, tabChange }: HomeNavigationTabProps) => {
  return (
    <HomeTabs value={tabValue} onChange={tabChange}>
      <HomeTab label="Profile" />
      <HomeTab label="History" />
      <HomeTab label="Skillset" />
      <HomeTab label="Work" />
    </HomeTabs>
  );
};

export default HomeNavigationTab;
