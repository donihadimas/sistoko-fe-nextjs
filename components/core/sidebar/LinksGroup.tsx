import { Colors } from "@/lib/const/color";
import { Icon } from "@iconify/react";
import {
  Collapse,
  createStyles,
  getStylesRef,
  Group,
  Text,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { SVGAttributes, useState } from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

const useStyles = createStyles<
  string,
  { collapsed?: boolean; opened?: boolean }
>((theme, params): any => {
  const icon: string = getStylesRef("icon");

  return {
    navbar: {
      position: "sticky",
      top: 0,
      width: params?.collapsed ? 264 : 81,
      transition: params?.collapsed ? "width 0.1s linear" : "none",
      backgroundColor: Colors.dark_text,
    },

    header: {
      paddingBottom: theme.spacing.xs,
      marginBottom: theme.spacing.md,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },

    footer: {
      paddingTop: theme.spacing.xs,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
    },

    logo: {
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
      fontWeight: 700,
    },
    control: {
      fontWeight: 500,
      display: "block",
      width: params.collapsed ? "100%" : 0,
      textDecoration: "none",
      padding: `${theme.spacing.lg} ${theme.spacing.md}`,
      color:
        theme.colorScheme === "light"
          ? theme.colors.dark[0]
          : Colors.light_text,
      fontSize: theme.fontSizes.sm,
      borderLeft: "3px solid transparent",
      "&:hover": {
        // width: params?.collapsed && 264,
        // position: "fixed",
        backgroundColor:
          theme.colorScheme === "light"
            ? theme.colors.dark[7]
            : Colors.primary_blue,
        color:
          theme.colorScheme === "light" ? theme.white : Colors.primary_gold,
        borderLeft: `3px solid ${Colors.primary_gold}`,
      },
      // transition: "all .3s ease",
    },
    link: {
      ...theme.fn.focusStyles(),
      width: params.collapsed ? "100%" : 0,
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
        theme.colorScheme === "light" ? theme.colors.dark[4] : Colors.hover_gray
      }`,
      "&:hover": {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${icon}`]: {
          color: theme.black,
        },
      },
    },
    subLink: {
      ...theme.fn.focusStyles(),
      width: "80%",
      display: params.opened && params.collapsed ? "flex" : "none",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: "#000",
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      paddingLeft: params?.collapsed ? 31 : 0,
      marginLeft: params?.collapsed ? 30 : 0,
      borderRadius: theme.radius.sm,
      fontWeight: 500,
      cursor: "pointer",
      "&:hover": {
        backgroundColor:
          theme.colorScheme === "light"
            ? theme.colors.dark[7]
            : Colors.hover_gray,
        color:
          theme.colorScheme === "light" ? theme.white : Colors.primary_gold,
      },
      borderLeft: `1px solid ${
        params?.collapsed ? Colors.hover_gray : theme.colors.dark[4]
      }`,
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

      backgroundColor:
        theme.colorScheme === "light"
          ? theme.colors.dark[7]
          : Colors.hover_gray,
      color: theme.colorScheme === "light" ? theme.white : Colors.primary_gold,

      borderLeft: `1px solid ${
        params?.collapsed ? Colors.hover_gray : theme.colors.dark[4]
      }`,
    },
    linkActive: {
      fontWeight: 500,
      display: "block",
      width: params.collapsed ? "100%" : 0,
      textDecoration: "none",
      padding: `${theme.spacing.lg} ${theme.spacing.md}`,

      fontSize: theme.fontSizes.sm,

      // width: params?.collapsed && 264,
      // position: "fixed",
      backgroundColor:
        theme.colorScheme === "light"
          ? theme.colors.dark[7]
          : Colors.primary_blue,
      color: theme.colorScheme === "light" ? theme.white : Colors.primary_gold,
      borderLeft: `5px solid ${Colors.primary_gray}`,

      // transition: "all .3s ease",
    },
    linkIcon: {
      ref: icon,
      color: theme.colors.gray[6],
    },
    linkLabel: params?.collapsed ? "" : { display: "none" },
    // "&:hover": {
    //   color: theme,
    // },
  };
});

interface LinksGroupProps {
  icon: string;
  label: string;
  links?: {
    label: string;
    href: string;
    parameter?: Array<Record<string, string>>;
    query?: string;
  }[];
  color?: string;
  query?: string;
  parameter?: Record<string, string>;
  collapsed?: any;
  handlers?: any;
  href: any;
  zone?: boolean;
}

interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

// const paramsPart = (params: Array<Record<string, string>> | undefined) => {
const paramsPart = (params: any | undefined) => {
  if (!params) return;
  const encoded = Object.keys(params).map(
    (key: string) =>
      encodeURIComponent(key) + "=" + encodeURIComponent(params[key])
  );
  return encoded.join("&");
};

export const LinksGroup: React.FC<any> = ({
  icon,
  label,
  links,
  collapsed,
  handlers,
  href,
  zone,
  parameter = {},
}: LinksGroupProps) => {
  const [opened, setOpened] = useState(false);
  const { classes, theme } = useStyles({ collapsed, opened });
  const hasLinks = Array.isArray(links);
  const ChevronIcon = theme.dir === "ltr" ? ChevronRight : ChevronLeft;
  const router = useRouter();
  const currentRoute = router.pathname;
  const items = (hasLinks ? links : []).map((link: any) => (
    <div
      onClick={() =>
        zone
          ? window.location.replace(
              process.env.NEXT_PUBLIC_MULTIZONE_HOST + link.href
            )
          : router.push({ pathname: link.href, query: parameter })
      }
      key={link.label}
    >
      <Text
        className={
          currentRoute === link.href ? classes.subLinkActive : classes.subLink
        }
        cy-data={link.label}
      >
        {link.label}
      </Text>
    </div>
  ));

  // useEffect(() => {
  //   console.log("CLAIMS: ", claims)
  // }, [])

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (hasLinks) {
            handlers.open();
            setOpened((o: boolean) => !o);
          } else
            zone
              ? window.location.replace(
                  process.env.NEXT_PUBLIC_MULTIZONE_HOST + href
                )
              : router.push({ pathname: href, query: parameter });
        }}
        className={
          currentRoute.startsWith(href) ? classes.linkActive : classes.control
        }
        cy-data={hasLinks ? label : href}
      >
        <Group position="apart" align={"center"}>
          <a>
            <Group
              position="apart"
              style={{ flexWrap: "nowrap" }}
              align={"center"}
            >
              <Icon icon={icon} width={16} />
              {/* {!collapsed ? ( */}
              <div className={classes.linkLabel}>{label}</div>
              {/* ) : (
                ""
              )} */}
            </Group>
          </a>

          {hasLinks && collapsed && (
            <ChevronIcon
              className={classes.chevron}
              size={14}
              style={{
                transform: opened
                  ? `rotate(${theme.dir === "rtl" ? -90 : 90}deg)`
                  : "none",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? <Collapse in={opened}>{items}</Collapse> : null}
    </>
  );
};
