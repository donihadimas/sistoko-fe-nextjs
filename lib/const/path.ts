const PATH = {
  dashboard: "/dashboard",

  // ? Transaction
  transactions_sales: "/transactions/sales",
  transactions_purchase: "/transactions/purchase",
  // ? Transaction

  // ? Report
  report: "/report",
  // ? Report

  // ? Master Data
  md_management_category_product: "/master-data/management-category-product",
  md_management_product: "/master-data/management-product",
  md_management_supplier: "/master-data/management-supplier",
  md_management_stock: "/master-data/management-stock",
  md_management_employee: "/master-data/management-employee",
  // ? Master Data

  // ? Settings
  settings: "/settings",
  // ? Settings
} as const;

export const getPath = (pathKey: keyof typeof PATH, ...args: string[]) => {
  const val = PATH[pathKey];

  if (!args) {
    return val;
  }

  const dirs = val.slice(1).split("/");

  const newPath = dirs.map((dir) => {
    if (dir.startsWith("[")) {
      const replaceDir = args[0];
      args.shift();
      return replaceDir;
    }
    return dir;
  });

  return "/" + newPath.join("/");
};
