import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "Theme";
import createEmotionCache from "Emotion";

//Fonts
import "@fontsource/open-sans";
import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/500.css";
import "@fontsource/open-sans/600.css";
import "@fontsource/open-sans/700.css";

//Progress
import NProgress from 'next-nprogress-emotion';

//Redux Wrapper
import { wrapper } from "Redux/Store";
import { useAppSelector } from "Redux/Hook";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const { error } = useAppSelector(state => state.serverError);
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NProgress
          color="#eb5525"
          options={{ trickleSpeed: 50, showSpinner: false }}
          showAfterMs={2000}
          spinner
        />
        <Component {...pageProps} />
        {/* {error ? (
          <Box sx={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", whiteSpace: "nowrap" }}>
            <Typography variant="h6" component="h6" sx={{ fontWeight: 600, color: "primary.main" }}>
              500 - Internal Server Error
            </Typography>
            <Typography variant="body2" component="p">
              There is a problem with the resource you are looking for or server response and it can&apos; be displayed.
            </Typography>
          </Box>
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )} */}
      </ThemeProvider>
    </CacheProvider>
  );
}
export default wrapper.withRedux(MyApp);