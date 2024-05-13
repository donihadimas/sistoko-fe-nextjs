import { AppShell, Group, ScrollArea } from "@mantine/core";
import { MenuItem, MenuType } from "../menu/menu";
import { LinksGroup } from "@/components/core";
import { Stack } from "@mantine/core";
import classes from "./SideNav.module.css";
import { DarkModeToggle } from "../dark-mode";
import {
  NotificationHoverCard,
  SpotlightSearchForm,
  UserMenu,
} from "@/layout/core";

export const SideNav = () => {
  return (
    <>
      <AppShell.Navbar p="md" className={classes.navbar}>
        <AppShell.Section grow my="md" component={ScrollArea}>
          <Stack>
            {MenuItem?.map((item: MenuType, index: number) => {
              return <LinksGroup key={index} {...item} />;
            })}
          </Stack>
        </AppShell.Section>
        <AppShell.Section hiddenFrom="sm">
          <Stack>
            <Group justify="flex-end">
              <UserMenu userName="Doni Hadimas" position="Administrator" />
            </Group>
            <Group justify="flex-end">
              <SpotlightSearchForm />
              <NotificationHoverCard />
              <DarkModeToggle />
            </Group>
          </Stack>
        </AppShell.Section>
      </AppShell.Navbar>
    </>
  );
};
