import { Colors } from "@/lib/const/color";
import { getPath } from "@/lib/const/path";
import {
  ActionIcon,
  AppShell,
  Avatar,
  Burger,
  Button,
  Group,
  HoverCard,
  Image,
  Indicator,
  Menu,
  Stack,
  Text,
  Tooltip,
  UnstyledButton,
  rem,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { Spotlight, SpotlightActionData, spotlight } from "@mantine/spotlight";
import {
  IconDashboard,
  IconFileText,
  IconHome,
  IconMoon,
  IconSearch,
  IconSun,
} from "@tabler/icons-react";
import cx from "clsx";
import { useRouter } from "next/router";
import { FC } from "react";
import { Bell, Logout, Settings } from "tabler-icons-react";
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
  const actions: SpotlightActionData[] = [
    {
      id: "home",
      label: "Home",
      description: "Get to home page",
      onClick: () => console.log("Home"),
      leftSection: (
        <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
      ),
    },
    {
      id: "dashboard",
      label: "Dashboard",
      description: "Get full information about current system status",
      onClick: () => console.log("Dashboard"),
      leftSection: (
        <IconDashboard
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
    {
      id: "documentation",
      label: "Documentation",
      description: "Visit documentation to lean more about all features",
      onClick: () => console.log("Documentation"),
      leftSection: (
        <IconFileText
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
  ];
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
              <SearchForm />
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

const SearchForm: FC = () => {
  const actions: SpotlightActionData[] = [
    {
      id: "home",
      label: "Home",
      description: "Get to home page",
      onClick: () => console.log("Home"),
      leftSection: (
        <IconHome style={{ width: rem(24), height: rem(24) }} stroke={1.5} />
      ),
    },
    {
      id: "dashboard",
      label: "Dashboard",
      description: "Get full information about current system status",
      onClick: () => console.log("Dashboard"),
      leftSection: (
        <IconDashboard
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
    {
      id: "documentation",
      label: "Documentation",
      description: "Visit documentation to lean more about all features",
      onClick: () => console.log("Documentation"),
      leftSection: (
        <IconFileText
          style={{ width: rem(24), height: rem(24) }}
          stroke={1.5}
        />
      ),
    },
  ];
  return (
    <>
      <Tooltip label="Search (Ctrl + K)">
        <ActionIcon
          onClick={spotlight.open}
          variant="outline"
          color="gray"
          size="lg"
          radius="xl"
          aria-label="Search"
        >
          <IconSearch size={18} />
        </ActionIcon>
      </Tooltip>
      <Spotlight
        actions={actions}
        nothingFound="Nothing found..."
        highlightQuery
        searchProps={{
          leftSection: (
            <IconSearch
              style={{ width: rem(20), height: rem(20) }}
              stroke={1.5}
            />
          ),
          placeholder: "Search...",
        }}
      />
    </>
  );
};

const NotificationHoverCard: FC = () => {
  return (
    <Group>
      <HoverCard>
        <HoverCard.Target>
          <Indicator inline size={10} offset={4} color="red" withBorder>
            <ActionIcon
              component="a"
              radius="xl"
              variant="outline"
              size={"lg"}
              color={"gray"}
            >
              <Bell size={18} />
            </ActionIcon>
          </Indicator>
        </HoverCard.Target>
        <HoverCard.Dropdown>
          <Text size="sm">Ini adalah Notification</Text>
        </HoverCard.Dropdown>
      </HoverCard>
    </Group>
  );
};

const DarkModeToggle: FC = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  return (
    <Tooltip
      label={computedColorScheme === "light" ? "Dark Mode" : "Light Mode"}
    >
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="outline"
        size="lg"
        aria-label="Toggle color scheme"
        radius={"xl"}
        color="gray"
      >
        {computedColorScheme === "light" ? (
          <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
        ) : (
          <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};
type TUserMenuProps = {
  userName?: string;
  position?: string;
};

const UserMenu: FC<TUserMenuProps> = ({ userName, position }) => {
  const router = useRouter();

  return (
    <>
      <Menu
        position="bottom"
        transitionProps={{ transition: "pop-top-right" }}
        width={150}
      >
        <Stack gap={0}>
          <Text style={{ fontWeight: "bold", textAlign: "right" }}>
            {userName}
          </Text>
          <Text
            style={{
              color: Colors.primary_gray,
              fontSize: "9pt",
              fontWeight: "normal",
              textAlign: "right",
              fontStyle: "italic",
            }}
          >
            {position}
          </Text>
        </Stack>
        <Menu.Target>
          <UnstyledButton>
            <Avatar
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              variant="outline"
              radius="xl"
            />
          </UnstyledButton>
        </Menu.Target>
        <Menu.Dropdown style={{ zIndex: 1000 }}>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            leftSection={<Settings size={14} />}
            onClick={() => {
              router.push(getPath("settings"));
            }}
          >
            Settings
          </Menu.Item>
          <Menu.Item
            leftSection={<Logout size={14} />}
            onClick={() => {
              showNotification({
                id: "logout",
                withCloseButton: true,
                autoClose: 2000,
                title: "Feature still in development",
                message: "coming soon...",
                loading: true,
                color: "blue",
              });
            }}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
