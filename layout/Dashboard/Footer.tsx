import { Colors } from "@/lib/const/color";
import { Box, Group, Text } from "@mantine/core";
import { FC } from "react";
export const Footer: FC<{}> = () => {
  return (
    <>
      <Box
        component="footer"
        sx={(theme) => ({
          padding: `${theme.spacing.sm} ${theme.spacing.md}`,
          position: "relative",
          left: 0,
          bottom: 0,
          right: 0,
          borderTop: `1px solid ${theme.colors.gray[2]}`,
          backgroundColor: theme.colors.gray[2],
        })}
      >
        <Group spacing="md" noWrap position="right">
          <Text
            style={{
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            DeHoli Store @ 2023 - All Rights Reserved
          </Text>
        </Group>
      </Box>
    </>
  );
};

type TUserMenuProps = {
  userName: string;
};
