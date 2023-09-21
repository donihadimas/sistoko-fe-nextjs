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

const ManagementCategoryProduct: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Manajemen Kategori Produk" fluid>
        <Stack spacing="md">
          <PageContent title="">
            <Text>Manajemen Kategori Produk Page</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

ManagementCategoryProduct.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "management-category-product",
        action: "list",
      },
    },
  };
};

export default ManagementCategoryProduct;
