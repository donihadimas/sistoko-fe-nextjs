import { PageContainer } from "@/components/core/sidebar/PageContainer";
import { PageContent } from "@/components/core/sidebar/PageContent";
import { DashboardLayout } from "@/layout/Dashboard/DashboardLayout";
import { Stack, Text } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";

const Purchase: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Pembelian" fluid>
        <Stack spacing="md">
          <PageContent title="">
            <Text>Transaction Purchase Page</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

Purchase.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "purchase",
        action: "list",
      },
    },
  };
};

export default Purchase;
