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

const Sales: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Penjualan" fluid>
        <Stack spacing="md">
          <PageContent title="">
            <Text>Transaction Sales Page</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

Sales.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "sales",
        action: "list",
      },
    },
  };
};

export default Sales;
