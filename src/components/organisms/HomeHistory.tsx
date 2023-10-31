import Grid from "@mui/material/Grid";

import HistoryCardLeftImage from "@/components/molecules/HistoryCardLeftImage";
import { HISTORY_CARD_CONTENT_SIER } from "@/constant/constant";

const HomeHistory = () => {
  const historyCardContentSIer = HISTORY_CARD_CONTENT_SIER;
  return (
    <Grid container justifyContent="center">
      <HistoryCardLeftImage {...historyCardContentSIer} />
    </Grid>
  );
};

export default HomeHistory;
