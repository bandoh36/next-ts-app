import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import content from "@/content/content.json";

const HistoryHeader = () => {
  const historyContent = content.history;
  const descriptionWithLineBreaks = historyContent.description
    .split("\n")
    .map((line) => (
      <>
        {line}
        <br />
      </>
    ));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        borderRadius: "5px",
        backgroundColor: "white",
        boxShadow: "6",
        p: 4,
      }}
    >
      <Typography variant="h4">{historyContent.title}</Typography>
      <Typography
        variant="inherit"
        color="textSecondary"
        sx={{ textAlign: "center", pt: 3 }}
      >
        {descriptionWithLineBreaks}
      </Typography>
    </Box>
  );
};

export default HistoryHeader;
