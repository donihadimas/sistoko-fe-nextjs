import { PageContainer, PageContent } from "@/components/core";
import { TableCategoryProduct } from "@/components/modules";
import { DashboardLayout } from "@/layout/modules";
import { Stack } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";

const ManagementCategoryProduct: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Manajemen Kategori Produk" fluid>
        <Stack gap="md">
          <PageContent title="">
            <TableCategoryProduct />
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
