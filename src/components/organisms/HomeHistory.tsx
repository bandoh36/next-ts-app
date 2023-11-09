import Box from "@mui/material/Box";

import HistoryCardLeftImage from "@/components/molecules/HistoryCardLeftImage";
import HistoryCardRightImage from "@/components/molecules/HistoryCardRightImage";
import {
  HISTORY_CARD_CONTENT_SIER,
  HISTORY_CARD_CONTENT_VENTURE,
} from "@/constant/historyConstant";

const HomeHistory = () => {
  const historyCardContentSIer = HISTORY_CARD_CONTENT_SIER;
  const historyCardContentVenture = HISTORY_CARD_CONTENT_VENTURE;

  return (
    <Box
      alignItems={"center"}
      sx={{
        width: { xs: "100vw", md: "1100px" },
      }}
    >
      <Box sx={{ mt: 0 }}>
        <HistoryCardLeftImage {...historyCardContentSIer} />
      </Box>
      <Box sx={{ mt: 15 }}>
        <HistoryCardRightImage {...historyCardContentVenture} />
      </Box>
    </Box>
  );
};

export default HomeHistory;
