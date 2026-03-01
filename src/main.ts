import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { AppComponent } from './app/app.component';
import {providePrimeNG} from "primeng/config";
import Aura from '@primeng/themes/aura';
import {definePreset} from "@primeng/themes";
const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '{orange.50}',
      100: '{orange.100}',
      200: '{orange.200}',
      300: '{orange.300}',
      400: '{orange.400}',
      500: '{orange.500}',
      600: '{orange.600}',
      700: '{orange.700}',
      800: '{orange.800}',
      900: '{orange.900}',
      950: '{orange.950}'
    }
  }
});


bootstrapApplication(AppComponent, {
  providers: [provideAnimations(),
    providePrimeNG({
    theme: {
      preset: MyPreset
    }
  })]
});
