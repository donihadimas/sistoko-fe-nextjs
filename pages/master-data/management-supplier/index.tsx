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

const ManagementSupplier: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Manajemen Supplier" fluid>
        <Stack spacing="md">
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
