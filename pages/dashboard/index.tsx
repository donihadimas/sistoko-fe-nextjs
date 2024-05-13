import { PageContainer } from "@/components/core";
import { DashboardLayout } from "@/layout/modules";

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
      <PageContainer title="Dashboard" fluid>
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

const getStaticProps: GetStaticProps = async () => {
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
