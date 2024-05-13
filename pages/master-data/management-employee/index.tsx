import { PageContainer, PageContent } from "@/components/core";
import { TableEmployee } from "@/components/modules";
import { DashboardLayout } from "@/layout/modules";
import { Stack } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";

const ManagementEmployee: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Manajemen Karyawan" fluid>
        <Stack gap="md">
          <PageContent title="">
            <TableEmployee />
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

ManagementEmployee.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "management-employee",
        action: "list",
      },
    },
  };
};

export default ManagementEmployee;
