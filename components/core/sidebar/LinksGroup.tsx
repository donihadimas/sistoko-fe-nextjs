import { ParameterType } from "@/layout/core";
import { Icon } from "@iconify/react";
import { Collapse, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import { useRouter } from "next/router";
import { useState } from "react";
import { ChevronDown } from "tabler-icons-react";
import classes from "./LinksGroup.module.css";

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
  parameter?: ParameterType;
  href: string;
  zone?: boolean;
}

export const LinksGroup: React.FC<any> = ({
  icon,
  label,
  links,
  href,
  zone,
  parameter,
}: LinksGroupProps) => {
  const [opened, setOpened] = useState(false);
  const hasLinks = Array.isArray(links);
  const ChevronIcon = ChevronDown;
  const router = useRouter();
  const currentRoute = router.pathname;
  const items = (hasLinks ? links : []).map((link: any) => (
    <UnstyledButton
      onClick={() =>
        zone
          ? window.location.replace(
              process.env.NEXT_PUBLIC_MULTIZONE_HOST + link.href
            )
          : router.push({ pathname: link.href, query: parameter })
      }
      key={link.label}
      className={currentRoute === link.href ? classes.linkActive : classes.link}
      pl={"xl"}
      pr={"xl"}
    >
      <Group wrap="nowrap">
        <Icon icon={link.icon} width={16} />
        <Text cy-data={link.label} fw={currentRoute === link.href ? 600 : 400}>
          {link.label}
        </Text>
      </Group>
    </UnstyledButton>
  ));

  return (
    <>
      <UnstyledButton
        onClick={() => {
          if (hasLinks) {
            setOpened((o: boolean) => !o);
          } else
            zone
              ? window.location.replace(
                  process.env.NEXT_PUBLIC_MULTIZONE_HOST + href
                )
              : router.push({ pathname: href, query: parameter });
        }}
        className={currentRoute === href ? classes.linkActive : classes.link}
        cy-data={hasLinks ? label : href}
        px={"lg"}
      >
        <Group justify="space-between" align={"center"}>
          <a>
            <Group
              justify="space-between"
              style={{ flexWrap: "nowrap" }}
              align={"center"}
            >
              <Icon icon={icon} width={16} />
              <Text fw={currentRoute === href ? 600 : 400}>{label}</Text>
            </Group>
          </a>

          {hasLinks && (
            <ChevronIcon
              size={18}
              style={{
                transform: opened ? `rotate(-180deg)` : "none",
                transition: "transform 0.3s ease-in-out",
              }}
            />
          )}
        </Group>
      </UnstyledButton>
      {hasLinks ? (
        <Collapse in={opened}>
          <Stack>{items}</Stack>
        </Collapse>
      ) : null}
    </>
  );
};
