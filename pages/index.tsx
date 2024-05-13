import { DashboardLayout } from "@/layout/modules";
import { getPath } from "@/lib/const";
import { CustomNextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Index: CustomNextPage = () => {
  const router = useRouter();
  useEffect(() => {
    router.push(getPath("dashboard"));
  }, [router]);
  return <></>;
};
Index.getLayout = DashboardLayout;

export default Index;
