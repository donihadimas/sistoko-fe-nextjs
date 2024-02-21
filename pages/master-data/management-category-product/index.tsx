import { PageContainer } from "@/components/core/sidebar/PageContainer";
import { PageContent } from "@/components/core/sidebar/PageContent";
import TableCategoryProduct from "@/components/modules/management-category-product/TableCategoryProduct";
import { DashboardLayout } from "@/layout/Dashboard/DashboardLayout";
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
        <Stack spacing="md">
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
