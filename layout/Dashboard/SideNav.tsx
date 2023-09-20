import {
  Box,
  Burger,
  createStyles,
  Group,
  Navbar,
  ScrollArea,
  Collapse,
  Center,
  getStylesRef,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { FC, useState } from "react";
import { filterMenuByClaims } from "./filter-menu";
import { MenuItem, menuItems } from "./menu";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import router from "next/router";
import { Colors } from "@/lib/const/color";
import { LinksGroup } from "@/components/core/sidebar/LinksGroup";
import { getPath } from "@/lib/const/path";

export const useStyles = createStyles<
  string,
  { collapsed?: boolean; opened?: boolean }
>((theme, params) => {
  const icon: string = getStylesRef("icon");

  return {
    navbar: {
      position: "sticky",
      top: 0,
      width: params?.collapsed ? 270 : 80,
      transition: params?.collapsed ? "width 0.2s linear" : "width 0.2s linear",
      backgroundColor: Colors.primary_white,
      boxShadow: "5px -1px 10px -5px rgba(0,0,0,0.51)",
    },

    header: {
      padding: theme.spacing.xs,
      marginBottom: params?.collapsed ? theme.spacing.md : "50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
    },
    headerBurger: {
      position: "absolute",
      right: params?.collapsed ? "0px" : "12px",
    },

    footer: {
      paddingTop: theme.spacing.xs,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
    },

    logo: {
      ...theme.fn.focusStyles(),
      // width: "100%",
      display: "inline",
      alignItems: params?.collapsed ? "center" : "left",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: "#000",
      padding: params?.collapsed
        ? `${theme.spacing.xs} ${theme.spacing.sm}`
        : "",
      fontWeight: 700,
    },
    control: {
      fontWeight: 500,
      display: "block",
      width: params.collapsed ? "100%" : 0,
      textDecoration: "none",
      padding: `${theme.spacing.lg}`,
      color: Colors.primary_gray,
      fontSize: theme.fontSizes.sm,
      borderEndStartRadius: "10px",
      borderStartStartRadius: "10px",
      "&:hover": {
        paddingRight: "34px",
        backgroundColor: Colors.light_blue_transparent,
        color: Colors.light_blue,
        borderRight: `5px solid ${Colors.light_blue}`,
      },
      transition: params?.collapsed ? "width 0.2s linear" : "width 0.2s linear",
    },

    link: {
      ...theme.fn.focusStyles(),
      width: params.collapsed ? "100%" : 0,
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: Colors.primary_gray,
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      borderLeft: `1px solid ${
        theme.colorScheme === "light" ? theme.colors.dark[4] : Colors.hover_gray
      }`,
      "&:hover": {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${icon}`]: {
          color: theme.black,
        },
      },
      transition: params?.collapsed ? "width 0.2s linear" : "width 0.2s linear",
    },

    subLink: {
      ...theme.fn.focusStyles(),
      width: "88%",
      display: params.opened && params.collapsed ? "flex" : "none",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: Colors.primary_gray,
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      paddingLeft: params?.collapsed ? 31 : 0,
      marginLeft: params?.collapsed ? 30 : 0,
      fontWeight: 500,
      cursor: "pointer",
      borderEndStartRadius: "10px",
      borderStartStartRadius: "10px",
      "&:hover": {
        paddingRight: "34px",
        backgroundColor: Colors.light_blue_transparent,
        color: Colors.light_blue,
        borderRight: `5px solid ${Colors.light_blue}`,
      },
    },
    subLinkActive: {
      ...theme.fn.focusStyles(),
      width: "80%",
      display: params.opened && params.collapsed ? "flex" : "none",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      paddingLeft: params?.collapsed ? 31 : 0,
      marginLeft: params?.collapsed ? 30 : 0,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      cursor: "pointer",
      borderEndStartRadius: "10px",
      borderStartStartRadius: "10px",
      backgroundColor: Colors.light_blue_transparent,
      color: Colors.light_blue,
      borderRight: `5px solid ${Colors.light_blue}`,
      transition: params?.collapsed ? "width 0.2s linear" : "width 0.2s linear",
    },
    linkActive: {
      fontWeight: 500,
      display: "block",
      width: params.collapsed ? "100%" : 0,
      textDecoration: "none",
      padding: `${theme.spacing.lg}`,
      paddingRight: "34px",
      fontSize: theme.fontSizes.sm,
      borderEndStartRadius: "10px",
      borderStartStartRadius: "10px",
      backgroundColor: Colors.light_blue_transparent,
      color: Colors.light_blue,
      borderRight: `5px solid ${Colors.light_blue}`,
      transition: params?.collapsed ? "width 0.2s linear" : "width 0.2s linear",
    },
    linkIcon: {
      ref: icon,
      color: theme.colors.gray[6],
    },

    linkLabel: {
      display: params?.collapsed ? "" : "none",
      textDecoration: "none",
    },
    linkSubLabel: {
      display: params?.collapsed ? "" : "none",
      fontWeight: 500,
    },
  };
});

export const SideNav: FC<{ className?: string }> = ({ className }) => {
  const [collapsed, handlers] = useDisclosure(true);
  const { classes, cx, theme } = useStyles({ collapsed });
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;

  return (
    <>
      <Navbar p="xs" className={`noPrint ${cx(classes.navbar, className)}`}>
        <Navbar.Section grow component={ScrollArea}>
          <Group
            className={classes.header}
            position={collapsed ? "left" : "center"}
          >
            <Link href={getPath("index")} style={{ textDecoration: "none" }}>
              <span className={classes.logo}>
                <span className={classes.linkLabel} style={{ fontSize: 20 }}>
                  DeHoli Store
                </span>
              </span>
            </Link>
            <Burger
              className={classes.headerBurger}
              color={Colors.light_blue}
              onClick={handlers.toggle}
              opened={collapsed}
            />
          </Group>
          {MenuItem?.map((item: any, idx: number) => {
            return (
              <LinksGroup
                {...item}
                hasLinks={Array.isArray(item?.links) ? true : false}
                collapsed={collapsed}
                handlers={handlers}
                key={idx}
              />
            );
          })}
        </Navbar.Section>
      </Navbar>
    </>
  );
};
