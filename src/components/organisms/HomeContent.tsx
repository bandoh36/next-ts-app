import HomeHistory from "@/components/organisms/HomeHistory";
import HomeProfile from "@/components/organisms/HomeProfile";
import HomeSkillset from "@/components/organisms/HomeSkillset";
import HomeWork from "@/components/organisms/HomeWork";

export interface HomeContentProps {
  tabValue: number;
}

const HomeContent = ({ tabValue }: HomeContentProps) => {
  switch (tabValue) {
    case 0:
      return <HomeProfile />;

    case 1:
      return <HomeHistory />;

    case 2:
      return <HomeSkillset />;

    case 3:
      return <HomeWork />;

    default:
      return <>{"ページ作成中"}</>;
  }
};

export default HomeContent;
