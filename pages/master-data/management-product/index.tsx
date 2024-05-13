import { PageContainer, PageContent } from "@/components/core";
import { DashboardLayout } from "@/layout/modules";
import { Stack, Text } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";
import { Heading } from "tabler-icons-react";

const ManagementProduct: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Manajemen Produk" fluid>
        <Stack gap="md">
          <PageContent title="">
            <Text>Manajemen Produk Halaman</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

ManagementProduct.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "management-product",
        action: "list",
      },
    },
  };
};

export default ManagementProduct;
