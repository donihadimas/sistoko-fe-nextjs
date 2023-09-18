import { getPath } from "@/lib/const/path";
import {
  ActionIcon,
  Autocomplete,
  Avatar,
  Box,
  Flex,
  Group,
  Indicator,
  Menu,
  Text,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Bell, Logout, Search } from "tabler-icons-react";

export const Header: FC<{ left: ReactNode }> = ({ left }) => {
  return (
    <Box
      component="header"
      sx={() => ({
        height: "10vh",
      })}
      className="noPrint"
    >
      <Box
        component="div"
        sx={(theme) => ({
          padding: `${theme.spacing.md} ${theme.spacing.md}`,
          // height: "10%",
          borderBottom: `1px solid ${theme.colors.gray[2]}`,
          backgroundColor: theme.white,
        })}
      >
        <Group spacing="md" noWrap>
          {left}
          <SearchForm />
          {/* <Notification /> */}
          <UserMenu />
        </Group>
      </Box>
    </Box>
  );
};

const SearchForm: FC = () => {
  return (
    <Autocomplete
      data={[]}
      size="lg"
      placeholder="Search"
      icon={<Search size={18} />}
      styles={{
        root: { flexGrow: 1 },
        input: { border: 0, backgroundColor: "transparent" },
      }}
      onChange={(value) => {}}
    />
  );
};

const Notification: FC = () => {
  return (
    <Indicator inline size={14} offset={4} color="red" withBorder>
      <Link href={getPath("notification")} passHref>
        <ActionIcon component="a" radius="xl" size={40}>
          <Bell />
        </ActionIcon>
      </Link>
    </Indicator>
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
        // size="lg"
        position="bottom"
        // placement="end"
        transitionProps={{ transition: "pop-top-right" }}
        // transition="pop-top-right"
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
              color: "gray",
              fontSize: "10pt",
              fontWeight: "bold",
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
          <Menu.Item icon={<Logout size={14} />} onClick={() => {}}>
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </>
  );
};
