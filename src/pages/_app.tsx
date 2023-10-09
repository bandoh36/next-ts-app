import { ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";

import CustomTheme from "@/styles/CustomTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={CustomTheme}>
      <Component {...pageProps}></Component>
    </ThemeProvider>
  );
};

export default MyApp;
