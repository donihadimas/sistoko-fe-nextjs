import { CustomNextPage } from "next";
import Head from "next/head";
import LandingPageTemplate from "../templates/LandingPage/LandingPageTemplate";
import { DashboardLayout } from "@/layout/Dashboard/DashboardLayout";
import { PageContainer } from "@/components/core/sidebar/PageContainer";
import { Center, Stack, Title } from "@mantine/core";
import { PageContent } from "@/components/core/sidebar/PageContent";

const Index: CustomNextPage = () => {
  return (
    <>
      <PageContainer title="" fluid>
        <Stack spacing="xl">
          <PageContent title="">
            <SampleTable />
          </PageContent>
        </Stack>
      </PageContainer>
    </>
  );
};
const SampleTable = () => {
  return (
    <Center>
      <Title order={2}>Welcome to Sistem Informasi Toko - DeHoli</Title>
    </Center>
  );
};
Index.getLayout = DashboardLayout;

export default Index;
