import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideExperimentalZonelessChangeDetection } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    provideClientHydration(),
    provideExperimentalZonelessChangeDetection(),
  ],
}).catch((err) => console.error(err));
