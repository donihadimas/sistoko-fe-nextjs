import { PageContainer } from "@/components/core/sidebar/PageContainer";
import { PageContent } from "@/components/core/sidebar/PageContent";
import { DashboardLayout } from "@/layout/Dashboard/DashboardLayout";
import { Stack, Text } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import { Heading } from "tabler-icons-react";

const Dashboard: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Dashboard" fluid>
        <Stack spacing="md">
          <PageContent title="">
            <Text>Transaction Dashboard Page</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

Dashboard.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "dashboard",
        action: "list",
      },
    },
  };
};

export default Dashboard;
