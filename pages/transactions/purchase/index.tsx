import { PageContainer, PageContent } from "@/components/core";
import { DashboardLayout } from "@/layout/modules";
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
      <PageContainer title="Pembelian" fluid withTime>
        <Stack gap="md">
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
