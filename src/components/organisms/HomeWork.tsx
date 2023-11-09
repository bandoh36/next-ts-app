import Box from "@mui/material/Box";

import WorkCard from "@/components/molecules/WorkCard";
import {
  WORK_CONTENT_BLOG,
  WORK_CONTENT_PORTFOLIO,
} from "@/constant/workConstant";

const HomeWork = () => {
  const workContentPortfolio = WORK_CONTENT_PORTFOLIO;
  const workContentBlog = WORK_CONTENT_BLOG;

  return (
    <Box
      alignItems={"center"}
      sx={{
        width: { xs: "100vw", md: "1100px" },
      }}
    >
      <WorkCard content={workContentPortfolio} />
      <WorkCard content={workContentBlog} />
    </Box>
  );
};

export default HomeWork;
