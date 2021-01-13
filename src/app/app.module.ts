import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CustomLayoutModule,
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: 'https://molinos-ci.qubikdigital.com:9002/',
          prefix: '/occ/v2/',
        },
      },
      context: {
        currency: ['ARS'],
        language: ['es', 'en'],
        baseSite: ['molinosStore'],
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
      features: {
        level: '2.1',
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
