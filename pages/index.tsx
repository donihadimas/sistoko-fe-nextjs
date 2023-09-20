import { CustomNextPage } from "next";
import { DashboardLayout } from "@/layout/Dashboard/DashboardLayout";
import { PageContainer } from "@/components/core/sidebar/PageContainer";
import { Center, Stack, Title } from "@mantine/core";
import { PageContent } from "@/components/core/sidebar/PageContent";

const Index: CustomNextPage = () => {
  return <></>;
};
Index.getLayout = DashboardLayout;

export default Index;
