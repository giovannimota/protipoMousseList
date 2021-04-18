import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './pages/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ListComponent } from './pages/list/list.component';
import { MainComponent } from './pages/main/main.component';
import { ListItemComponent } from './components/list-item/list-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ListComponent,
    MainComponent,
    ListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
