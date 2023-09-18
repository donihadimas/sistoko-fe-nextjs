import {
  Box,
  Burger,
  createStyles,
  Group,
  Navbar,
  ScrollArea,
  Collapse,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Link from "next/link";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { filterMenuByClaims } from "./filter-menu";
import { menuItems } from "./menu";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";
import router from "next/router";
import { Colors } from "@/lib/const/color";
import { LinksGroup } from "@/components/core/sidebar/LinksGroup";
import { getPath } from "@/lib/const/path";

const useStyles = createStyles<string, { collapsed?: boolean }>(
  (theme, params, getRef) => {
    // const icon: string = getRef('icon')

    return {
      navbar: {
        position: "sticky",
        top: 0,
        width: params?.collapsed ? 280 : 80,

        transition: params?.collapsed
          ? "width 0.2s linear"
          : "width 0.2s linear",
        backgroundColor: Colors.primary_white,
      },

      header: {
        paddingBottom: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        marginBottom: theme.spacing.md,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
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
        width: "100%",
        textDecoration: "none",
        padding: `${theme.spacing.xs} ${theme.spacing.md}`,
        color: Colors.dark_text,
        fontSize: theme.fontSizes.sm,
        borderLeft: "3px solid transparent",
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "light"
              ? theme.colors.dark[7]
              : Colors.hover_gray,
          color:
            theme.colorScheme === "light" ? theme.white : Colors.primary_gold,
          borderLeft: `3px solid ${Colors.primary_gold}`,
        },
        transition: "all .3s ease",
      },

      link: {
        ...theme.fn.focusStyles(),
        width: "100%",
        display: "flex",
        alignItems: "center",
        columnGap: theme.spacing.sm,
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: "#000",
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        borderLeft: `1px solid ${
          theme.colorScheme === "light"
            ? theme.colors.dark[4]
            : Colors.hover_gray
        }`,
        "&:hover": {
          backgroundColor: theme.colors.gray[0],
          color: theme.black,

          // [`& .${icon}`]: {
          //   color: theme.black,
          // },
        },
      },

      subLink: {
        ...theme.fn.focusStyles(),
        width: "100%",
        display: "flex",
        alignItems: "center",
        columnGap: theme.spacing.sm,
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: "#000",
        padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
        paddingLeft: 31,
        marginLeft: 30,
        borderRadius: theme.radius.sm,
        fontWeight: 500,
        borderLeft: `1px solid ${
          theme.colorScheme === "light"
            ? theme.colors.dark[4]
            : Colors.hover_gray
        }`,
        "&:hover": {
          backgroundColor:
            theme.colorScheme === "light"
              ? theme.colors.dark[7]
              : Colors.hover_gray,
          color:
            theme.colorScheme === "light" ? theme.white : Colors.primary_gold,
        },
      },

      linkActive: {
        "&, &:hover": {
          backgroundColor:
            theme.colorScheme === "light"
              ? theme.colors.dark[7]
              : Colors.hover_gray,
          color:
            theme.colorScheme === "light" ? theme.white : Colors.primary_gold,
          borderLeft: `3px solid ${Colors.primary_gold}`,
        },
      },

      linkIcon: {
        // ref: icon,
        color: theme.colors.gray[6],
      },

      linkLabel: params?.collapsed ? {} : { display: "none" },
      linkSubLabel: params?.collapsed
        ? { fontWeight: 500 }
        : { display: "none" },
    };
  }
);

export const SideNav: FC<{ className?: string }> = ({ className }) => {
  const [collapsed, handlers] = useDisclosure(true);
  const [openedInbox, openInbox] = useState(true);
  const [opened, open] = useState<any[]>([]);
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
            <Link href={getPath("index")}>
              <span className={classes.logo}>
                <span className={classes.linkLabel} style={{ fontSize: 20 }}>
                  DeHoli
                </span>
              </span>
            </Link>
            <Burger
              color={"#000"}
              sx={{ paddingLeft: "10px" }}
              onClick={handlers.toggle}
              opened={collapsed}
            />
          </Group>
          <div onClick={() => openInbox((pre) => !pre)}>
            <span
              className={classes.logo}
              style={{ cursor: "pointer" }}
              onClick={() => router.push({ pathname: "/" })}
            >
              <span className={classes.linkLabel} style={{ fontSize: 20 }}>
                Inbox
              </span>
            </span>
            <ChevronIcon
              // className={'text-white'}
              size={14}
              style={{
                color: "#000",
                transform: openedInbox
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          </div>
          <Collapse in={openedInbox}>
            <LinksGroup
              id={"inbox"}
              label={"Inbox"}
              icon={"fa-envelope"}
              href={"/"}
              hasLinks={false}
              collapsed={collapsed}
              handlers={handlers}
            />
          </Collapse>
        </Navbar.Section>
      </Navbar>
    </>
  );
};
