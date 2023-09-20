import { Colors } from "@/lib/const/color";
import { getPath } from "@/lib/const/path";
import {
  ActionIcon,
  Autocomplete,
  Avatar,
  Box,
  Flex,
  Group,
  HoverCard,
  Indicator,
  Menu,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Bell, Logout, Search, Settings } from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";

export const Header: FC<{ left: ReactNode }> = ({ left }) => {
  return (
    <Box
      component="header"
      sx={() => ({
        height: "8vh",
      })}
      className="noPrint"
    >
      <Box
        component="div"
        sx={(theme) => ({
          padding: `${theme.spacing.md} ${theme.spacing.md}`,
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
          backgroundColor: theme.white,
        })}
      >
        <Group spacing="md" noWrap>
          {left}
          <SearchForm />
          <NotificationHoverCard />
          <UserMenu userName="Doni Hadimas" position="Administrator" />
        </Group>
      </Box>
    </Box>
  );
};

const SearchForm: FC = () => {
  return (
    <Autocomplete
      data={[]}
      size="md"
      placeholder="Produk Tidak ditemukan? Cari Disini!"
      icon={<Search size={18} />}
      styles={{
        root: { flexGrow: 1 },
        input: {
          border: 0,
          backgroundColor: "transparent",
        },
      }}
      onChange={(value) => {}}
    />
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
              size={40}
              color={Colors.light_blue}
            >
              <Bell size={20} />
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
        styles={(theme: any) => ({
          label: { fontSize: theme.fontSizes.sm },
          itemLabel: { fontSize: theme.fontSizes.sm },
        })}
      >
        <Flex justify="center" direction="column" wrap="wrap">
          <Text sx={{ fontWeight: "bold", textAlign: "right" }}>
            {userName}
          </Text>
          <Text
            sx={{
              color: Colors.primary_gray,
              fontSize: "9pt",
              fontWeight: "normal",
              textAlign: "right",
              fontStyle: "italic",
            }}
          >
            {position}
          </Text>
        </Flex>
        <Menu.Target>
          <ActionIcon radius="xl" size={40}>
            <Avatar
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              radius="xl"
            />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            icon={<Settings size={14} />}
            onClick={() => {
              showNotification({
                id: "settings",
                withCloseButton: true,
                autoClose: 2000,
                title: "Feature still in development",
                message: "coming soon...",
                loading: true,
                color: "blue",
              });
            }}
          >
            Settings
          </Menu.Item>
          <Menu.Item
            icon={<Logout size={14} />}
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
