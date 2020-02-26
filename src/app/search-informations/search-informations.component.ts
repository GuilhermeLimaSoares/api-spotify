import { Component, OnInit } from '@angular/core';
import { ChangePageService } from 'src/services/change-page.service';
import { SpotifyInformationsService } from 'src/services/spotify-informations.service';

@Component({
  selector: 'app-search-informations',
  templateUrl: './search-informations.component.html',
  styleUrls: ['./search-informations.component.css']
})
export class SearchInformationsComponent implements OnInit {
  public value;
  public name ='';
  constructor(
    private changePage: ChangePageService,
    private searchServices: SpotifyInformationsService,
    ){

  }


  ngOnInit() {

    console.log('apis');
    this.searchServices.getInformations()
      .subscribe((row) => {
        console.log('servicos', row);
    });
  }

  public getDetails(){
    console.log('name', this.value);
    this.changePage.isHomePageOpened(false);
  }

  searchAlbumArtistSongs() {
    this.searchServices.getInformations()
      .subscribe((row) => {
        console.log('servicos', row);
    });
  }

}
