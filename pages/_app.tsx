import { AppProps } from "next/app";
import axios from "axios";
import type { CustomAppPage } from "next/app";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "../mantine-theme";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const App: CustomAppPage = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  const getLayout =
    Component.getLayout ||
    ((page) => {
      return page;
    });
  return (
    <>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
};

export default App;
