import "../styles/global.css";
import "@mantine/core/styles.css";
import "@mantine/spotlight/styles.css";
import type { CustomAppPage } from "next/app";
import { MantineProvider, createTheme } from "@mantine/core";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import { MantineEmotionProvider, emotionTransform } from "@mantine/emotion";
import { emotionCache } from "../emotion/cache";

const theme = createTheme({
  /** Put your mantine theme override here */
});

const App: CustomAppPage = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });
  return (
    <>
      <MantineEmotionProvider cache={emotionCache}>
        <MantineProvider
          stylesTransform={emotionTransform}
          theme={theme}
          defaultColorScheme="light"
        >
          <Notifications position="top-right" />
          <QueryClientProvider client={queryClient}>
            {getLayout(<Component {...pageProps} />)}
          </QueryClientProvider>
        </MantineProvider>
      </MantineEmotionProvider>
    </>
  );
};

export default App;
