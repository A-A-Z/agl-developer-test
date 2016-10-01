import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './components/app/app.component';
//import { RequestService } from './services/request.service';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [ AppComponent ],
    imports: [ BrowserModule, ReactiveFormsModule, HttpModule, JsonpModule ]
})

export class AppModule {}
