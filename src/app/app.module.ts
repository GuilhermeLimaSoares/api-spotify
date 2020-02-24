import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { SearchInformationsComponent } from './search-informations/search-informations.component';

@NgModule({
  declarations: [
    AppComponent,
    AlbumDetailComponent,
    SearchInformationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
