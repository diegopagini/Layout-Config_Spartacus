import { LayoutConfig } from '@spartacus/storefront';

export const CustomConfig: LayoutConfig = {
  layoutSlots: {
    header: {
      lg: {
        slots: ['SiteLogo', 'SearchBox', 'SiteLogin'],
        //De esta forma estoy definiendo solo los componentes que se van a ver en esta vista: "lg"
      },
      xs: {
        slots: ['SearchBox', 'MiniCart'],
        //En este tamaño solo deje disponible esos dos componentes para que se vean.
      },
    },
    LandingPage2Template: {
      lg: {
        slots: ['Section5'],
        //Justamente esta pagina no tiene mucho para ver en esta vista, pero quite todo el resto
      },
    },
    ContentPage1Template: {
      xs: {
        slots: ['Section2A'],
        //Deje un solo componente, al parecer tambien reconoce las rutas
      },
      lg: {
        slots: ['Section2a', 'Section2B'],
        //En la vista "lg": tambien se podria ver ahora la Section2B
      },
    },
  },
};
