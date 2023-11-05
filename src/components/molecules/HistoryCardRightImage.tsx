import Box from "@mui/material/Box";
import Image from "next/image";

export interface HistoryCardProps {
  image: { src: string; alt: string };
  description: JSX.Element;
}
const HistoryCardRightImage = ({ image, description }: HistoryCardProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        width: "1100px",
        height: "300px",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          pr: "30px",
        }}
      >
        {description}
      </Box>
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
    </Box>
  );
};

export default HistoryCardRightImage;
