//añadimos importProvidersFrom 
import { ApplicationConfig, provideBrowserGlobalErrorListeners, importProvidersFrom  } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

//modulos forms
import { FormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),

    // Para poder usar [(ngModel)] y template-driven forms
    importProvidersFrom(FormsModule),
  ]
};
