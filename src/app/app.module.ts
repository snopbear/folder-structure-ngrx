import { CoreModule } from './core/core.module';
import { BlockModule } from './block/block.module';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './block/root/app.component';
import {AuthModule} from './auth/auth.module'
import { MaterialModule } from './shared/material/material.module';

@NgModule({
   declarations: [
      HomeComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      BrowserAnimationsModule,
      SharedModule,
      BlockModule,
      CoreModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
