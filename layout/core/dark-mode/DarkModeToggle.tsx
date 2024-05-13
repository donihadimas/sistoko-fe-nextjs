import { ActionIcon, Tooltip } from "@mantine/core";
import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { FC } from "react";

export const DarkModeToggle: FC = () => {
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
          <IconMoon stroke={1.5} />
        ) : (
          <IconSun stroke={1.5} />
        )}
      </ActionIcon>
    </Tooltip>
  );
};
