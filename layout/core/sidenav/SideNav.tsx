import { AppShell, ScrollArea } from "@mantine/core";
import { MenuItem, MenuType } from "../menu/menu";
import { LinksGroup } from "@/components/core";
import { Stack } from "@mantine/core";
import classes from "./SideNav.module.css";

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
      </AppShell.Navbar>
    </>
  );
};
