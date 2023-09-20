import { useStyles } from "@/layout/Dashboard/SideNav";
import { Colors } from "@/lib/const/color";
import { Icon } from "@iconify/react";
import {
  Collapse,
  createStyles,
  getStylesRef,
  Group,
  Text,
  Tooltip,
  UnstyledButton,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { SVGAttributes, useState } from "react";
import { ChevronLeft, ChevronRight } from "tabler-icons-react";

interface LinksGroupProps {
  icon: string;
  label: string;
  links?: {
    label: string;
    href: string;
    icon: string;
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
              <div className={classes.linkLabel}>{label}</div>
            </Group>
          </a>

          {hasLinks && collapsed && (
            <ChevronIcon
              className={classes.chevron}
              size={18}
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
