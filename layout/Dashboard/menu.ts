import { getPath } from "@/lib/const/path";

export const MenuItem = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "fa:id-card",
    href: getPath("index"),
    // parameter: { action: "list" },
  },
  {
    id: "notification",
    label: "Notifikasi",
    icon: "fa:id-card",
    href: getPath("notification"),
    // parameter: { action: "list" },
  },
  {
    id: "notification",
    label: "Notifikasi",
    icon: "fa:id-card",
    href: getPath("notification"),
    // parameter: { action: "list" },
  },
  {
    id: "notification",
    label: "Notifikasi",
    icon: "fa:id-card",
    href: getPath("notification"),
    // parameter: { action: "list" },
  },
  {
    id: "settings",
    label: "Settings",
    icon: "bi:gear-wide",
    links: [
      {
        id: "setting_action",
        label: "Action",
        href: getPath("UMKM_actionSetting"),
        parameter: { action: "list" },
      },
      {
        id: "setting_pages",
        label: "Pages",
        href: getPath("UMKM_pagesSetting"),
        parameter: { action: "list" },
      },
      {
        id: "setting_setup_page_action",
        label: "Setup Page Action",
        href: getPath("UMKM_setupPageAction"),
      },
    ],
  },
];

export const menuItems: { [name: string]: { title: string; menu: TMenu } } = {
  commercial: {
    title: "Komersial",
    menu: MenuItem,
  },
};

export type TMenu = typeof MenuItem;
