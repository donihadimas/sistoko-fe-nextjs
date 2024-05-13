import { PageContainer, PageContent } from "@/components/core";
import { DashboardLayout } from "@/layout/modules";
import { Stack, Text } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";

const ManagementSupplier: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Manajemen Supplier" fluid>
        <Stack gap="md">
          <PageContent title="">
            <Text>Manajemen Supplier Page</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

ManagementSupplier.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "management-supplier",
        action: "list",
      },
    },
  };
};

export default ManagementSupplier;
