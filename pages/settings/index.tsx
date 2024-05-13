import { PageContainer, PageContent } from "@/components/core";
import { DashboardLayout } from "@/layout/modules";
import { Stack, Text } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";

const Settings: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Settings" fluid>
        <Stack gap="md">
          <PageContent title="">
            <Text>Settings Page</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

Settings.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "settings",
        action: "list",
      },
    },
  };
};

export default Settings;
