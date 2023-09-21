import { CustomNextPage } from "next";
import { DashboardLayout } from "@/layout/Dashboard/DashboardLayout";
import { useRouter } from "next/router";
import { getPath } from "@/lib/const/path";
import { useEffect } from "react";

const Index: CustomNextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(getPath("dashboard"));
  }, []);
  return <></>;
};
Index.getLayout = DashboardLayout;

export default Index;
