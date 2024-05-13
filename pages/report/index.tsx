import { PageContainer, PageContent } from "@/components/core";
import { DashboardLayout } from "@/layout/modules";
import { Stack, Text } from "@mantine/core";
import {
  CustomNextPage,
  GetStaticProps,
  InferGetServerSidePropsType,
} from "next";

const Report: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Laporan" fluid>
        <Stack gap="md">
          <PageContent title="">
            <Text>Report Page</Text>
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};

Report.getLayout = DashboardLayout;

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      claimType: {
        page: "report",
        action: "list",
      },
    },
  };
};

export default Report;
