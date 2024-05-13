import { Colors, getPath } from "@/lib/const";
import { Avatar, Menu, Stack, Text, UnstyledButton } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import { useRouter } from "next/router";
import { FC } from "react";
import { Logout, Settings } from "tabler-icons-react";

export const UserMenu: FC<TUserMenuProps> = ({ userName, position }) => {
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
type TUserMenuProps = {
  userName?: string;
  position?: string;
};
