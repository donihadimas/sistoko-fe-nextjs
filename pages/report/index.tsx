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

const Report: CustomNextPage = ({
  encryptedId,
}: InferGetServerSidePropsType<typeof getStaticProps>) => {
  return (
    <>
      <PageContainer title="Laporan" fluid>
        <Stack spacing="md">
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
