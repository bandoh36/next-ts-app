import Box from "@mui/material/Box";
import Image from "next/image";

export interface HistoryCardProps {
  image: { src: string; alt: string };
  description: JSX.Element;
}
const HistoryCardLeftImage = ({ image, description }: HistoryCardProps) => {
  return (
    <Box
      sx={{
        width: { xs: "100vw", md: "1100px" },
        height: { xs: "500px", md: "300px" },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "flex-start",
        borderRadius: "10px",
        backgroundColor: "white",
        boxShadow: "3",
      }}
    >
      <Box
        sx={{
          width: { xs: "100vw", md: "400px" },
          height: { xs: "200px", md: "100%" },
          borderRadius: { xs: 0, md: "10px" },
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          style={{ objectFit: "cover" }}
        />
      </Box>
      <Box
        sx={{
          width: { xs: "100vw", md: "700px" },
          height: { xs: "350px", md: "100%" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "flex-start" },
          justifyContent: "center",
          px: { xs: "15px", md: "50px" },
        }}
      >
        {description}
      </Box>
    </Box>
  );
};

export default HistoryCardLeftImage;
