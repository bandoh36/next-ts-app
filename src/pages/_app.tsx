import { ThemeProvider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { AppProps } from "next/app";
import Head from "next/head";

import CustomTheme from "@/styles/CustomTheme";
import "@/styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Akisute&apos;s portfolio</title>
      </Head>
      <ThemeProvider theme={CustomTheme}>
        <CssBaseline />
        {/* <GlobalStyles
          styles={{
            body: {
              height: "100vh",
              background: "linear-gradient(#B7ADFF, #FFFFFF)",
              m: 0,
            },
          }}
        /> */}
        <Component {...pageProps}></Component>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
