import Grid from "@mui/material/Grid";

import WorkCard from "@/components/molecules/WorkCard";
import {
  WORK_CONTENT_BLOG,
  WORK_CONTENT_PORTFOLIO,
} from "@/constant/workConstant";

const HomeWork = () => {
  const workContentPortfolio = WORK_CONTENT_PORTFOLIO;
  const workContentBlog = WORK_CONTENT_BLOG;

  return (
    <Grid container justifyContent="center" sx={{ pb: 4 }}>
      <WorkCard content={workContentPortfolio} />
      <WorkCard content={workContentBlog} />
    </Grid>
  );
};

export default HomeWork;
