import { PageContainer, PageContent } from "@/components/core";
import { DashboardLayout } from "@/layout/modules";
import { Stack, Text } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import { Heading } from "tabler-icons-react";

const ManagementStock: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Manajemen Stok" fluid>
        <Stack gap="md">
          <PageContent title="">
            <Text>Manajemen Stok Page</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

ManagementStock.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "management-stock",
        action: "list",
      },
    },
  };
};

export default ManagementStock;
