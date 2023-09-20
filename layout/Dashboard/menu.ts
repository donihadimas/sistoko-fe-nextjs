import { getPath } from "@/lib/const/path";
import { IconX } from "@tabler/icons-react";

export const MenuItem = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "bi:house-check",
    href: getPath("dashboard"),
    // parameter: { action: "list" },
  },
  {
    id: "transactions_sales",
    label: "Penjualan",
    icon: "bi:cart",
    href: getPath("transactions_sales"),
    // parameter: { action: "list" },
  },
  {
    id: "transactions_purchase",
    label: "Pembelian",
    icon: "bi:bag",
    href: getPath("transactions_purchase"),
    // parameter: { action: "list" },
  },
  {
    id: "report",
    label: "Laporan",
    icon: "bi:list-check",
    href: getPath("report"),
    // parameter: { action: "list" },
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
        href: getPath("md_management_product"),
        parameter: { action: "list" },
      },
      {
        id: "md_management_supplier",
        label: "Manajemen Supplier",
        href: getPath("md_management_supplier"),
        parameter: { action: "list" },
      },
      {
        id: "md_management_stock",
        label: "Manajemen Stok",
        href: getPath("md_management_stock"),
        parameter: { action: "list" },
      },
    ],
  },
];

export type TMenu = typeof MenuItem;
