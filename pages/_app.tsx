import type { CustomAppPage } from "next/app";
import { MantineProvider } from "@mantine/core";
import { mantineTheme } from "../mantine-theme";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Notifications } from "@mantine/notifications";
import "../styles/global.css";

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
        <Notifications position="top-right" />
        <QueryClientProvider client={queryClient}>
          {getLayout(<Component {...pageProps} />)}
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
};

export default App;
