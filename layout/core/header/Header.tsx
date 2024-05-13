import {
  DarkModeToggle,
  NotificationHoverCard,
  SpotlightSearchForm,
  UserMenu,
} from "@/layout/core";
import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  HoverCard,
  Image,
  Indicator,
  Text,
  useComputedColorScheme,
} from "@mantine/core";
import { FC } from "react";
import { Bell } from "tabler-icons-react";
import classes from "./Header.module.css";

interface HeaderProps {
  mobileOpened: boolean;
  toggleMobile: () => void;
  desktopOpened: boolean;
  toggleDesktop: () => void;
}

export const Header = ({
  mobileOpened,
  toggleMobile,
  desktopOpened,
  toggleDesktop,
}: HeaderProps) => {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <>
      <AppShell.Header className={classes.header}>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <Burger
              opened={mobileOpened}
              onClick={toggleMobile}
              hiddenFrom="sm"
              size="sm"
            />
            <Burger
              opened={desktopOpened}
              onClick={toggleDesktop}
              visibleFrom="sm"
              size="sm"
            />
            <Image
              src={
                computedColorScheme === "light" ? "/logo-1.png" : "/logo-2.png"
              }
              alt="Deholi Store"
              w={"auto"}
              h={40}
            />
          </Group>
          <Group gap="md" wrap="nowrap" visibleFrom="sm">
            <Group gap={"xs"}>
              <SpotlightSearchForm />
              <NotificationHoverCard />
              <DarkModeToggle />
            </Group>
            <UserMenu userName="Doni Hadimas" position="Administrator" />
          </Group>
        </Group>
      </AppShell.Header>
    </>
  );
};
