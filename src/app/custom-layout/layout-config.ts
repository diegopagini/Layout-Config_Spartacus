import { LayoutConfig } from '@spartacus/storefront';

export const CustomConfig: LayoutConfig = {
  layoutSlots: {
    header: {
      lg: {
        slots: ['SiteLogo', 'SearchBox', 'SiteLogin'],
        //De esta forma estoy definiendo solo los componentes que se van a ver en esta vista: "lg"
      },
    },
  },
};
