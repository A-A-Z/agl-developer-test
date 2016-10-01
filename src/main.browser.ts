// Import CSS
import './styles/app.scss';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { RequestService } from './services/request.service';

platformBrowserDynamic().bootstrapModule(AppModule);
