import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './src/module';
import { CONFIG } from './configs/system/main';
import 'hammerjs';

if (CONFIG.environment === 'PRODUCTION') {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
