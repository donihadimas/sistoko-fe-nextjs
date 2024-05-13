import { ActionIcon, Group, HoverCard, Indicator, Text } from "@mantine/core";
import { FC } from "react";
import { Bell } from "tabler-icons-react";

export const NotificationHoverCard: FC = () => {
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
