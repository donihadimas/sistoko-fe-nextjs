import { PageContainer } from "@/components/core/sidebar/PageContainer";

import { DashboardLayout } from "@/layout/Dashboard/DashboardLayout";
import { Box, SimpleGrid, Text } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";

const Dashboard: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Dashboard" fluid withTime>
        <SimpleGrid cols={3} spacing={2}>
          <Box>
            <Text>THIS IS IT</Text>
          </Box>
        </SimpleGrid>
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
