import { getPath } from "@/lib/const/path";

export type ParameterType = {
  action: string;
};
export type MenuType = {
  id: string;
  label: string;
  icon?: string;
  href?: string;
  parameter?: ParameterType;
  links?: MenuType[];
};
export const MenuItem: MenuType[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "bi:house-check",
    href: getPath("dashboard"),
  },
  {
    id: "transactions_sales",
    label: "Penjualan",
    icon: "bi:cart",
    href: getPath("transactions_sales"),
  },
  {
    id: "transactions_purchase",
    label: "Pembelian",
    icon: "bi:bag",
    href: getPath("transactions_purchase"),
  },
  {
    id: "report",
    label: "Laporan",
    icon: "bi:list-check",
    href: getPath("report"),
  },
  {
    id: "master_data",
    label: "Master Data",
    icon: "bi:database-gear",
    links: [
      {
        id: "md_management_category_product",
        label: "Manajemen Kategori Produk",
        icon: "bi:database-gear",
        href: getPath("md_management_category_product"),
        parameter: { action: "list" },
      },
      {
        id: "md_management_product",
        label: "Manajemen Produk",
        icon: "bi:database-gear",
        href: getPath("md_management_product"),
        parameter: { action: "list" },
      },
      {
        id: "md_management_supplier",
        label: "Manajemen Supplier",
        icon: "bi:database-gear",
        href: getPath("md_management_supplier"),
        parameter: { action: "list" },
      },
      {
        id: "md_management_stock",
        label: "Manajemen Stok",
        icon: "bi:database-gear",
        href: getPath("md_management_stock"),
        parameter: { action: "list" },
      },
      {
        id: "md_management_employee",
        label: "Manajemen Karyawan",
        icon: "bi:database-gear",
        href: getPath("md_management_employee"),
        parameter: { action: "list" },
      },
    ],
  },
];
