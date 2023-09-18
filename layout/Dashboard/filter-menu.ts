import { TMenu } from "./menu";

export const filterMenuByClaims = (menu: TMenu, claims: Array<any>): TMenu => {
  const claimsPage = claims.map((claim) => claim.page?.toLowerCase());

  const claimsFiltered = menu
    .map((parent: any) => {
      type TSubMenu = {
        id: string;
        label: string;
        href: string;
      };

      const subMenuList: Array<any> | null = parent.links ?? null;
      const hasSubMenu: boolean = parent.links ?? false;
      const parentMenu = parent;

      const active: boolean = hasSubMenu
        ? parent.links?.some((child: any) => {
            return claimsPage.includes(child.id);
          })
        : claimsPage.includes(parent.id);

      if (active) {
        if (hasSubMenu) {
          const subMenuListFiltered: Array<any | never> | undefined =
            subMenuList?.filter((subMenu: TSubMenu) => {
              return claimsPage.includes(subMenu.id);
            });

          return {
            ...parent,
            links: subMenuListFiltered,
          };
        } else {
          return claimsPage.includes(parentMenu.id) && parent;
        }
      }
    })
    .filter((item) => item && item);
  return claimsFiltered;
};
