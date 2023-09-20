import {
  ActionIcon,
  AppShell,
  Box,
  CloseButton,
  Drawer,
  MediaQuery,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { Menu2 } from "tabler-icons-react";

import { LayoutErrorBoundary } from "../LayoutErrorBoundary";
import { useDispatch, useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { CustomLayout } from "next";

const Header = dynamic(async () => {
  const { Header } = await import("./Header");
  return Header;
});
const Footer = dynamic(async () => {
  const { Footer } = await import("./Footer");
  return Footer;
});

const SideNav = dynamic(async () => {
  const { SideNav } = await import("./SideNav");
  return SideNav;
});

export const DashboardLayout: CustomLayout = (page) => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <>
      <Head>
        <title>DeHoli Store App</title>
      </Head>
      <AppShell
        padding="sm"
        styles={(theme) => ({
          body: { minHeight: "90vh" },
          main: { padding: 0, backgroundColor: theme.colors.gray[0] },
        })}
        navbar={
          <>
            <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
              <SideNav />
            </MediaQuery>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <DrawerNav opened={opened} handleClose={handlers.close} />
            </MediaQuery>
          </>
        }
      >
        <Header
          left={
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <ActionIcon radius="xl" size={40} onClick={handlers.open}>
                <Menu2 />
              </ActionIcon>
            </MediaQuery>
          }
        />

        <Box py="xl" px="md" sx={{ minHeight: "84vh" }}>
          <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
        </Box>

        <Footer />
      </AppShell>
    </>
  );
};

const DrawerNav: FC<{ opened: boolean; handleClose: () => void }> = ({
  opened,
  handleClose,
}) => {
  const router = useRouter();

  useEffect(() => {
    // Menutup drawer saat rute berubah
    const handleRouteChange = () => {
      if (opened) {
        handleClose();
      }
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [opened, handleClose, router.events]);

  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      size="auto"
      withCloseButton={false}
      sx={{ position: "relative" }}
    >
      <SideNav />
    </Drawer>
  );
};
