import { ThemeProvider } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";

import CustomTheme from "@/styles/CustomTheme";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Akisute&apos;s portfolio</title>
      </Head>
      <ThemeProvider theme={CustomTheme}>
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
