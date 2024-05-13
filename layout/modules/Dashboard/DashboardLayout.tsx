import { Footer, Header, SideNav } from "@/layout/core";
import { AppShell } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { CustomLayout } from "next";
import Head from "next/head";

export const DashboardLayout: CustomLayout = (page) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
  return (
    <>
      <Head>
        <title>DeHoli Super App</title>
        <link rel="icon" href="/favicon.png" sizes="100x100" />
      </Head>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        }}
        p={"md"}
      >
        <Header
          mobileOpened={mobileOpened}
          toggleMobile={toggleMobile}
          desktopOpened={desktopOpened}
          toggleDesktop={toggleDesktop}
        />
        <SideNav />
        <AppShell.Main>{page}</AppShell.Main>
        <Footer />
      </AppShell>
    </>
  );
};
