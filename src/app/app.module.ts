import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ButtonComponent } from './components/button/button.component';
import { ContainerComponent } from './layout/container/container.component';
import { GridComponent } from './layout/grid/grid.component';
import { BackgroundComponent } from './utilities/background/background.component';
import { BorderComponent } from './utilities/border/border.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    ContainerComponent,
    GridComponent,
    BackgroundComponent,
    BorderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
