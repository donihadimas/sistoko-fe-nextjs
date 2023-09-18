import { Box, Group } from "@mantine/core";
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
          <span style={{ color: "blue", fontWeight: "bold" }}>
            DeHoli @ 2023
          </span>
        </Group>
      </Box>
    </>
  );
};

type TUserMenuProps = {
  userName: string;
};
