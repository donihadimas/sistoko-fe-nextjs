import {
  Anchor,
  Breadcrumbs,
  Container,
  ContainerProps,
  Group,
  SimpleGrid,
  Space,
  Title,
} from "@mantine/core";

import Link from "next/link";
import { FC, ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  ContextProvider?: any;
  title: string;
  items?: { label: string; href: string }[];
  withTime?: boolean;
} & Pick<ContainerProps, "fluid">;

export const PageContainer: FC<PageContainerProps> = ({
  children,
  title,
  items,
  fluid,
  ContextProvider,
}) => {
  return (
    <>
      {ContextProvider ? (
        <ContextProvider>
          <Container px={0} fluid={fluid}>
            {items && items.length > 0 ? (
              <Breadcrumbs>
                {items.map((item) => (
                  <Link key={item.label} href={item.href} passHref>
                    <Anchor>{item.label}</Anchor>
                  </Link>
                ))}
              </Breadcrumbs>
            ) : null}

            <SimpleGrid cols={2}>
              <Title order={1}>{title}</Title>
            </SimpleGrid>

            <Space h="xl" />

            {children}
          </Container>
        </ContextProvider>
      ) : (
        <Container px={0} py={"sm"} fluid={fluid}>
          {items && items.length > 0 ? (
            <Breadcrumbs>
              {items.map((item) => (
                <Link key={item.label} href={item.href} passHref>
                  <Anchor>{item.label}</Anchor>
                </Link>
              ))}
            </Breadcrumbs>
          ) : null}

          <Group justify="space-between">
            <Title order={2}>{title}</Title>
          </Group>

          <Space h={"xs"} />

          {children}
        </Container>
      )}
    </>
  );
};
