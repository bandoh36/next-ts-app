import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import HistoryCardLeftImage from "@/components/molecules/HistoryCardLeftImage";
import HistoryCardRightImage from "@/components/molecules/HistoryCardRightImage";
import {
  HISTORY_CARD_CONTENT_SIER,
  HISTORY_CARD_CONTENT_VENTURE,
} from "@/constant/constant";

const HomeHistory = () => {
  const historyCardContentSIer = HISTORY_CARD_CONTENT_SIER;
  const historyCardContentVenture = HISTORY_CARD_CONTENT_VENTURE;

  return (
    <Grid container justifyContent="center">
      <Box sx={{ mt: 0 }}>
        <HistoryCardLeftImage {...historyCardContentSIer} />
      </Box>
      <Box sx={{ mt: 15 }}>
        <HistoryCardRightImage {...historyCardContentVenture} />
      </Box>
    </Grid>
  );
};

export default HomeHistory;
