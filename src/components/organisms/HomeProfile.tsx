import Box from "@mui/system/Box";
import Image from "next/image";

const HomeProfile = () => {
  return (
    <Box>
      <Image
        src="/image/profile/tsuri.jpg"
        alt="fishing"
        width={100}
        height={100}
      />
    </Box>
  );
};

export default HomeProfile;
