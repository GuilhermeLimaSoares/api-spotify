import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { SearchInformationsComponent } from './search-informations/search-informations.component';
import { AlbumViewComponent } from './album-view/album-view.component';
import { routing } from './app.routing';
import { ChangePageService } from 'src/services/change-page.service';
import { SpotifyInformationsService } from 'src/services/spotify-informations.service';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    AlbumDetailComponent,
    SearchInformationsComponent,
    AlbumViewComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [ChangePageService, SpotifyInformationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
