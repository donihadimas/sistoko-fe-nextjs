import { getPath } from "@/lib/const/path";

export const MenuItem = [
  {
    id: "notification",
    label: "Notifikasi",
    icon: "fa:id-card",
    href: getPath("notification"),
    // parameter: { action: "list" },
  },
];

export const menuItems: { [name: string]: { title: string; menu: TMenu } } = {
  commercial: {
    title: "Komersial",
    menu: MenuItem,
  },
};

export type TMenu = typeof MenuItem;
