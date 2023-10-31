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
        display: "flex",
        width: "1200px",
        height: "300px",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          width: "400px",
          height: "100%",
          borderRadius: "10px",
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
      <Box sx={{ pl: "50px" }}>{description}</Box>
    </Box>
  );
};

export default HistoryCardLeftImage;
