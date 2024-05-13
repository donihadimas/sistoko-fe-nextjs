import { AppShell, Group, Text } from "@mantine/core";
import { FC } from "react";
export const Footer: FC<{}> = () => {
  return (
    <AppShell.Footer p="md">
      <Group justify="flex-end">
        <Text
          style={{
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          DeHoli Super Apps - Sistoko @ 2024 - All Rights Reserved
        </Text>
      </Group>
    </AppShell.Footer>
  );
};
